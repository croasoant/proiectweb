const User = require('../models/User');

// ✅ listare utilizatori fără parolă
exports.listUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ schimbare rol
exports.changeRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    if (!['user','admin'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }
    const user = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.searchByName = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ message: 'Please provide a name' });
    }

    const users = await User.find({ name: new RegExp(name, 'i') });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};