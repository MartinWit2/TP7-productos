import React from "react";

const DetalleProducto = ({ match }) => {
  const { id } = match.params;

  const producto = {
    id: 1,
    title: "Product Title",
    description: "Product description",
    price: 99.99,
    images: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
  };

  return (
    <div>
      <h1>Detalle del Producto {id}</h1>
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>Precio: {producto.price}</p>
      {producto.images.map((image, index) => (
        <img key={index} src={image} alt={`Product ${index + 1}`} />
      ))}
    </div>
  );
};

export default DetalleProducto;

