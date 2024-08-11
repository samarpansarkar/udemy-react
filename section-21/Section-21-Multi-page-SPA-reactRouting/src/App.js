import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <Product />, },
      { path: '/products/:productId', element: <ProductDetail />, },
    ]
  },

]);

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />} />
//     <Route path='/products' element={<Product />} />
//   </Route>
// )

// const router = createBrowserRouter(routerDefinitions)

function App() {
  return <div>
    <RouterProvider router={router} />

  </div>;
}

export default App;
