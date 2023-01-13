import React from 'react';
import { useReducer } from 'react';
import { TYPES } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {logged: false});

    const login = () => {
        const action = {
            type: TYPES.login,
            payload: {
                id: '123',
                name: 'Samuel'
            }
        }

        dispatch(action);
    };

    return ( 
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
     );
}
