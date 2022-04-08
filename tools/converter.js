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
            name: 'light',
            package: 'dp-icons-light',
            path: './svg/light/',
        },
        {
            name: 'bold',
            package: 'dp-icons-bold',
            path: './svg/bold/',
        },
        {
            name: 'regular',
            package: 'dp-icons-regular',
            path: './svg/regular/',
        },
    ]

    for (const iconPackage of icons) {
        const iconFiles = fastGlob.sync(`${iconPackage.path}*.svg`);
        const indexContent = []

        for (const icon of iconFiles) {
            const fileName = icon.split('/').pop().split('.')[0]
            const iconName = componentify(fileName);

            if (startsWithNumber(iconName)) {
                continue;
            }

            const svg = await fs.readFile(icon, "utf8");
            try {
                const component = await svgToVue(fileName, iconName, svg);
                await fs.writeFileSync(`./packages/${iconPackage.package}/icons/${iconName}.js`, component, "utf8");
            } catch (e) {
                console.log(icon, iconName)
                console.log(e)
            }

            indexContent.push(`export ${iconName} from './icons/${iconName}'`)
        }
        fs.writeFileSync(`./packages/${iconPackage.package}/index.js`, indexContent.join('\n'), "utf8");
    }
}

main().catch((err) => {
    console.error(err);
});
