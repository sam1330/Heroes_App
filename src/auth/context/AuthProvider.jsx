import React from 'react';
import { useReducer } from 'react';
import { TYPES } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {}, init);

    const login = (name) => {
        const user = {id: '123', name: name};

        const action = {
            type: TYPES.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    };

    const logout = () => {
        const action = {
            type: TYPES.logout,
        }

        localStorage.removeItem('user');

        dispatch(action);
    }
    return ( 
        <AuthContext.Provider value={{
            ...state,
            login,
            logout
        }}>
            { children }
        </AuthContext.Provider>
     );
}
