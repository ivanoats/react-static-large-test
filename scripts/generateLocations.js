const faker = require('faker');
const fs = require('fs');
const path = require('path');

const id = faker.random.uuid
const city = faker.address.city
const state = faker.address.state
const body = faker.lorem.paragraph

const numLocations = 10000

for (let i = 0; i < numLocations; i++) {
  const location = {
    id: id(),
    name: city(),
    state: state(),
    body: body()
  }

  fs.writeFile(
    path.join(__dirname, '..', 'tmp', 'locations', `${location.id}.json`),
    JSON.stringify(location, null, 2),
    err => {
      if (err) {
        throw err
      }
      process.stdout.clearLine()
      process.stdout.write(`Created ${location.id}`)
      process.stdout.cursorTo(0)
    }
  )
}
