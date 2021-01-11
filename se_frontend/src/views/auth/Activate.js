import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Activate = (props) => {
    const [verified, setVerified] = useState(false);

    //function to verify account
    function verify(uid,token)
    {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        
        const url = `${process.env.REACT_APP_API_URL}/auth/users/activation/`;
        const body = JSON.stringify({ uid, token }); 

        axios.post(url, body, config)
            .then(response => 
                console.log("you have been verified",response)
            )
            .catch(errors =>
                console.log("an error was found!",errors)
            )
    }

    const verify_account = e => {
        const uid = props.match.params.uid;
        const token = props.match.params.token;

        verify(uid, token);
        setVerified(true);
    };

    if (verified)
        return <Redirect to='/login' />
    return (
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginTop: '200px' }}>
                <h1>Verify your Account:</h1>
                <button 
                    onClick={verify_account}
                    style={{ marginTop: '50px',color:"purple",height:"50px" }}
                    type="button"
                    
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default Activate;
