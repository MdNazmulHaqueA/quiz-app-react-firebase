// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import '../styles/App.css';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      // Use the custom route components for private and public routes
      { path: '/signup', element: <PublicRoute element={Signup} /> },
      { path: '/login', element: <PublicRoute element={Login} /> },
      { path: '/quiz', element: <PrivateRoute element={Quiz} /> },
      { path: '/result', element: <PrivateRoute element={Result} /> },
      // { path: '/signup', element: <PublicRoute element={<Signup />} /> },
      // { path: '/login', element: <PublicRoute element={<Login />} /> },
      // { path: '/quiz', element: <PrivateRoute element={<Quiz />} /> },
      // { path: '/result', element: <PrivateRoute element={<Result />} /> }
    ]
  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <Layout>
//           <Routes>
//             <Route exact path="" element={<Home/>} />
//             <PublicRoute exact path="/signup" element={<Signup/>} />
//             <PublicRoute exact path="/login" element={<Login/>} />
//             <PrivateRoute exact path="/quiz" element={<Quiz/>} />
//             <PrivateRoute exact path="/result" element={<Result/>} />
//           </Routes>
//         </Layout>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '/', element: <Home /> },
//       // { path: '/signup', element: <Signup /> },
//       // { path: '/login', element: <Login /> },
//       // { path: '/quiz', element: <Quiz /> },
//       // { path: '/result', element: <Result /> },
//       // Use the custom route components for private and public routes
//       { path: '/signup', element: <PublicRoute element={Signup} /> },
//       { path: '/login', element: <PublicRoute element={Login} /> },
//       { path: '/quiz', element: <PrivateRoute element={Quiz} /> },
//       { path: '/result', element: <PrivateRoute element={Result} /> }
//       // { path: '/signup', element: <PublicRoute component={<Signup />} /> },
//       // { path: '/login', element: <PublicRoute component={<Login />} /> },
//       // { path: '/quiz', element: <PrivateRoute component={<Quiz />} /> },
//       // { path: '/result', element: <PrivateRoute component={<Result />} /> }
//     ]
//   }
// ]);