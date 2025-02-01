import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { formatNumberWithCommas } from '../utils/util';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.get(`${backendUrl}/api/order/user/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { success, orders } = response.data;

      // console.log(success, orders);
      if (success) {
        let allOrdersItem = [];
        orders.forEach((order) =>
          order.items.forEach((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;

            allOrdersItem.push(item);
          })
        );

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error('Error loading orders:', error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="My" text2="Orders" />
      </div>
      <div className="">
        {orderData.map((p, i) => (
          <div
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            key={i}
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={p.images[0]} alt="" className="w-16 sm:w-20" />
              <div className="">
                <p className="sm:text-base font-medium">{p.name}</p>
                <div className="flex items-center gap-1 mt-1 text-base text-gray-500">
                  <p className="">
                    {currency} {formatNumberWithCommas(p.price * 100)}
                  </p>
                  <p className="">Quantity: {p.quantity}</p>
                  <p className="">Size: {p.size}</p>
                </div>
                <p className="mt-1">
                  Date:{' '}
                  <span className="text-gray-400">
                    {new Date(p.date).toDateString()}
                  </span>
                </p>
                <p className="mt-1">
                  Payment:{' '}
                  <span className="text-gray-400">{p.paymentMethod} </span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2 ">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base ">{p.status}</p>
              </div>
              <button
                onClick={loadOrderData}
                className="border px-4 py-2 text-sm font-medium rounded-sm"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
