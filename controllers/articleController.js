const Article = require('../models/Article');
const Comment = require('../models/Comment');

exports.list = async (req, res) => {
  try {
    const q = req.query.q ? { $text: { $search: req.query.q } } : {};
    const articles = await Article.find(q).populate('author','name email').populate('category').sort({ createdAt: -1 });
    res.json(articles);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.get = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate('author','name email').populate('category');
    if (!article) return res.status(404).json({ message: 'Not found' });
    const comments = await Comment.find({ article: article._id }).populate('author','name');
    res.json({ article, comments });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const article = await Article.create({ title, content, category, author: req.user._id });
    res.status(201).json(article);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.update = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Not found' });
    if (article.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not allowed' });
    }
    const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.remove = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Not found' });
    if (article.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not allowed' });
    }
    await article.remove();
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
