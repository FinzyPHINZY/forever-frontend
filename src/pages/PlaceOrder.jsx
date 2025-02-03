import { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [method, setMethod] = useState('cod');
  const [FormData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((p) => p._id === items)
            );

            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: FormData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case 'cod':
          const response = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (response.data.success) {
            setCartItems({});
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }
          break;

        case 'stripe':
          const responseStripe = await axios.post(
            `${backendUrl}/api/order/stripe`,
            orderData,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          console.log(responseStripe.data);

          if (responseStripe.data.success) {
            const { session } = responseStripe.data;
            window.location.replace(session);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* left */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'Delivery'} text2={'Information'} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            onChange={handleChange}
            name="firstName"
            value={FormData.firstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            onChange={handleChange}
            name="lastName"
            value={FormData.lastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last Name"
          />
        </div>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={FormData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Email Address"
        />
        <input
          type="text"
          onChange={handleChange}
          name="street"
          value={FormData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            type="text"
            onChange={handleChange}
            name="city"
            value={FormData.city}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
            required
          />
          <input
            type="text"
            onChange={handleChange}
            name="state"
            value={FormData.state}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            onChange={handleChange}
            name="zipCode"
            value={FormData.zipCode}
            type="number"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Zip Code"
            required
          />
          <input
            type="text"
            onChange={handleChange}
            name="country"
            value={FormData.country}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
            required
          />
        </div>
        <input
          type="number"
          onChange={handleChange}
          name="phone"
          value={FormData.phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone"
          required
        />
      </div>
      {/* right */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={'Payment'} text2="Method" />
          <div className="flex gap-3 flex-col sm:flex-row">
            <div
              onClick={() => setMethod('stripe')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' && 'bg-green-400'}`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-5" />
            </div>
            {/* <div
              onClick={() => setMethod('razorpay')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' && 'bg-green-400'}`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 mx-5" />
            </div> */}
            <div
              onClick={() => setMethod('cod')}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' && 'bg-green-400'}`}
              ></p>
              <p className="text-blue-700 font-bold capitalize text-sm  mx-4">
                Cash on delivery
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3  text-sm"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
