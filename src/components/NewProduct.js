import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img/post/banner.jpg';

function NewProduct({ data }) {
  return (
    <div className="newProduct">
      <figure className="newProductItem">
        <img src={img} alt="" className="newProductImg" />
        <figcaption className="newProductInfo">
          <h3 className="newProductTitle">{data.title}</h3>
          <div className="newProductLabel">
            <Link to={`/shop/${data.id}`} className="linkToSinglePage">Buy now</Link>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default NewProduct;
