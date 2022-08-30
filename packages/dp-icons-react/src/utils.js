export const reactifyAttributes = (attrs) => {
    return Object.keys(attrs).reduce((acc, key) => {
        const leKey = key.split('-')
            .map((x, index) => index !== 0
                ? x.charAt(0).toUpperCase() + x.substring(1)
                : x)
            .join('')
        acc[leKey] = attrs[key]
        return acc
    }, {})
}

export const sizeCalculate = (value) => {
    return value.slice(-1) === 'x' ? value.slice(0, value.length - 1) + 'rem' : parseInt(value) + 'px'
}