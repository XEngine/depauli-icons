export interface IconType {
    name: string
    key: string
    type: string
    width: number
    height: number
    attributes: any
    svgPathData: string[]
}

class Library {
    private store: Map<string, IconType>;

    constructor() {
        this.store = new Map()
    }

    add(icon: IconType): void {
        this.store.set(`${icon.name}_${icon.type}`, icon)
    }

    has(name: string): boolean {
        return this.store.has(name)
    }

    get(name: string, type: string = 'regular'): IconType | undefined {
        if (!name) {
            return undefined
        }

        if (name && this.has(`${name}_${type}`)) {
            return this.store.get(`${name}_${type}`)
        }

        console.warn(`Unable to find icon : ${name} in ${type} type`)
        return undefined
    }
}

export default (new Library);
