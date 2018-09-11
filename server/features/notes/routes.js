const express = require('express')
const router = express.Router()

const {
  createNote,
  getNote,
  getAllNotes,
  updateNote,
  deleteNote
} = require('./controller')

router.get('/ping', (req, res) => res.status(200).send({ ping: 'ok' }))

/* create */
router.post('/create', createNote)

/* read */
router.get('/all', getAllNotes)
router.get('/:uid', getNote)
router.get('/:code', getNote)
router.get('/:term', getNote)

/* update */
router.patch('/:uid', updateNote)

/* delete */
router.delete('/:uid', deleteNote)

module.exports = router
