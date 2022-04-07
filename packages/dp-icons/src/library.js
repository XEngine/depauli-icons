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

        console.warn(`Unable to find icon : ${name}`)
        return null
    }
}

export default (new Library);
