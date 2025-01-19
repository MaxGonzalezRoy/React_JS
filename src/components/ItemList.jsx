// eslint-disable-next-line no-unused-vars
import React from 'react';

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card">
            <img
              src={product.image}
              alt={product.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
