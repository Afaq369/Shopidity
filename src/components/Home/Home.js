import React from 'react';
import Card from '../Cards/Card';
import { Col, Row } from 'antd';

export const Items = [
  {
    id: 1,
    src: '/assets/images/product-1.jpg',
    price: 700,
    name: 'Product - 1',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 2,
    src: '/assets/images/product-2.png',
    price: 299,
    name: 'Product - 2',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 3,
    src: '/assets/images/product-3.png',
    price: 700,
    name: 'Product - 3',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 4,
    src: '/assets/images/product-4.png',
    price: 100,
    name: 'Product - 4',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 5,
    src: '/assets/images/product-5.jpg',
    price: 200,
    name: 'Product - 5',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 6,
    src: '/assets/images/product-6.jpg',
    price: 150,
    name: 'Product - 6',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 7,
    src: '/assets/images/product-7.jpg',
    price: 1000,
    name: 'Product - 7',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 8,
    src: '/assets/images/product-8.avif',
    price: 300,
    name: 'Product - 8',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 9,
    src: '/assets/images/product-9.jpg',
    price: 159,
    name: 'Product - 9',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 10,
    src: '/assets/images/product-10.webp',
    price: 120,
    name: 'Product - 10',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 11,
    src: '/assets/images/product-12.jpg',
    price: 500,
    name: 'Product - 11',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
  {
    id: 12,
    src: '/assets/images/product-11.jpg',
    price: 300,
    name: 'Product - 12',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum.',
  },
];

const Home = () => {
  return (
    <Row className="flex justify-center gap-[50px]">
      {Items.map((item) => (
        <Col key={item.id}>
          <Card
            id={item.id}
            src={item.src}
            name={item.name}
            price={item.price}
            decs={item.decs}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Home;
