class Library {
    constructor() {
        this.store = new Map()
    }

    add(icon){
        this.store.set(`${icon.name}_${icon.type}`, icon)
    }

    has(name){
        return this.store.has(name)
    }

    get(name, type = 'regular'){
        if(!name){
            return null
        }

        if(name && this.has(`${name}_${type}`)){
            return this.store.get(`${name}_${type}`)
        }

        console.warn(`Unable to find icon : ${name} in ${type} type`)
        return null
    }
}

export default (new Library);
