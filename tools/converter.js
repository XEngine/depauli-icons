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
            name: 'misc',
            package: 'src/icons/misc',
            path: './svg/misc/',
        },
        {
            name: 'bold',
            package: 'src/icons/bold',
            path: './svg/bold/',
        },
        {
            name: 'light',
            package: 'src/icons/light',
            path: './svg/light/',
        },
        {
            name: 'regular',
            package: 'src/icons/regular',
            path: './svg/regular/',
        },
    ]

    for (const iconPackage of icons) {

        const iconFiles = fastGlob.sync(`${iconPackage.path}*.svg`);
        const iconNameContent = []
        for (const icon of iconFiles) {
            const fileName = icon.split('/').pop().split('.')[0]
            const iconName = componentify(fileName);

            if (startsWithNumber(iconName)) {
                continue;
            }

            const svg = await fs.readFile(icon, "utf8");
            try {
                const component = await svgToVue(fileName, iconName, svg, iconPackage);
                await fs.writeFileSync(`./${iconPackage.package}/${iconName}.ts`, component, "utf8");
                console.log(iconPackage.package, iconName, 'done')
            } catch (e) {
                console.log(icon, iconName)
                console.log(e)
            }

            iconNameContent.push(iconName)
        }

        const indexFileResult = [...new Set(iconNameContent)].map(x => `export { ${x} } from "./${x}";`).join('\n')
        fs.writeFileSync(`./${iconPackage.package}/index.ts`, indexFileResult, "utf8");
    }
}

main().catch((err) => {
    console.error(err);
});
