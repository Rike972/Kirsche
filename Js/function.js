
const person1 = {
    name: 'Rike'
}
const person2 = {
    name: 'Freya'
}

function getRikesName() {
    return person1.name
}

function getName(person) {
    return person.name
}

console.log(getName(person2))