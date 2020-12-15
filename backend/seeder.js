import colors from 'colors';

import Order from './models/orderModel';
import Product from './models/productModel';
import User from './models/userModel';

import products from './data/products';
import users from './data/users';

// Themes color for console output
colors.setTheme({
  importSuccessColor: ['green', 'inverse', 'bold'],
  destroySuccessColor: ['red', 'inverse', 'bold'],
  seederFailedColor: ['red', 'underline', 'bold'],
});

import './db';

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);

    const [adminUSer] = createdUsers;

    // Add admin user reference
    const sampleProducts = products.map(product => ({
      ...product,
      user: adminUSer._id,
    }));

    await Product.insertMany(sampleProducts);

    console.log(`Data inported!`.importSuccessColor);
  } catch (error) {
    console.error(`Error: ${error.message}`.seederFailedColor);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log(`Data destroyed!`.destroySuccessColor);
  } catch (error) {
    console.error(`Error: ${error.message}`.seederFailedColor);
  }
};

if (process.argv[2] === '--destroy') {
  destroyData();
} else {
  importData();
}
