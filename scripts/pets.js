let BowWowKennels =[]

const createPet = (name,breed) => {
    const newPet = {
        name:name,
        breed:breed
    }
    BowWowKennels.push(newPet)
    console.log(BowWowKennels)
    return BowWowKennels
}

export default createPet