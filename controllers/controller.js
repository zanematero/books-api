const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
	db.Book.find()
	.then((books) => {
		res.render('home/index', { books })
	})
	  .catch(err => {
		console.log(err)
		res.render('error')
	  })
  })
router.get('*', (req, res) => {
    res.render('error')
})

module.exports = router;