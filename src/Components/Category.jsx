import React from 'react';
import image1 from '../Components/Pictures/1.jpg';
import image3 from '../Components/Pictures/3.jpg';
const Category = () => {
  return (
    <section className="category py-5" id="category">
      <div className="container">
        <div className="category-caption d-flex justify-content-center align-items-center py-5">
          <h3 className="text-uppercase">Categories</h3>
        </div>
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <div className="image rounded shadow overflow-hidden">
              <img className="w-100" src={image1} alt="category1" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image rounded shadow overflow-hidden">
              <img className="w-100" src={image3} alt="category2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
