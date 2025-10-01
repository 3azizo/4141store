import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { subCategoriseListDetails } from '../constants'; 
import AllCategories from '../components/AllCategories';

const CategoryScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category, subCategory } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setProducts(data.products || []);
      } catch (err) {
        setError(
          err.response?.data?.message || 'An error occurred while fetching products'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // تصنيف المنتجات
  const categories = {};
  const subCategoriesProduct = [];

  if (Array.isArray(products)) {
    products.forEach((product) => {
      if (!categories[product.category]) {
        categories[product.category] = [];
      }

      categories[product.category].push(product);

      if (subCategory && product.subCategory === subCategory) {
        subCategoriesProduct.push(product);
      }
    });
  }

  // دالة لإظهار المنتجات
  const renderProducts = (list) => (
    <Row>
      {list.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );

  // 🚀 Loading / Error
  if (loading) return <Loader />;
  if (error) return <Message variant="danger">{error}</Message>;

  // 🚀 SubCategory
  if (subCategory) {
    return (
      <div>
        <h1>{subCategory}</h1>
        {subCategoriesProduct.length > 0 ? (
          renderProducts(subCategoriesProduct)
        ) : (
          <h4>لا يتوفر {subCategory} حاليا</h4>
        )}
      </div>
    );
  }

  // 🚀 No category selected → show all
  if (!category) {
    return (
      <div>
        <h1>Categories</h1>
        {Object.keys(categories).map((cat) => (
          <div key={cat}>
            <h2>{cat}</h2>
            {renderProducts(categories[cat])}
          </div>
        ))}
      </div>
    );
  }

  // 🚀 Specific category
  return (
    <div>
      <AllCategories categories={subCategoriseListDetails[category]}/>
      <h1>{category}</h1>
      {categories[category] ? (
        renderProducts(categories[category])
      ) : (
        <h4>لا يتوفر {category} حاليا</h4>
      )}
    </div>
  );
};

export default CategoryScreen;
