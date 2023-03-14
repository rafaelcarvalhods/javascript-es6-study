class Animal {
    constructor(kind, sound) {
        this.kind = kind
        this.sound = sound
    }
}

Animal.prototype.hello = function() {
    console.log(`Hi! I'm a ${this.kind}.`)
}

const dog = new Animal("Dog", "AuAu")
console.log(dog)