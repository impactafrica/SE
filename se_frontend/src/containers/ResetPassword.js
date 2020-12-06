import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/bg7.jpg";
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import CustomInput from "components/CustomInput/CustomInput.js";

const useStyles = makeStyles(styles);

const ResetPassword = (props) => {
    const classes = useStyles();
    
    const [requestSent, setRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        props.reset_password(email);
        setRequestSent(true);
    };

    if (requestSent)
        return <Redirect to='/' />

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
            <div className={classes.container}>
            <h3>Request Password Reset:</h3>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input 
                            className='form-control'
                            type='email'
                            placeholder="Your Email..."
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <Button className='btn' color="primary" type='submit'>Reset Password</Button>
                </form>
            
                </div>
        </div>
        </div>
        
    );
};

export default connect(null, { reset_password })(ResetPassword);
