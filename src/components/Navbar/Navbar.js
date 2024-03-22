import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Image, Modal, Row } from 'antd';
import React, { useState } from 'react';
import { Items } from '../Home/Home';

const Navbar = () => {
  const firstItem = Items[0];
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
        <Button onClick={showModal} className="flex justify-center items-center rounded-[100%] p-[10px]">
          <PlusOutlined />
        </Button>
        <Modal
          title={firstItem.name}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" onClick={handleOk}>
              Add to Cart
            </Button>,
          ]}
        >
          <Image src={firstItem.src} width={'100%'} alt="Image" preview={false} />
          <div className="flex flex-row justify-between py-1">
            <h1 className="font-medium text-[20px]">{firstItem.name}</h1>
            <h3 className="font-medium text-[18px]">{firstItem.price}</h3>
          </div>
          <div>
            <h3 className="font-medium text-[18px]">{firstItem.decs}</h3>
          </div>
        </Modal>
      </Col>
    </Row>
  );
};

export default Navbar;
