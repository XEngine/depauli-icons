module.exports = (cssString) => {
    if(!cssString) return {};
    cssString = cssString.replace(/\s/g, '');

    const regex = /\.([^{}]+){([^{}]+)}/g;
    let matches;
    const cssObject = {};

    while ((matches = regex.exec(cssString)) !== null) {
        const [_, className, propertiesString] = matches;
        const properties = propertiesString.split(';');

        const classObject = {};
        for (const property of properties) {
            const [propertyName, propertyValue] = property.split(':');
            if (propertyName && propertyValue) {
                classObject[propertyName] = propertyValue;
            }
        }

        cssObject[className] = classObject;
    }

    return cssObject;
}