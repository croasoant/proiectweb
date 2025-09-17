const Comment = require('../models/Comment');
const Article = require('../models/Article');

// ➕ Adăugare comentariu
exports.add = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    const comment = new Comment({
      content: req.body.content,
      author: req.user._id,
      article: req.params.id
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🗑️ Ștergere comentariu
exports.remove = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    if (comment.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }
    await comment.deleteOne();
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📋 LISTARE comentarii pentru articol
exports.listByArticle = async (req, res) => {
  try {
    const comments = await Comment.find({ article: req.params.articleId })
      .populate('author', 'name email');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
