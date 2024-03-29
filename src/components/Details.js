import { Image } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const ProduductDetails = () => {
  const firstItem = useSelector((state) => state.product.products);
  return (
    <div>
      {/* <Modal
            title={name}
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
          > */}
      {firstItem.map((item) => (
        <div>
          <Image src="../" width={'100%'} alt="Image" preview={false} />
          <div className="flex flex-row justify-between py-1">
            <h1 className="font-medium text-[20px]">{item.name}</h1>
            <h3 className="font-medium text-[18px]">${item.price}</h3>
          </div>
          <div>
            <h3 className="font-medium text-[18px]">{item.decs}</h3>
          </div>
        </div>
      ))}

      {/* </Modal> */}
    </div>
  );
};

export default ProduductDetails;
