const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//  Mapping an Array
// 1. Get an array of all names

const nameArri = characters.map(item => item.name)


// Get an array of all heights

const heightArri = characters.map(item => item.height)


// Get an array of objects with just name and height properties

const heightName = characters.map(item => ({name: item.name, height: item.height}))


// Get an array of all first names

const firstNameArri = characters.map(item => item.name.split(' ')[0])


// Reduce
// Get the total mass of all characters

const reduceMass = characters.reduce((acc, item) => Number(acc) + Number(item.mass), 0)



// Get the total height of all characters

const reduceHeight = characters.reduce((acc, item) => Number(acc) + Number(item.height), 0)

// Get the total number of characters in all the character names

const reduceCount = characters.reduce((acc, item) => acc + item.name.length , 0)


// Get the total number of characters by eye color (hint. a map of eye color to count)

const eyeColorCount = characters.reduce((acc, item) => {
    const color = item.eye_color;
    if (acc[color]) {
        acc[color] += 1;

    } else {
        acc[color] = 1;
    }
    return acc;
    
}, {});

// Filetr
// Get characters with mass greater than 100

const filetrMass = characters.filter(item => Number(item.mass) > 100)

        
// Get characters with height less than 200

const filterheight = characters.filter(item => Number(item.height) < 200)

// Get all male characters
const filterMale = characters.filter(item => item.gender === "male")


// Get all female characters

const filterFemale = characters.filter(item => item.gender === "female")



// SORT

// Sort by name

const sortName = characters.sort((a,b) => {
    if(a.name < b.name){
        return -1
    }
    return 1
})
// Sort by mass

const sortMass = characters.sort((a,b) => {
    return Number(a.mass) - Number(b.mass)
})

// Sort by height

const sortHeight = characters.sort((a,b) => {
    return Number(a.height) - Number(b.height)
})
// Sort by gender

const sortGender = characters.sort((a,b) => {
    if(a.gender < b.gender){
        return -1
    }
    return 1
})


// EVERY

    // Does every character have blue eyes?

    const everyBlue = characters.every(item => item.eye_color === "blue")
    // Does every character have mass more than 40?
    const everyMass = characters.every(item => Number(item.mass) > 40)
    // Is every character shorter than 200?
    const everyShorter = characters.every(item => Number(item.height) < 200)

    // Is every character male?
    const everyMale = characters.every(item => item.gender === "male")

    // SOME

    // Is there at least one male character?
    const someMale = characters.some(item => item.gender === "male")
    // Is there at least one character with blue eyes?
    const someBlue = characters.some(item => item.eye_color === "blue")

    // Is there at least one character taller than 200?
    const someTaller = characters.some(item => Number(item.height) > 200)

    // Is there at least one character that has mass less than 50?
    const someMass = characters.some(item => Number(item.mass) < 50)


console.log(someMass)