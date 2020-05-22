import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

import coronoImage from './images/covid-19.png';

class App extends React.Component{

    state={
        data:{},
        country:''
    }

    //lifecycle hook to call api
    async componentDidMount(){
        const fetchedData = await fetchData();
        //console.log(data);
        this.setState({data: fetchedData});
    }

    //change the state of the country
    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedData = await fetchData(country);
        //console.log(fetchedData);
        
        //set the data
        this.setState({data:fetchedData, country: country})
    }


    render(){
        //destructuring and send data to Cards & Chart component with props named data & country
        const {data, country} = this.state;

        return(
            <div className={styles.container}>
                <img src={coronoImage} alt="COVID-19" className={styles.image}/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;