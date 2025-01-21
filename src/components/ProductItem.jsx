import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { formatNumberWithCommas } from '../utils/util';

const ProductItem = ({ product }) => {
  const { _id, name, image, price } = product;
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {formatNumberWithCommas(price * 100)}
      </p>
    </Link>
  );
};

export default ProductItem;
