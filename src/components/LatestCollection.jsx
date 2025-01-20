import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useState, useEffect } from 'react';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice());
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="Latest" text2="Collection" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and type-setting
          industry
        </p>
      </div>
    </div>
  );
};

export default LatestCollection;
