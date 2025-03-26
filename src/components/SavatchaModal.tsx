import React, { useState } from "react";
import { Modal, Button } from "antd";

const initialProducts = [
  {
    id: 1,
    name: "Mahsulot 1",
    imageUrl: "product1-image-url.jpg",
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    name: "Mahsulot 2",
    imageUrl: "product2-image-url.jpg",
    price: 200,
    quantity: 1,
  },
];

function ProductPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAdd = (id: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleRemove = (id: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
          : product
      )
    );
  };

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Savatcha
      </Button>

      <Modal
        title="Savatcha"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between mb-4"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <div className="flex-1">
              <p>{product.name}</p>
              <p className="text-lg">${product.price}</p>
            </div>
            <div className="flex items-center">
              <Button onClick={() => handleRemove(product.id)}>-1</Button>
              <span className="mx-2">{product.quantity}</span>
              <Button onClick={() => handleAdd(product.id)}>+1</Button>
              <Button
                danger
                onClick={() => handleDelete(product.id)}
                className="ml-2"
              >
                O'chirish
              </Button>
            </div>
          </div>
        ))}
      </Modal>
    </div>
  );
}

export default ProductPage;
