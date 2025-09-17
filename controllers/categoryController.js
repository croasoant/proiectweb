const Category = require('../models/Category');

exports.list = async (req, res) => {
  try {
    const cats = await Category.find();
    res.json(cats);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const c = await Category.create({ name });
    res.status(201).json(c);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
