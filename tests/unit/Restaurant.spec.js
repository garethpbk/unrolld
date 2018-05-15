const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

describe('CREATE_RESTAURANT', () => {
  let restaurant;

  beforeEach(async () => {
    restaurant = await Restaurant.create({
      name: 'Testaurant',
      address: '123 Fake St, San Diego, CA 92101',
      hours: '24/7',
      images: [],
    });
  });

  test('Can create and retrieve restaurant', async () => {
    await console.log(restaurant);
    const fetchedRestaurant = await Restaurant.findById(restaurant._id);
    expect(fetchedRestaurant.name).toEqual('Testaurant');
  });
});

describe('READ_RESTAURANTS', () => {
  let restaurants;

  beforeEach(async () => {
    restaurants = await Restaurant.insertMany([
      {
        name: 'Testaurant 1',
        address: '123 Fake St, San Diego, CA 92101',
        hours: '24/7',
        images: [],
      },
      {
        name: 'Testaurant 2',
        address: '321 Fake Ave, San Diego, CA 92102',
        hours: '6AM - 3AM',
        images: [],
      },
    ]);
  });

  test('Can create 2 restaurants and verify they were inserted', async () => {
    await console.log(restaurants);
    const createdRestaurants = await Restaurant.find({});
    expect(createdRestaurants.length).toEqual(2);
  });
});

describe('UPDATE_RESTAURANT', () => {
  let restaurant;

  beforeEach(async () => {
    restaurant = await Restaurant.create({
      name: 'Testaurant 3',
      address: '231 Fake St, San Diego, CA 92104',
      hours: '12PM - 5PM',
      images: [],
    });
  });

  test('Can update restaurant properties', async () => {
    const updateObj = {
      name: 'Testaurant 3.5',
      address: '231 Fake St, San Diego, CA 92104',
      hours: '12PM - 5PM',
      images: [],
    };
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurant._id,
      updateObj,
      { new: false },
      (err, doc) => {
        err ? console.log(err) : console.log(doc);
      }
    );

    expect(updatedRestaurant.name).toEqual('Testaurant 3.5');
  });
});
