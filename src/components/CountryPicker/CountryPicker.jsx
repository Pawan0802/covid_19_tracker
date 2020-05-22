import React, { useState,useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

//functional component
const CountryPicker = () => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () =>{
            setFetchCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchCountries]);

    //console.log(fetchedCountries);


    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;