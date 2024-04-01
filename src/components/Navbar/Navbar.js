import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Divider, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bought, deleteProduct } from '../Cards/cardSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const firstItem = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  // FOR MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(bought());
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // QUANTITIY
  const [quantity, setQuantity] = useState({});
  useEffect(() => {
    if (firstItem) {
      const initialQuantities = {};
      firstItem.forEach((product) => {
        initialQuantities[product.id] = 1;
      });
      setQuantity(initialQuantities);
    }
  }, [firstItem]);
  const increaseQuantity = (id) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [id]: (prevQuantity[id] || 0) + 1,
    }));
  };
  const decreaseQuantity = (id) => {
    if (quantity[id] > 1) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [id]: Math.max(0, (prevQuantity[id] || 1) - 1),
      }));
    }
  };
  // DELETE SINGLE PRODUCT ENABLING A CARD
  const deletitem = (id) => {
    dispatch(deleteProduct(id));
  };
  // GRAND TOTAL
  console.log("firstItem===>", quantity)
  const grandTotal = firstItem.reduce((total, product) => {
    return total + ((quantity[product.id] || 0) * product.price);
  }, 0);

  return (
    <Row className="flex justify-center items-center fixed h-[100px] w-[100%] px-[60px] top-0  bg-white z-50 shadow-xl">
      <Col lg={12} md={12} sm={12} xs={12}>
        <Link to="/">
          <h1 className="font-medium text-[24px]">Home</h1>
        </Link>
      </Col>
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="flex flex-row justify-end items-center gap-x-[10px]"
      >
        <Badge count={firstItem.length}>
          <Button
            onClick={showModal}
            className="flex justify-center items-center rounded-[100%] h-full w-full p-[10px]"
          >
            <ShoppingCartOutlined className="text-[20px]" />
          </Button>
        </Badge>
        <Modal
          className="px-[10px]"
          title="Your Cart"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={650}
          footer={[
            <div className="flex justify-between">
              <h2>Grand Total- ${grandTotal}</h2>
              <div>
                <Button className='mr-[10px]' key="back" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button key="submit" onClick={handleOk}>
                  Buy These
                </Button>
              </div>
            </div>,
          ]}
        >
          <Row className="flex justify-between font-bold">
            <Col md={5} sm={5} xs={5} className="flex justify-start items-center">
              Name
            </Col>
            <Col md={5} sm={5} xs={5} className="flex justify-center items-center">
              Quantity
            </Col>
            <Col md={5} sm={5} xs={5} className="flex justify-center items-center pl-8">
              Price
            </Col>
            <Col md={5} sm={5} xs={5} className="flex justify-center items-center pl-8">
              Total
            </Col>
            <Divider className="my-[8px]" />
          </Row>
          {firstItem.map((product) => (
            <Row key={product.id} className="flex justify-between">
              <Col md={5} sm={5} xs={5} className="flex justify-start items-center">
                {product.name}
              </Col>
              <Col
                md={5}
                sm={5}
                xs={5}
                className="flex justify-center items-center gap-x-[15px]"
              >
                <Button
                  className="h-[20px] w-[20px] flex justify-center items-center"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </Button>
                {quantity[product.id] || 0}
                <Button
                  className="h-[20px] w-[20px] flex justify-center items-center"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </Button>
              </Col>
              <Col md={5} sm={5} xs={5} className="flex justify-center items-center pl-8">
                ${product.price}
              </Col>
              <Col md={5} sm={5} xs={5} className="flex justify-end items-center gap-x-1">
                <div>${(quantity[product.id] || 0) * product.price}</div>
                <Button
                  onClick={() => deletitem(product.id)}
                  className="flex justify-center items-center"
                >
                  <DeleteOutlined />
                </Button>
              </Col>
              <Divider className="my-[5px]" />
            </Row>
          ))}
        </Modal>
      </Col>
    </Row>
  );
};

export default Navbar;
