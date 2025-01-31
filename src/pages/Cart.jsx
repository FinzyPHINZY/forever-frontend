import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useState, useEffect } from 'react';
import Title from '../components/Title';
import { formatNumberWithCommas } from '../utils/util';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { cartItems, products, currency, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={'Your'} text2={'Cart'} />
      </div>
      <div className="">
        {cartData.map((p, i) => {
          const productData = products.find((item) => item._id === p._id);

          return (
            <div
              className="py-4 border-t text-gray-700 border-b grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              key={i}
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.images[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div className="">
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="">
                      {currency}
                      {formatNumberWithCommas(productData.price * 100)}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {p.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                type="number"
                onChange={(e) =>
                  e.target.value === '' || e.target.value === '0'
                    ? null
                    : updateQuantity(p._id, p.size, Number(e.target.value))
                }
                min={1}
                defaultValue={p.quantity}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
              />
              <img
                src={assets.bin_icon}
                onClick={() => updateQuantity(p._id, p.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                alt=""
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
