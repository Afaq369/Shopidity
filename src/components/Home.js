import React from 'react';
import Card from './Cards/Card';
import { Col, Row } from 'antd';

export const Items = [
  {
    id: 1,
    src: '/assets/images/Watch-1.jpg',
    price: 700,
    name: 'Garmin vivoactive 5',
    decs: 'Ultimate GPS smartwatch with vibrant AMOLED display, essential health features, 30+ sports apps, smart notifications, and music storage.',
  },
  {
    id: 2,
    src: '/assets/images/watch-2.jpg',
    price: 299,
    name: 'ATTACK 2 Smartwatch',
    decs: 'Multi-functional smartwatch with step counter, heart rate monitoring, sleep tracking, message reminders, and compatibility with various languages and apps.',
  },
  {
    id: 3,
    src: '/assets/images/watch-3.jpg',
    price: 299,
    name: 'inspire 3',
    decs: 'Health tracker with stress, fitness, and sleep monitoring. Get daily scores and health metrics, including skin temperature and blood oxygen levels.',
  },
  {
    id: 4,
    src: '/assets/images/carcharger.jpg',
    price: 79,
    name: 'Car Charger',
    decs: 'Officially licensed charger for Nintendo Switch, featuring 5V/3.0A charging power, 6-foot cable, and safe, efficient charging on the go.',
  },
  {
    id: 5,
    src: '/assets/images/ps4-1.jpg',
    price: 1999,
    name: 'PlayStation 4, PlayStation',
    decs: 'Professionally inspected and tested pre-owned product, backed by the Amazon Renewed Guarantee for quality assurance.',
  },
  {
    id: 6,
    src: '/assets/images/mouse-2.jpg',
    price: 149,
    name: 'Logitech G Mark-II',
    decs: 'Updated gaming mouse with Hero 16K Optical sensor, customizable RGB lighting, and comfortable design for precise gameplay.',
  },
  {
    id: 7,
    src: '/assets/images/psp-1.jpg',
    price: 1000,
    name: 'SONY PSP',
    decs: 'Professionally inspected and tested pre-owned product, backed by the Amazon Renewed Guarantee for quality assurance.',
  },
  {
    id: 8,
    src: '/assets/images/headphones-1.jpg',
    price: 599,
    name: 'Logitech G335',
    decs: 'Wired gaming headset with lightweight design, adjustable suspension headband, memory foam ear cups, and sports mesh material for comfort.',
  },
  {
    id: 9,
    src: '/assets/images/xbox-3.jpg',
    price: 3999,
    name: 'Kinhank Super Console X5',
    decs: 'Retro console with RockChip RK3588S chip, 8-core CPU, 8GB RAM, 64GB ROM, and support for up to 18TB expansion.',
  },
  {
    id: 10,
    src: '/assets/images/nintendo-1.jpg',
    price: 1299,
    name: 'Nintendo Switch Split Pad',
    decs: 'Attaches to Nintendo Switch for full-size controller experience in Handheld Mode. Features analog sticks, D-pad, turbo functions, and assignable buttons.',
  },
  {
    id: 11,
    src: '/assets/images/nintendo-2.jpg',
    price: 999,
    name: 'Nintendo Switch Pro Controller',
    decs: 'Enhance game sessions with motion controls, HD rumble, built-in amiibo functionality, and comfortable design.',
  },
  {
    id: 12,
    src: '/assets/images/mouse-1.jpg',
    price: 79,
    name: '	Logitech G',
    decs: 'G703 Lightspeed gaming mouse with Hero 25K sensor, Powerplay compatibility, comfortable design, and crisp, clean clicks for competitive gaming.',
  },
  {
    id: 13,
    src: '/assets/images/mug.jpg',
    price: 79,
    name: '3dRose computer pro-gamer',
    decs: 'Novelty coffee mug with various designs for expressing your mood or personality. Makes a thoughtful gift for anyone.',
  },
  {
    id: 14,
    src: '/assets/images/laptop.jpg',
    price: 7999,
    name: '	Raider GE77HX 12UGS-004',
    decs: 'MSI gaming laptop with NVIDIA GeForce RTX 3070 Ti GPU, QHD 240Hz display, and cutting-edge AI features.',
  },
  {
    id: 15,
    src: '/assets/images/laptop-2.jpg',
    price: 8999,
    name: 'MSI CYBORG',
    decs: 'Futuristic gaming laptop with mechanized exterior design, delivering groundbreaking performance and cyberpunk style.',
  },
  {
    id: 16,
    src: '/assets/images/mug-2.jpg',
    price: 79,
    name: 'DC Comics Mug',
    decs: 'Ceramic mug featuring Batman logo surrounded by bats, holds 14 ounces of your favorite beverage.',
  },
  {
    id: 17,
    src: '/assets/images/headphones-2.jpg',
    price: 599,
    name: 'Void ELITE Wireless Carbon',
    decs: 'Wireless gaming headset with custom-tuned audio drivers, microfiber mesh fabric, and memory foam ear pads for immersive gaming.',
  },
  {
    id: 18,
    src: '/assets/images/keyboard.jpg',
    price: 299,
    name: 'VIGOR GK30 COMBO White',
    decs: 'Backlit RGB gaming keyboard and mouse combo with dedicated hotkeys, anti-ghosting, mechanical feel, and stylish white design.',
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
