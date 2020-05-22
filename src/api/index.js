import axios from 'axios';
import { CountryPicker } from '../components';

const url ="https://covid19.mathdro.id/api";

//functional component
export const fetchData = async (country) => {
    try {
        // const response = await axios.get(url);
        // return response;

        //destructuring
        // const {data} = await axios.get(url);

        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate
        // }
        //return modifiedData;

        let changeableUrl = url;

        if(country){
            changeableUrl = `${url}/countries/${country}`;
        }


        //destructuring into destructuring - a better way
        const { data: {confirmed,recovered,deaths,lastUpdate} } = await axios.get(changeableUrl);

        const modifiedData = {
            confirmed: confirmed,
            recovered: recovered,
            deaths: deaths,
            lastUpdate: lastUpdate
        }

        return modifiedData;

        

    } catch (error) {
        console.log(error);
        
    }
}

//use this api call for charts
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        //console.log(data);

        const modifiedData = data.map((dailyData) =>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}


//use this api call for country picker
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        //console.log(response);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }

}