const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const Admin = require('./models/Admin');

dotenv.config({ path: __dirname + '/.env' });

const products = [
  {
    name: 'Daily Comfort',
    description: 'Breathable daily disposable lenses for all-day comfort',
    price: 'R399.99',
    image: 'https://images.unsplash.com/photo-1587258459922-7a83f86a78e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Hydra Clear',
    description: 'Monthly lenses with superior moisture retention',
    price: 'R599.99',
    image: 'https://images.unsplash.com/photo-1616065297013-2dab7b3a917b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Color Enhance',
    description: 'Vibrant colored contacts for a natural look',
    price: 'R499.99',
    image: 'https://images.unsplash.com/photo-1577037834201-1975f9b1b8d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Vision Extended',
    description: 'Extended wear contacts for up to 30 days',
    price: 'R699.99',
    image: 'https://images.unsplash.com/photo-1609181726987-e0b9c63e7e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
];

const importData = async () => {
  await connectDB();
  try {
    await Product.deleteMany();
    await Admin.deleteMany();

    await Product.insertMany(products);

    const adminUser = new Admin({
      username: 'admin',
      password: 'password123',
    });
    await adminUser.save();

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  await connectDB();
  try {
    await Product.deleteMany();
    await Admin.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
