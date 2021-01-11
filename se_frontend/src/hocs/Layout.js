import React, { useEffect } from 'react';
// import Navbar from '../components/Navbar';
import Navbar from '../components/Header/HeaderLinks'
import { connect } from 'react-redux';
import Header from "components/Header/Header.js";
import { checkAuthenticated, load_user } from '../actions/auth';

const Layout = (props) => {
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                brand="Systematic Entrepreneurship"
                rightLinks={<Navbar />}
                fixed
                changeColorOnScroll={{
                height: 400,
                color: "primary"
                }}
                {...rest}
            />
            {props.children}
        </div>
    );
};

export default Layout;
