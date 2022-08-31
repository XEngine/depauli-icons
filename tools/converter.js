const fs = require('fs-extra')
const path = require('path')
const svgToVue = require('./svgtojs');
const {pascalCase} = require("pascal-case");
const fastGlob = require('fast-glob');

async function main() {
    await fs.emptyDir('./icons/')
    await fs.remove('./src/icons.js')

    const componentify = (name) => pascalCase(`${name}`).replace("_", "")
    const startsWithNumber = (str) => /^\d/.test(str)

    const icons = [
        {
            name: 'bold',
            package: 'dp-icons-bold',
            path: './svg/bold/',
        },
        {
            name: 'light',
            package: 'dp-icons-light',
            path: './svg/light/',
        },
        {
            name: 'regular',
            package: 'dp-icons-regular',
            path: './svg/regular/',
        },
    ]

    for (const iconPackage of icons) {

        /*        if(iconPackage.package !== 'dp-icons-light'){
                    continue
                }*/

        const iconFiles = fastGlob.sync(`${iconPackage.path}*.svg`);
        const indexContent = []
        const iconNameContent = []
        const packageJsonEntries = {}

        for (const icon of iconFiles) {
            const fileName = icon.split('/').pop().split('.')[0]
            const iconName = componentify(fileName);

            /*  if(iconName !== "Shop"){
                  continue;
              }*/

            if (startsWithNumber(iconName)) {
                continue;
            }

            const svg = await fs.readFile(icon, "utf8");
            try {
                const component = await svgToVue(fileName, iconName, svg, iconPackage);
                packageJsonEntries[`./${iconName}`] = {import: `./dist/${iconName}.es.js`, require: `./dist/${iconName}.umd.js`}
                fs.writeFile(`./packages/${iconPackage.package}/icons/${iconName}.js`, component, "utf8");
                console.log(iconPackage.package, iconName, 'done')

            } catch (e) {
                console.log(icon, iconName)
                console.log(e)
            }

            indexContent.push(`import ${iconName} from './icons/${iconName}'`)
            iconNameContent.push(iconName)
        }

        const indexFileResult = `${[...new Set(indexContent)].join('\n')}\n\nexport {${[...new Set(iconNameContent)].join(',\n')}}`

        const packageJson = fs.readJsonSync(`./packages/${iconPackage.package}/package.json`)
        packageJson.exports = {...packageJson.exports, ...packageJsonEntries}
        fs.writeJsonSync(`./packages/${iconPackage.package}/package.json`, packageJson, {spaces: 4})

        fs.writeFileSync(`./packages/${iconPackage.package}/index.js`, indexFileResult, "utf8");
    }
}

main().catch((err) => {
    console.error(err);
});
