import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { formatNumberWithCommas } from '../utils/util';

const CartTotal = () => {
  const { getCartAmount, currency, delivery_fee } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={'Cart'} text2={'Total'} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p className="">Subtotal</p>
          <p className="">
            {currency} {formatNumberWithCommas(getCartAmount())}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="">Shipping Fee</p>
          <p className="">
            {currency} {formatNumberWithCommas(delivery_fee)}.00
          </p>
        </div>

        <hr />
        <div className="flex justify-between">
          <b className="">Total</b>
          <b className="">
            {currency}{' '}
            {getCartAmount() === 0
              ? 0
              : formatNumberWithCommas(getCartAmount() + delivery_fee)}
            .00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
