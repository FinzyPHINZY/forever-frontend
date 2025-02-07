# Forever Frontend

## Overview

The **Forever** frontend is a React-based e-commerce web application designed to provide users with a seamless shopping experience. It includes essential features such as product browsing, cart management, order placement, authentication, and more. The project is built using modern web technologies like React, React Router, Tailwind CSS, and Axios for API communication.

### **Links**

- **Admin Panel:** [Forever Admin](https://buyatforever-admin.vercel.app/)
- **Backend API:** [Forever Backend](https://github.com/FinzyPHINZY/forever-backend)

```
test admin with

email: 'finzyphinzy@gmail.com' ,
password: 22334455
```

## Features

- **User Authentication:** Login and Signup system with token-based authentication.
- **Product Catalog:** Users can browse and view product details.
- **Shopping Cart:** Add, remove, and update cart items.
- **Order Management:** Place orders and view order history.
- **Search Functionality:** Find products quickly using the search bar.
- **Responsive Design:** Optimized for mobile and desktop viewing.
- **Toast Notifications:** Real-time feedback using `react-toastify`.

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS
- **State Management:** Context API
- **API Calls:** Axios
- **Notifications:** React Toastify
- **Build Tool:** Vite

## Project Structure

```
forever-frontend/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BestSeller.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ProductItem.jsx
│   │   ├── RelatedProducts.jsx
│   ├── context/
│   │   ├── ShopContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Collection.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Product.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── PlaceOrder.jsx
│   │   ├── Orders.jsx
│   │   ├── Verify.jsx
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── .env
├── public/
├── package.json
├── vite.config.js
├── .gitignore
```

## Installation & Setup

### Prerequisites

Make sure you have **Node.js** and **pnpm** installed.

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/FinzyPHINZY/forever-frontend.git
   cd forever-frontend
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Create a `.env` file and add the backend URL:

   ```sh
   VITE_BACKEND_URL=https://your-backend-url.com
   ```

4. Start the development server:
   ```sh
   pnpm run dev
   ```

## Deployment

To build the project for production, run:

```sh
pnpm run build
```

This will generate a `dist/` folder containing the optimized build.

## Contribution

1. Fork the repository.
2. Create a new branch (`feature-new-feature`).
3. Commit your changes (`git commit -m 'feat: add new feature'`).
4. Push to the branch (`git push origin feature-new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

---
