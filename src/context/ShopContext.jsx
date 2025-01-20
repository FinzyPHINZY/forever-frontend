import { createContext } from 'react';
import { products } from '../assets/frontend_assets/assets';

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '₦';
  const delivery_fee = 1500;

  const value = { products, currency, delivery_fee };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
