module.exports = {
    getHouses: async (req, res) => {
        let db = req.app.get('db')
        let houses = await db.get_houses()
        res.status(200).send(houses)
    },
    addHouse: async (req, res) => {
        const { propertyName, address, city, state, zip } = req.body
        let db = req.app.get('db')
        let newHouse = await db.add_house([propertyName, address, city, state, zip])
        res.status(200).send(newHouse)
    },
    deleteHouse: async (req, res) => {
        const { id } = req.params
        let db = req.app.get('db')
        let updatedHouses = await db.delete_house(id)
        res.status(200).send(updatedHouses)
    }
}