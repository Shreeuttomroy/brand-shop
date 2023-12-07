import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Cart({ d, handleDeletes }) {
  const { _id,name, img, brand, category } = d;
  const f = _id
  return (
    <>
      <div className='mx-auto my-4'>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              className=' h-52 w-fit'
              src={img}
              alt={name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{brand}</p>
            <p>{category}</p>
            <div className="card-actions justify-center">
              <div onClick={()=>handleDeletes(f)} className="badge btn bg-red-400 hover:bg-red-600 text-white badge-outline">Delete</div>
              <Link to={`/details/${f}`}><div className="badge btn bg-blue-400 hover:bg-blue-600 text-white badge-outline">Details</div></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Cart.propTypes ={
    d: PropTypes.object,
    handleDeletes: PropTypes.func
}

export default Cart;
