import { Button, Image, Modal, Row } from 'antd';
import React, { useState } from 'react';

const Card = ({ src, name, price, decs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(1)
  const incrementCount = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const decrementCount = () => {
    // Ensure count does not go below 1
    setCount((currentCount) => Math.max(1, currentCount - 1));
  };

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
    <Row className="max-w-[350px] p-[20px] rounded-[20px] shadow-2xl bg-[#f0f8ff]">
      <div className="flex justify-center">
        <Image src={src} width={'100%'} alt="Image" preview={false} />
      </div>
      <div className="w-full flex flex-row justify-between items-center py-2">
        <div>
          <h1 className="font-medium text-[20px]">{name}</h1>
          <h3 className="font-medium text-[18px]">{price}</h3>
        </div>
        <div>
          <Button
            onClick={showModal}
            className="rounded-[20px] w-[80px] font-semibold"
          >
            Buy
          </Button>
          <Modal
            title={name}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button onClick={decrementCount}>-</Button>,
              <Button key="submit" onClick={handleOk}>
                Add to Cart {count}
              </Button>,
              <Button onClick={incrementCount}>+</Button>,
            ]}
          >
            <Image src={src} width={'100%'} alt="Image" preview={false} />
            <div className="flex flex-row justify-between py-1">
              <h1 className="font-medium text-[20px]">{name}</h1>
              <h3 className="font-medium text-[18px]">{price}</h3>
            </div>
            <div>
              <h3 className="font-medium text-[18px]">{decs}</h3>
            </div>
          </Modal>
        </div>
      </div>
    </Row>
  );
};

export default Card;
