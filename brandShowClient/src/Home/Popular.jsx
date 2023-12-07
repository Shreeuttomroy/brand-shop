import PropTypes from 'prop-types';
function Popular({d}) {
    const {img,name,brand,category,price,rating} = d;
    return ( 
        <>
      <div className="card my-5 mx-auto w-fit glass">
        <figure>
          <img className='w-72 h-80'
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
        </div>
      </div>
        </>
    );
}
Popular.propTypes ={
    d: PropTypes.object
}

export default Popular;