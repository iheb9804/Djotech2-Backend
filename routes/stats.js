const express = require('express');
const Stat = require('../models/Stat');
const Product = require('../models/Product');
const { deleteOne } = require('../models/Product');
const router = express.Router();

router.get('/', async (req, res) => {
    Stat.find().then(
        stats => {
            res.json(stats);
        }
    ).catch(
        err => {
            res.json(err);
        }
    )
});

router.post('/', async (req, res) => {
    const stat = new Stat(
        {

        }
    )
    stat.save().then(data => {
        res.json(data);
    }).catch(err => res.json(err))

});







router.delete('/:id', async (req, res) => {
    Stat.findByIdAndRemove(req.params.id).then(data => {
        res.json(data)
    }).catch(err => res.json(err));
});


router.put('/sellProduct', async (req, res) => {
    Stat.findById(req.body._id).then(stat => {
        stat.quantity -= req.body.quantity;

        res.json(data)
    }).catch(err => res.json(err));
});

router.get('/:id', async (req, res) => {
    Stat.findById(req.params.id).then(data => {
        res.json(data)
    }).catch(err => res.json(err));
});

module.exports = router;