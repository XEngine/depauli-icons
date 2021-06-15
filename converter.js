const fs = require('fs')
const path = require('path')
const svgToVue = require('./svgtojs');


function readFiles(dir, processFile) {
    // read directory
    fs.readdir(dir, (error, fileNames) => {
        if (error) throw error;

        fileNames.forEach(filename => {
            // get current file name
            const name = path.parse(filename).name;
            // get current file extension
            const ext = path.parse(filename).ext;
            // get current file path
            const filepath = path.resolve(dir, filename);

            // get information about the file
            fs.stat(filepath, function(error, stat) {
                if (error) throw error;

                // check if the current path is a file or a folder
                const isFile = stat.isFile();

                // exclude folders
                if (isFile) {
                    // callback, do something with the file
                    processFile(filepath, name, ext, stat);
                }
            });
        });
    });
}

function camelize(str){
    let arr = str.split('-');
    let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());
    return capital.join("")
}

readFiles('src/svg/', (filepath, name, ext, stat) => {
    const file = fs.readFileSync(filepath, 'utf-8');
    svgToVue(file)
        .then((component) => {
            // `component` contains Vue component definition
            fs.writeFileSync('src/js/' + camelize(name) + '.js', component)
        });

    /*let fileTemplate = template
    fileTemplate = fileTemplate.replace("{{svgData}}", file).replace(/{{svgName}}/g, camelize(name))

    fs.writeFileSync('src/js/' + name + '.js', fileTemplate)*/
});