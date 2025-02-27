import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/common/navbar/NavBar';
import Footer from './components/common/footer/Footer';
import { HeadProvider } from 'react-head';
import GlobalStyles from "./styles/GlobalStyles";

function Layout(props) {
    return (
        <HeadProvider>
        <GlobalStyles />
        <NavBar />
        <Outlet />
        <Footer />
        </HeadProvider>
    );
}

export default Layout;