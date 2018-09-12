const express = require('express')
const router = express.Router()

const {
  createNote,
  getNoteFromUid,
  getAllNotes,
  updateNoteFromUid,
  deleteNoteFromUid
} = require('./controller')

router.get('/ping', (req, res) => res.status(200).send({ ping: 'ok' }))

/* create */
router.post('/create', createNote)

/* read */
router.get('/all', getAllNotes)
router.get('/:uid', getNoteFromUid)

/* update */
router.patch('/:uid', updateNoteFromUid)

/* delete */
router.delete('/:uid', deleteNoteFromUid)

module.exports = router
