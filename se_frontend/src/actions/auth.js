import axios from 'axios';
import {useContext,useState,useEffect} from 'react'

import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_CONFIRM_SUCCESS,
    RESET_PASSWORD_CONFIRM_FAIL,
    LOGOUT,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS,
    PROJECT_CREATION_FAIL,
    PROJECT_CREATION_SUCCESS,
    FETCH_MODULE_SUCCESS,
    FETCH_MODULE_FAIL
} from './types';

import {userContext} from 'context/usercontext'


function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var csrftoken = readCookie('csrftoken');

export const checkAuthenticated = () => async dispatch => {
    if (typeof window == 'undefined') {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "X-CSRFToken": csrftoken
            }
        };
    
        const body = JSON.stringify({ token: localStorage.getItem('access') });
    
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config);
    
            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
                "X-CSRFToken": csrftoken
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config);
            
            const {userId, setuserId} = useContext(userContext);
            const [planets, setPlanets] = useState({});
            const [hasError, setErrors] = useState(false);

            res
            .json()
            .then(res => setPlanets(res))
            .catch(err => setErrors(err));
            
            
            console.log(planets["id"]);
            setuserId(JSON.stringify(planets["id"]));
            

            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data,
            });

            
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });
    }
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken
        }
    };

    const body = JSON.stringify({ email, password });


    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config);
        

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

export const signup = ({ name, email, password, re_password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken 
        }
    }

    const body = JSON.stringify({ name, email, password, re_password }); 

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        });
    }
};

export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken 
        }
    }

    const body = JSON.stringify({ uid, token }); 

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        });
    }
};

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken
        }
    }

    const body = JSON.stringify({ email }); 

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`, body, config);

        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: RESET_PASSWORD_FAIL
        });
    }
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken
        }
    }

    const body = JSON.stringify({ uid, token, new_password, re_new_password }); 

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`, body, config);

        dispatch({
            type: RESET_PASSWORD_CONFIRM_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: RESET_PASSWORD_CONFIRM_FAIL
        });
    }
};

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};


export const create_project = (project_name, description) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken 
        }
    }

    const body = JSON.stringify({ project_name,description }); 

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/modules/project/`, body, config);

        dispatch({
            type: PROJECT_CREATION_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROJECT_CREATION_FAIL
        });
    }
};

export const fetch_modules = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/modules/modules/`, config);

        dispatch({
            type: FETCH_MODULE_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: FETCH_MODULE_FAIL
        });
    }
};
