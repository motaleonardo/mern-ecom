import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Leonardo',
      email: 'mota.vleonardo@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Raquel',
      email: 'raquel@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirt',
      image: '/images/p1.jpeg',
      price: '120.90',
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Shirt',
    },
    {
      //_id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirt',
      image: '/images/p2.jpeg',
      price: '250.90',
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'High Quality Shirt',
    },
    {
      //_id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pant',
      image: '/images/p3.jpeg',
      price: '25.90',
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'High Quality Shirt',
    },
    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pant',
      image: '/images/p4.jpeg',
      price: '65.90',
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Shirt',
    },
  ],
};

export default data;
