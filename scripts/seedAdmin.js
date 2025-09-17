// Node script to create an admin user (run with: node scripts/seedAdmin.js)
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
async function run() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/user_articles_db');
  const existing = await User.findOne({ email: 'admin@example.com' });
  if (existing) {
    console.log('Admin already exists');
    process.exit(0);
  }
  const u = new User({ name: 'Admin', email: 'admin@example.com', password: 'admin123', role: 'admin' });
  await u.save();
  console.log('Admin created: admin@example.com / admin123');
  process.exit(0);
}
run().catch(err => { console.error(err); process.exit(1); });
