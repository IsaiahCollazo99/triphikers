import React from 'react';
import axios from 'axios'
import { apiURL } from '../../util/apiURL';

const API = apiURL();

export const deleteTrip = async ( id ) => {
    try {
        await axios.delete(API + `/api/trips/${id}`);
        return <p className="success">Trip successfully deleted</p>
    } catch ( error ) {
        throw error;
    }
}