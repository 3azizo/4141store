import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import CartItemRow from '../components/CartItemRow';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handleQtyChange = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };
  

  return (
    <Row className="cart-screen g-4 py-4 px-2 justify-content-center">
      <Col xs={12} lg={8} className="mb-4">
        <h1 className="mb-4 fw-bold text-primary" style={{ fontFamily: 'Inter, Cairo, sans-serif', fontSize: '2.2rem', letterSpacing: '0.5px' }}>
          عربة التسوق
        </h1>
        {cartItems.length === 0 ? (
          <Message>
            عربتك فارغة <Link to='/' className="text-decoration-underline text-primary">رجوع</Link>
          </Message>
        ) : (
          <ListGroup variant='flush' className="cart-list-group">
            {cartItems.map((item) => (
              <CartItemRow
                key={item.product + item.selectedSize}
                item={item}
                onQtyChange={handleQtyChange}
                onRemove={handleRemove}
              />
            ))}
          </ListGroup>
        )}
      </Col>
      <Col xs={12} lg={4} className="mb-4">
        <Card className="shadow-lg border-0 rounded-4 cart-summary-card">
          <ListGroup variant='flush'>
            <ListGroup.Item className="py-4 px-3 bg-light rounded-top-4">
              <h2 className="mb-3 fw-semibold text-dark" style={{ fontSize: '1.3rem' }}>
                المجموع
                <span className="ms-2 badge bg-primary bg-opacity-75 text-light rounded-pill" style={{ fontSize: '1rem' }}>
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)} العناصر
                </span>
              </h2>
              <div className="d-flex align-items-center">
                <span className="fw-bold text-success" style={{ fontSize: '1.5rem' }}>
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </span>
                <span className="ms-2 text-muted" style={{ fontSize: '1.1rem' }}>جنيه</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="py-3 px-3 rounded-bottom-4 bg-white">
              <Button
                type='button'
                className='w-100 py-3 fw-bold btn btn-primary btn-lg cart-checkout-btn'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
                style={{ fontSize: '1.1rem', letterSpacing: '0.5px', transition: 'background 0.2s, color 0.2s' }}
                aria-label="انتقل الى الدفع"
              >
                انتقل الى الدفع
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
