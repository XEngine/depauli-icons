import {build} from 'vite'
import fastGlob from 'fast-glob'
import fs from "fs-extra";
import Piscina from "piscina";

async function run() {
    const iconFiles = fastGlob.sync(`./icons/*.js`);

    const libraries = [
        {
            entry: './index.js',
            name: 'DPIconLight',
            exports: {
                key: '.',
                import: './dist/DPIconLight.es.js',
                require: './dist/DPIconLight.umd.js'

            }
        },
        ...iconFiles.map(x => {
            const fileName = x.split('/').pop().split('.')[0]
            return {
                entry: x,
                name: fileName,
                exports: {
                    key: `./${fileName}`,
                    import: `./dist/${fileName}.es.js`,
                    require: `./dist/${fileName}.umd.js`
                }
            }
        })
    ]

    const pool = new Piscina({
        filename: './worker.js'
    });
    const promises = []
    for (let library of libraries) {
        const {name, entry, fileName} = library
        promises.push(pool.run({name, entry, fileName}))
    }

    await Promise.all(promises)

    const packageJson = fs.readJsonSync(`./package.json`)
    packageJson.exports = libraries.reduce((acc, library) => {
        acc[library.exports.key] = {import: library.exports.import, require: library.exports.require}
        return acc
    }, {})
    fs.writeJsonSync(`./package.json`, packageJson, {spaces: 4})
}


run()