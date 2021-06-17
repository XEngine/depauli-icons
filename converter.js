const fs = require('fs-extra')
const path = require('path')
const svgToVue = require('./svgtojs');
const {pascalCase} = require("pascal-case");

async function main() {
    await fs.emptyDir('./icons/')
    await fs.remove('./src/icons.js')

    const iconDirsPath = path.join(__dirname, "svg");

    const filenames = await fs.readdir(iconDirsPath);
    const icons = filenames.map((filename) => {
        const name = filename.split(".")[0];
        return {
            path: path.join(iconDirsPath, filename),
            name,
            componentName: pascalCase(`${name}`).replace("_", ""),
        };
    });

    const iconsJSPath = path.join(__dirname, "./src/icons.js");

    for (const icon of icons) {
        // Create Vue component files
        const svg = await fs.readFile(icon.path, "utf8");
        const component = svgToVue(icon.name, svg);
        const filepath = `./icons/${icon.componentName}.js`;
        await fs.ensureDir(path.dirname(filepath));
        await fs.writeFile(filepath, component, "utf8");

        // Create packages directories
        const packagePath = `./src/`;

        const iconsJsContent = `export { default as ${icon.componentName} } from '../icons/${icon.componentName}'`.concat(
            "\n"
        );

        if (await fs.exists(iconsJSPath)) {
            await fs.appendFile(iconsJSPath, iconsJsContent, "utf8");
        } else {
            await fs.writeFile(iconsJSPath, iconsJsContent, "utf8");
        }
    }
}

main().catch((err) => {
    console.error(err);
});