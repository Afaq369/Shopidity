import { Button, Image, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carted } from './cardSlice';
import CustomModal from './Modal';

const Card = ({ id, src, name, price, decs }) => {
  const dispatch = useDispatch();
  const numOfProduct = useSelector((state) => state.product.products[id] || 0);

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
    <Row className="flex flex-wrap max-w-[350px] max-h-[550px] h-full p-[20px] rounded-[20px] shadow-2xl">
      <div className="m-auto max-w-[250px]">
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
            className="rounded-[20px] px-[20px] font-semibold"
          >
            Buy
          </Button>
          <CustomModal
            name={name}
            price={price}
            decs={decs}
            src={src}
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            buttonDisable={buttonDisable}
          />
        </div>
      </div>
    </Row>
  );
};

export default Card;
