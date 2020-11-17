import React, { useEffect } from 'react';
// import Navbar from '../components/Navbar';
import Navbar from '../components/Header/HeaderLinks'
import { connect } from 'react-redux';
import Header from "components/Header/Header.js";
import { checkAuthenticated, load_user } from '../actions/auth';

const Layout = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                await props.checkAuthenticated();
                await props.load_user();
            } catch (err) {

            }
        }

        fetchData();
    }, []);
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="primary"
                brand="Systematic Entrepreneurship"
                rightLinks={<Navbar />}
                fixed
                // color="transparent"
                href="/"
                // fixed
                // brand="Systematic Entrepreneurship"
                // changeColorOnScroll={{
                //     height: 100,
                //     color: "primary"
                //   }}
                // rightLinks={<Navbar />}
            />
            {props.children}
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
