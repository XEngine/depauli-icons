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
        /*{
            name: 'bold',
            package: 'dp-icons-bold',
            path: './svg/bold/',
        },
        {
            name: 'regular',
            package: 'dp-icons-regular',
            path: './svg/regular/',
        },*/
    ]
    const iconsJSPath = path.join(__dirname, "./src/icons.js");

    for (const iconPackage of icons) {
        const iconFiles = fastGlob.sync(`${iconPackage.path}*.svg`);
        const indexContent = []

        for(const icon of iconFiles){
            const iconName = componentify(icon.split('/').pop().split('.')[0]);

            if(startsWithNumber(iconName)){
                continue;
            }

            const svg = await fs.readFile(icon, "utf8");
            const component = svgToVue(iconName, iconName, svg);

            await fs.writeFileSync(`./packages/${iconPackage.package}/icons/${iconName}.jsx`, component, "utf8");

            indexContent.push(`export { default as ${iconName} } from '../icons/${iconName}'`)

            return
        }
        console.log(indexContent)
    }
}

main().catch((err) => {
    console.error(err);
});