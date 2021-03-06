const express = require('express');
const res = require('express/lib/response');

const Todo = require('../models/todo-model');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('here');
    Todo.find({})
        .then((todos) => {
            res.render('todos/index', { todos })
        })
        .catch(console.error);
    
})

router.get('/new', (req, res) => {
    res.render('todos/new');
  });


router.get('/:id', (req, res) => {
    Todo.findById(req.params._id)
        .then((todo) => {
            res.render('todos/show', todo)
        })
        .catch(console.error);
})


router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    Todo.findById(id)
        .then((todo) => {
            res.render('todos/edit', todo)
        })
        .catch(console.error);
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    Todo.findOneAndUpdate(
        {_id: id},
        {
            title: req.body.title,
            complete: req.body.complete === 'on'
        },
        {new: true}
    )
    .then((todo) => {
        res.render('todos/show', todo)
    })
    .catch(console.error)
})


router.post('/', (req, res) => {
    Todo.create(req.body)
        .then((todo) => {
            res.redirect('/todos');
        })
        .catch(console.error);
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Todo.findOneAndRemove({ _id: id })
      .then(() => {
        res.redirect('/todos');
      })
      .catch(console.error);
  });


module.exports = router;