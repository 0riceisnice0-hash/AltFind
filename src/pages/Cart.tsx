import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import './Cart.css';

export const Cart: React.FC = () => {
  // Placeholder cart items
  const cartItems = [
    {
      id: 'jkt-001',
      title: 'Black Puffer Jacket with Hood',
      retailer: 'ASOS',
      price: 89.99,
      imageUrl: 'https://picsum.photos/seed/jkt001/400/500',
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="cart__content">
            <div className="cart__items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart__item">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="cart__item-image"
                  />
                  <div className="cart__item-details">
                    <h3 className="cart__item-title">{item.title}</h3>
                    <p className="cart__item-retailer">{item.retailer}</p>
                    <div className="cart__item-quantity">
                      <button className="cart__quantity-btn">-</button>
                      <span className="cart__quantity-value">{item.quantity}</span>
                      <button className="cart__quantity-btn">+</button>
                    </div>
                  </div>
                  <div className="cart__item-price">
                    <p className="cart__price">£{item.price.toFixed(2)}</p>
                    <button className="cart__item-remove">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart__summary">
              <h2 className="cart__summary-title">Order Summary</h2>
              <div className="cart__summary-row">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className="cart__summary-row">
                <span>Shipping</span>
                <span>£{shipping.toFixed(2)}</span>
              </div>
              <div className="cart__summary-row cart__summary-total">
                <span>Total</span>
                <span>£{total.toFixed(2)}</span>
              </div>
              <Button variant="primary" size="large" className="cart__checkout-btn">
                Proceed to Checkout
              </Button>
              <Link to="/discover" className="cart__continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart__empty">
            <p className="cart__empty-text">Your cart is empty</p>
            <Link to="/discover">
              <Button variant="primary" size="large">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
