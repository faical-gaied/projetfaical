import React, { useState } from 'react';
import './Cart.css';

function Cart() {
  // Placeholder image URL
  const placeholderImageURL = 'https://via.placeholder.com/150';

  // State to manage quantity
  const [quantities, setQuantities] = useState({
    product1: 1,
    product2: 1,
    product3: 1,
  });

  // Function to handle increasing quantity
  const handleIncreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  };

  // Function to handle decreasing quantity
  const handleDecreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] - 1, 0),
    }));
  };

  return (
    <div className='tableglob'>
      <div>
        <table className="table1">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Image</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><img src={placeholderImageURL} alt="Product 1" /></td>
              <td>Product<br />Name1</td>
              <td>$150.00</td>
              <td>
                <button onClick={() => handleDecreaseQuantity('product1')}>-</button>
                {quantities['product1']}
                <button onClick={() => handleIncreaseQuantity('product1')}>+</button>
              </td>
              <td>${(150 * quantities['product1']).toFixed(2)}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td><img src={placeholderImageURL} alt="Product 2" /></td>
              <td>Product<br />Name11</td>
              <td>$185.00</td>
              <td>
                <button onClick={() => handleDecreaseQuantity('product2')}>-</button>
                {quantities['product2']}
                <button onClick={() => handleIncreaseQuantity('product2')}>+</button>
              </td>
              <td>${(185 * quantities['product2']).toFixed(2)}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td><img src={placeholderImageURL} alt="Product 3" /></td>
              <td>Product<br />Name5</td>
              <td>$120.00</td>
              <td>
                <button onClick={() => handleDecreaseQuantity('product3')}>-</button>
                {quantities['product3']}
                <button onClick={() => handleIncreaseQuantity('product3')}>+</button>
              </td>
              <td>${(120 * quantities['product3']).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="table2">
          <thead>
            <tr>
              <th scope="col">Cart Totals</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Subtotal</th>
              <td>${
                (
                  150 * quantities['product1'] +
                  185 * quantities['product2'] +
                  120 * quantities['product3']
                ).toFixed(2)
              }</td>
            </tr>
            <tr>
              <th scope="row">Total</th>
              <td>${
                (
                  150 * quantities['product1'] +
                  185 * quantities['product2'] +
                  120 * quantities['product3']
                ).toFixed(2)
              }</td>
            </tr>
            <tr>
              <td>Have a coupon?</td>
            </tr>
            <tr>
              <td>PROCEED TO CHECKOUT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
