import React from "react";

const OrderItem = ({ order }) => {
  return (
    <div>
      <h3>Order #{order.id}</h3>
      <p>Status: {order.status}</p>
    </div>
  );
};

export default OrderItem;
