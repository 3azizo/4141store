import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Form, Button, ListGroup } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';


const CartItemRow = ({ item, onQtyChange, onRemove }) => (
  <ListGroup.Item
    key={item.product + item.selectedSize}
    className="py-3 px-2 d-flex align-items-center justify-content-between flex-wrap cart-item-row shadow-sm bg-white rounded-3 mb-3"
    style={{ transition: 'box-shadow 0.3s', minHeight: '100px' }}
  >
    <Row className="w-100 align-items-center g-2">
      <Col xs={12} sm={2} className="text-center mb-2 mb-sm-0">
        <Image
          src={item.image}
          alt={item.name}
          fluid
          rounded
          className="cart-item-img"
          style={{ maxHeight: '70px', objectFit: 'cover', transition: 'transform 0.3s' }}
        />
      </Col>
      <Col xs={12} sm={3} className="mb-2 mb-sm-0">
        <Link
          to={`/product/${item._id}`}
          className="fw-bold text-decoration-none cart-item-title"
          style={{ fontSize: '1.1rem', color: '#212529', transition: 'color 0.2s' }}
        >
          {item.name}
        </Link>
      </Col>
      <Col xs={6} sm={2} className="mb-2 mb-sm-0 text-muted">
        <span className="cart-item-price" style={{ fontWeight: 500, fontSize: '1rem' }}>{item.price}</span>
        <span className="ms-1" style={{ fontSize: '0.95rem' }}>جنيه</span>
      </Col>
      <Col xs={6} sm={2} className="mb-2 mb-sm-0">
        {item.selectedSize && (
          <span className="badge bg-primary bg-opacity-75 text-light px-2 py-1 rounded-pill" style={{ fontSize: '0.95rem' }}>{item.selectedSize}</span>
        )}
      </Col>
      <Col xs={6} sm={2} className="mb-2 mb-sm-0">
        <Form.Select
          aria-label={`تغيير الكمية لـ ${item.name}`}
          value={item.qty}
          onChange={(e) => onQtyChange(item, Number(e.target.value))}
          className="cart-item-qty-select"
          style={{ minWidth: '70px', fontSize: '1rem' }}
        >
          {[...Array(item.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col xs={6} sm={1} className="text-center">
        <Button
          type="button"
          variant="outline-danger"
          aria-label={`إزالة ${item.name} من العربة`}
          onClick={() => onRemove(item._id)}
          className="cart-item-remove-btn"
          style={{ transition: 'background 0.2s, color 0.2s', fontSize: '1.2rem' }}
        >
          <FaTrash />
        </Button>
      </Col>
    </Row>
  </ListGroup.Item>
);

export default CartItemRow;
