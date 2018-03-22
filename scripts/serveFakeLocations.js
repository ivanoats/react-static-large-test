const faker = require('faker')

const id = faker.random.uuid
const city = faker.address.city
const state = faker.address.state
const body = faker.lorem.paragraph

const numLocations = 100000

module.exports = () => {
  const data = { locations: [] }
  for (let i = 0; i < numLocations; i++) {
    const location = {
      id: id(),
      name: city(),
      state: state(),
      body: body()
    }
    data.locations.push(location)
  }
  return data
}
