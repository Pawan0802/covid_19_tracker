import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

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
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        //console.log(country);
        //fetch the data
        //set the data
    }


    render(){
        //destructuring and send data to Cards component with props named data
        const {data} = this.state;

        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart />
            </div>
        )
    }
}

export default App;