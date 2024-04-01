import React from 'react';
import { Button, Image, Modal } from 'antd';

const CustomModal = ({
  name,
  price,
  decs,
  src,
  isModalOpen,
  handleOk,
  handleCancel,
  buttonDisable,
}) => {
  return (
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
      <div className='m-auto max-w-[250px]'>
        <Image src={src} width={'100%'} alt="Image" preview={false} />
      </div>
      <div className="flex flex-row justify-between py-1">
        <h1 className="font-medium text-[20px]">{name}</h1>
        <h3 className="font-medium text-[18px]">${price}</h3>
      </div>
      <div>
        <h3 className="font-medium text-[18px]">{decs}</h3>
      </div>
    </Modal>
  );
};

export default CustomModal;
