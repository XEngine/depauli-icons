const fs = require('fs-extra')
const path = require('path')
const svgToVue = require('./svgtojs');
const {pascalCase} = require("pascal-case");
const fastGlob = require('fast-glob');

async function main() {
    const componentify = (name) => pascalCase(`${name}`).replace("_", "")
    const startsWithNumber = (str) => /^\d/.test(str)

    const icons = [
        {
            name: 'misc',
            package: 'packages/glyphs/src/misc',
            path: './svg/misc/',
        },
        {
            name: 'bold',
            package: 'packages/glyphs/src/bold',
            path: './svg/bold/',
        },
        /*{
            name: 'light',
            package: 'src/icons/light',
            path: './svg/light/',
        },*/
        {
            name: 'regular',
            package: 'packages/glyphs/src/regular',
            path: './svg/regular/',
        },
        {
            name: 'duotone',
            package: 'packages/glyphs/src/duotone',
            path: './svg/duotone/',
        },
        {
            name: 'typography',
            package: 'packages/glyphs/src/typography',
            path: './svg/typography/',
        },
    ]

    const iconsAcc = {}

    for (const iconPackage of icons) {
        const iconFiles = fastGlob.sync(`${iconPackage.path}*.svg`);
        const iconNameContent = []
        const uppercasePackageName = iconPackage.name.charAt(0).toUpperCase() + iconPackage.name.slice(1)
        iconsAcc[uppercasePackageName] = []

        for (const icon of iconFiles) {
            const fileName = icon.split('/').pop().split('.')[0]
            const iconName = componentify(fileName);

            if (startsWithNumber(iconName)) {
                continue;
            }

            const svg = await fs.readFile(icon, "utf8");
            try {
                const component = await svgToVue(fileName, iconName, svg, iconPackage, uppercasePackageName);
                await fs.writeFileSync(`./${iconPackage.package}/${iconName}${uppercasePackageName}.ts`, component, "utf8");
                console.log(iconPackage.package, iconName, 'done')
            } catch (e) {
                console.log(icon, iconName)
                console.log(e)
            }

            iconsAcc[uppercasePackageName].push(iconName+uppercasePackageName)
        }

       /* const indexFileResult = [...new Set(iconNameContent)].map(x => `export { ${x} } from "./${x}";`).join('\n')
        fs.writeFileSync(`./${iconPackage.package}/index.ts`, indexFileResult, "utf8");*/
    }

    //const accindex = Object.keys(iconsAcc).map(x => `export {${iconsAcc[x]} as ${iconsAcc[x]}${x} from "./${x.toLowerCase()}/${iconsAcc[x]}";`).join('\n')
    const accindex = Object.keys(iconsAcc).map(x => {
        return iconsAcc[x].map(y => `export { ${y} } from "./${x.toLowerCase()}/${y}";`).join('\n')
    }).join('\n')
    fs.writeFileSync(`./packages/glyphs/src/glyphs.ts`, accindex, "utf8");
}

main().catch((err) => {
    console.error(err);
});
