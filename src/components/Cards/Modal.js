import { Button, Image } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Modal = () => {
  const firstItem = useSelector((state) => state.product.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const value=false
  const handleOk = () => {
    setIsModalOpen(false);
    // setButtonDisabled(true);
    // dispatch(
    //   carted({
    //     productId: id,
    //     quantity: numOfProduct,
    //     Name: name,
    //     Price: price,
    //     Button: value,
    //   })
    // );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" onClick={handleOk} disabled={value}>
            Add to Cart
          </Button>,
        ]}
      >
        {firstItem.map((product) => (
          <div>
            <Image src={product.src} width={'100%'} alt="Image" preview={false} />
            <div className="flex flex-row justify-between py-1">
              <h1 className="font-medium text-[20px]">{product.name}</h1>
              <h3 className="font-medium text-[18px]">${product.price}</h3>
            </div>
            <div>
              <h3 className="font-medium text-[18px]">{product.decs}</h3>
            </div>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default Modal;
