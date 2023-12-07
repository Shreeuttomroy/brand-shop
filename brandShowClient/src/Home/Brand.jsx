import { Link} from "react-router-dom";
import PropTypes from 'prop-types';

function Brand({ d }) {
    const routStr = d?.brand;
  return (
    <>
      <Link to={`/${routStr.toLowerCase()}`}>
        <div className="card w-36 lg:w-60 h-36 lg:h-60 bg-[#00000b0f] mx-auto mt-10 flex justify-center shadow-xl">
          <figure className="self-center h-fit">
            <img src={d?.img} alt="Brand" className="rounded-xl" />
          </figure>
        </div>
      </Link>
    </>
  );
}
Brand.propTypes ={
    d: PropTypes.object
}

export default Brand;
