const Notes = require('./model')

function createNote(req, res) {
  Notes.create({ ...req.body }, (err, note) => {
    if (err || !note) {
      console.log({ err })
      return res.status(400).end(err)
    } else {
      console.log({ note })
      return res.status(200).send(note)
    }
  })
}

function getNoteFromUid(req, res) {
  const { uid } = req.params
  Notes.findOne({ uid }, (err, note) => {
    if (err || !note) {
      console.log({ err })
      return res.status(400).end(err)
    } else {
      console.log({ note })
      return res.status(200).send(note)
    }
  })
}

function getAllNotes(req, res) {
  Notes.find({}, (err, notes) => {
    if (err || !notes) {
      console.log({ err })
      return res.status(400).end(err)
    } else {
      console.log({ notes })
      return res.status(200).send(notes)
    }
  })
}

function updateNoteFromUid(req, res) {
  const { uid } = req.params
  const { property, replace } = req.body

  Notes.findOneAndUpdate(
    { uid },
    {
      [property]: replace
    },
    { new: true },
    (err, note) => {
      if (err || !note) {
        console.log({ err })
        return res.status(400).end(err)
      } else {
        console.log({ note })
        return res.status(200).send(note)
      }
    }
  )
}

function deleteNoteFromUid(req, res) {
  const { uid } = req.params
  Notes.findOneAndRemove({ uid }, (err, note) => {
    if (err || !note) {
      console.log({ err })
      return res.status(400).end(err)
    } else {
      console.log({ note })
      return res.status(200).send(note)
    }
  })
}

module.exports = {
  createNote,
  getNoteFromUid,
  getAllNotes,
  updateNoteFromUid,
  deleteNoteFromUid
}
