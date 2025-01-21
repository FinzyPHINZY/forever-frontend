import { createContext } from 'react';
import { products } from '../assets/frontend_assets/assets';
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '₦';
  const delivery_fee = 1500;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
