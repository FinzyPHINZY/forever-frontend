import { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { formatNumberWithCommas } from '../utils/util';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const location = useLocation();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((p) => {
      if (p._id === productId) {
        setProductData(p);
        setImage(p.images[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.images.map((img, i) => (
              <img
                src={img}
                key={i}
                alt=""
                onClick={() => setImage(img)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto " />
          </div>
        </div>
        {/* product information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {formatNumberWithCommas(productData.price * 100)}
          </p>
          <p className="mt-5 text-gray-700">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((s, i) => (
                <button
                  onClick={() => setSize(s)}
                  className={`border py-2 px-4 bg-gray-100 ${s === size ? 'border-orange-500' : ''}`}
                  key={i}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            Add to cart
          </button>{' '}
          <hr className="mt-7 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p className="">100% Original Product</p>
            <p className="">Cash on delivery is available on this product</p>
            <p className="">Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* desc $ review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-8 py-6 text-sm text-gray-500">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium porro animi cum delectus quae vel quas eos maiores
            ipsum, quam harum quia dolor dolore modi nulla ipsa, dolorem
            possimus voluptatum minus commodi ab, ratione nostrum architecto
            ducimus. Aliquid magni deserunt officia quod ad maxime ipsam! Iusto
            tempore id natus laboriosam!
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non rem
            praesentium obcaecati minus asperiores vel ipsa, id laudantium
            impedit pariatur repellendus delectus eveniet at laboriosam!
            Consequuntur harum rem similique nemo?
          </p>
        </div>
      </div>

      {/* related */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
