import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Product({ d }) {
    const {_id,img,name,brand,category,price,rating} = d;
  return (
    <>
      <div className="card mx-auto w-fit glass">
        <figure>
          <img className=' h-80'
            src={img}
            alt={name}
          />
        </figure>
        <div className="card-body font-medium">
          <h2 className="card-title">{name}</h2>
          <p className=' font-semibold'>{brand}</p>
          <p>{category}</p>
          <p>Price: {price} USD</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-center">
            <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
            <Link to={`/updated/${_id}`}><button className="btn btn-primary">Update</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
Product.propTypes ={
    d: PropTypes.object
}

export default Product;
