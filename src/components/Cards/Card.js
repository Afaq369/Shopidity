import { Button, Image, Modal, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carted } from './cardSlice';

const Card = ({ id, src, name, price, decs }) => {
  const dispatch = useDispatch();
  const numOfProduct = useSelector((state) => state.product.products[id] || 0);

  //FOR BUTTON DISABLE
  const [buttonDisable, setButtonDisable] = useState(false);
  const firstItem = useSelector((state) => state.product.products);
  const productIdToCheck = id;
  useEffect(() => {
    const isProductIdExist = firstItem.some(
      (product) => product.id === productIdToCheck
    );
    if (isProductIdExist) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [firstItem, productIdToCheck]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(
      carted({
        productId: id,
        quantity: numOfProduct,
        Name: name,
        Price: price,
        Decs: decs,
      })
    );
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Row className="max-w-[350px] p-[20px] rounded-[20px] shadow-2xl bg-[#f0f8ff]">
      <div className="flex justify-center items-center">
        <Image src={src} width={'100%'} alt="Image" preview={false} />
      </div>
      <div className="w-full flex flex-row justify-between items-center py-2">
        <div>
          <h1 className="font-medium text-[20px]">{name}</h1>
          <h3 className="font-medium text-[18px]">${price}</h3>
        </div>
        <div>
          <Button
            onClick={showModal}
            // disabled={buttonDisable}
            className="rounded-[20px] px-[20px] font-semibold"
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
              <Button key="submit" onClick={handleOk} disabled={buttonDisable}>
                Add to Cart
              </Button>,
            ]}
          >
            <Image src={src} width={'100%'} alt="Image" preview={false} />
            <div className="flex flex-row justify-between py-1">
              <h1 className="font-medium text-[20px]">{name}</h1>
              <h3 className="font-medium text-[18px]">${price}</h3>
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
