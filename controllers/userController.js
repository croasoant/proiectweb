const User = require('../models/User');

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.changeRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    if (!['user','admin'].includes(role)) return res.status(400).json({ message: 'Invalid role' });
    const user = await User.findByIdAndUpdate(id, { role }, { new: true }).select('-password');
    res.json(user);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
