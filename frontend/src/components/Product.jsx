import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
  <Card className='my-3 p-3 rounded porduct-card product-card-custom'>
      <Link to={`/product/${product._id}`} className="product-card-img-link">
        <Card.Img src={product.image} variant='top' className='product-card-img' />
      </Link>

      <Card.Body className="product-card-body">
        <Link to={`/product/${product._id}`} className="product-title-link">
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <div className="product-card-rating">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <div className="product-card-price">
          <span className="price-value">{product.price}</span>
          <span className="price-currency">جنيه</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
