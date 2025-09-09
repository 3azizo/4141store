import React from 'react';
import shose from "../assets/categoriesIcon/football-shoes.png";
import sport from "../assets/categoriesIcon/golf-gloves.png";
import kids from "../assets/categoriesIcon/karate.png";
import man from "../assets/categoriesIcon/sport.png";
import woman from "../assets/categoriesIcon/sport-clothes.png";
import { Link } from 'react-router-dom';

const AllCategories = () => {
  const categories = [
    { name: 'رجالى', icon: man, path: '/categories/رجالى' },
    { name: 'نسائى', icon: woman, path: '/categories/نسائى' },
    { name: 'اطفال', icon: kids, path: '/categories/اطفال' },
    { name: 'ادوات رياضية', icon: sport, path: '/categories/ادوات رياضية' },
    { name: 'احذية', icon: shose, path: '/categories/احذية' },
    
  ];

  return (
    <div className="container text-center mt-5 mb-5"> 
      <h1 className="mb-5 category-section-title">استكشف فئاتنا</h1>
      <div className="row justify-content-center">
        {categories.map((category) => (
          <div className="col-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch" key={category.path}>
            <Link to={category.path} className="category-card-link text-decoration-none w-100">
              <div className="category-card shadow-sm h-100"> 
                <div className="icon-wrapper mb-3"> 
                  <img src={category.icon} alt={category.name} className="category-icon" />
                </div>
                <h5 className="category-title">{category.name}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;