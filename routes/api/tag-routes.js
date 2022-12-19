const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { create } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include: [Product]})
    .then((allTag) => {
      res.json(allTag)
    })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id)
    .then((oneTag) => {
      res.json(oneTag)
    })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((createdTag) => {
      res.json(createdTag)
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {where: { id: req.params.id }})
    .then((updatedTag) => {
      res.json(updatedTag)
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where: { id: req.params.id }})
    .then((deletedTag) => {
      res.json(deletedTag)
    })
});

module.exports = router;
