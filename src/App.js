import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component{

    state={
        data:{}
    }

    //lifecycle hook to call api
    async componentDidMount(){
        const fetchedData = await fetchData();
        //console.log(data);
        this.setState({data: fetchedData});
    }


    render(){
        //destructuring and send data to Cards component with props named data
        const {data} = this.state;

        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;