import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';
import { makeStyles } from "@material-ui/core/styles";

import image from "assets/img/bg7.jpg";
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

const Activate = (props) => {
    const [verified, setVerified] = useState(false);
    const classes = useStyles();
    const verify_account = e => {
        const uid = props.match.params.uid;
        const token = props.match.params.token;

        props.verify(uid, token);
        setVerified(true);
    };

    if (verified)
        return <Redirect to='/login' />
    return (
        <div>
        <Header
          absolute
          color="transparent"
          href="/"
          brand="Systematic Entrepreneurship"
          rightLinks={<HeaderLinks />}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginTop: '200px' }}>
                <h1>Verify your Account:</h1>
                <button 
                    onClick={verify_account}
                    style={{ marginTop: '50px' }}
                    type="button"
                    className="btn btn-primary"
                >
                    Verify
                </button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);
