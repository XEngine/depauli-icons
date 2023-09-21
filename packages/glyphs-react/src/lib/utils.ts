export const CSSstring = (string: string) => {
    const css_json = `{"${string
        .replace(/"/g, "")
        .replace(/;/g, '", "')
        .replace(/:/g, '": "')
        .replace(";", "")}"}`;

    const obj = JSON.parse(css_json);

    const keyValues = Object.keys(obj).map((key) => {
        const camelCased = key.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
        return { [camelCased]: obj[key].trim() };
    });
    return Object.assign({}, ...keyValues);
}
export const reactifyAttributes = (attrs: any) => {
    if (!attrs) return {};

    return Object.keys(attrs).reduce((acc, key) => {
        const leKey = key.split('-')
            .map((x, index) => index !== 0
                ? x.charAt(0).toUpperCase() + x.substring(1)
                : x)
            .join('')
        if(leKey === 'style'){
            acc[leKey] = CSSstring(attrs[key])
            return acc
        }
        acc[leKey] = attrs[key]
        return acc
    }, {} as any)
}
export const remToPx = (val: string) => {
    return parseFloat(val) * (typeof getComputedStyle === 'function' ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16)
}
export const sizeCalculate = (value: string | number) : string => {
    if(typeof value === "number") return value + 'px'

    return (value.slice(-1) === 'x' ? remToPx(value.slice(0, value.length - 1)) : parseInt(value)) + 'px'
}