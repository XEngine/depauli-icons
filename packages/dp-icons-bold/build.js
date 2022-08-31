import {build} from 'vite'
import fastGlob from 'fast-glob'

async function run() {
    const iconFiles = fastGlob.sync(`./icons/*.js`);

    const libraries = [
        {
            entry: './index.js',
            name: 'DPIconBold',
            fileName: (format) => `dp-icons-bold.${format}.js`
        },
        ...iconFiles.map(x => {
            const fileName = x.split('/').pop().split('.')[0]
            return {
                entry: x,
                name: fileName,
            }
        })
    ]

    for (let library of libraries) {
        const {name, entry, fileName} = library

        await build({
            build: {
                outDir: "./dist",
                lib: {
                    entry,
                    name,
                    fileName: (format) => fileName ? fileName(format) : `${name}.${format}.js`,
                    formats: ['umd', 'es']
                },
                emptyOutDir: false,
            },

        });
    }
}


run()