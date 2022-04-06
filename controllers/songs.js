const express = require('express');
// const res = require('express/lib/response');
const Song = require('../models/song-model');
const router = express.Router();



router.get('/', (req, res) => {
    console.log('here');
    Song.find({})
        .then((songs) => {
            res.render('songs/index', { songs })
        })
        .catch(console.error);
    
})

router.get('/new', (req, res) => {
    res.render('songs/new');
  })


  router.get('/:id', (req, res) => {
    Song.findById(req.params._id)
        .then((song) => {
            res.render('songs/show', song)
        })
        .catch(console.error);
})


router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    Song.findById(id)
        .then((song) => {
            res.render('songs/edit', song)
        })
        .catch(console.error);
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    Song.findOneAndUpdate(
        {_id: id},
        {
            song: req.body.song,
            artist: req.body.artist
        },
        {new: true}
    )
    .then((song) => {
        res.render('songs/show', song)
    })
    .catch(console.error)
})


router.post('/', (req, res) => {
    Song.create(req.body)
        .then((song) => {
            res.redirect('/songs');
        })
        .catch(console.error);
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Song.findOneAndRemove({ _id: id })
      .then(() => {
        res.redirect('/songs');
      })
      .catch(console.error);
  });

module.exports = router;