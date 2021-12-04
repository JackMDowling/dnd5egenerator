const mongoose = require('mongoose')

const characterSchema = mongoose.Schema({
    class: String,
    race: String,
    alignment: String,
    gender: String,
    name: String,
    str: Number,
    dex: Number,
    con: Number,
    int: Number,
    wis: Number,
    cha: Number,
    ideal: String,
    bond: String,
    flaw: String,
    story: String,
})

mongoose.connect('mongodb://localhost:27017/dnd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('db connected')
})

const Character = mongoose.model('Character', characterSchema, 'characters');

const saveCharacter = (data) => {
    const { character } = data
    const { story } = data

    const doc = new Character
    doc.class = character.class
    doc.race = character.race
    doc.name = character.name
    doc.alignment = character.alignment
    doc.str = character.str
    doc.dex = character.dex
    doc.con = character.con
    doc.int = character.int
    doc.wis = character.wis
    doc.cha = character.cha
    doc.ideal = character.ideal
    doc.bond = character.bond
    doc.flaw = character.flaw
    doc.story = story
    doc.save()
}

const getRandomSaved = async () => Character.aggregate([{ $sample: { size: 1 } }])


module.exports.saveCharacter = saveCharacter
module.exports.getRandomSaved = getRandomSaved