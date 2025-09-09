import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsFiveQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsFiveQuery();
  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-c mb-4'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <div className="carousel-img-wrapper">
              <Image src={product.image} alt={product.name} fluid className="carouselImg" />
            </div>           
             <Carousel.Caption className='carousel-caption'>
              <h2 className='text-light'>
                <strong style={{ color: '#1d4ed8' }}>{product.name}</strong> ({product.price} <span style={{ fontSize: '12px' }}>جنيه</span>)
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
