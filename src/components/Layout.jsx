/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import classes from '../styles/Layout.module.css';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={classes.main}>
        <div className={classes.container}>
          {children}
          <Outlet />
        </div>
      </div>
    </>
  );
}
