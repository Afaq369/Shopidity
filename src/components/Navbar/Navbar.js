import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Modal, Row } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const firstItem = useSelector((state) => state.product.products);
  console.log('Selector===>', firstItem);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  return (
    <Row className="flex justify-center items-center fixed h-[100px] w-[100%] px-[60px] top-0  bg-[#f0f8ff] z-50">
      <Col lg={12} md={12} sm={12} xs={12}>
        <h1 className="font-medium text-[24px]">Home</h1>
      </Col>
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="flex flex-row justify-end items-center gap-x-[10px]"
      >
        <h1 className="font-medium text-[24px]">Cart</h1>
        <Button
          onClick={showModal}
          className="flex justify-center items-center rounded-[100%] p-[10px]"
        >
          <PlusOutlined />
        </Button>
        <Modal
          className="px-[10px]"
          title="Your Cart"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" onClick={handleOk}>
              Buy These
            </Button>,
          ]}
        >
          <Row className="flex justify-between font-bold">
            <Col md={6} sm={5} xs={5} className="flex justify-start">
              Name
            </Col>
            <Col md={6} sm={5} xs={5} className="flex justify-center">
              Quantity
            </Col>
            <Col md={6} sm={5} xs={5} className="flex justify-center pl-8">
              Price
            </Col>
            <Col md={6} sm={5} xs={5} className="flex justify-end">
              Total
            </Col>
            <Divider className="my-[8px]" />
          </Row>
          {firstItem.map((product) => (
            <div>
              <Row key={product.id} className="flex justify-between">
                <Col md={6} sm={5} xs={5} className="flex justify-start">
                  {product.name}
                </Col>
                <Col
                  md={6}
                  sm={5}
                  xs={5}
                  className="flex justify-center items-center gap-x-[15px]"
                >
                  <Button
                    className="h-[20px] w-[20px] flex justify-center items-center"
                    onClick={decreaseQuantity}
                  >
                    -
                  </Button>
                  {quantity}
                  <Button
                    className="h-[20px] w-[20px] flex justify-center items-center"
                    onClick={increaseQuantity}
                  >
                    +
                  </Button>
                </Col>
                <Col md={6} sm={5} xs={5} className="flex justify-center pl-8">
                  {product.price}
                </Col>
                <Col md={6} sm={5} xs={5} className="flex justify-end">
                  {quantity * product.price}
                </Col>
                <Divider className="my-[5px]" />
              </Row>
            </div>
          ))}
        </Modal>
      </Col>
    </Row>
  );
};

export default Navbar;
