class Library {
    constructor() {
        this.store = {}
    }

    add(icon){
        this.store[icon.name] = icon
    }

    addRange(icons){
        icons.forEach(icon => {
            this.store[icon.name] = icon
        })
    }

    has(name){
        return !!this.store[name]
    }

    get(name){
        if(this.has(name)){
            return this.store[name]
        }

        throw new Error(`Unable to find icon : ${name}`)
    }
}

export default (new Library);
