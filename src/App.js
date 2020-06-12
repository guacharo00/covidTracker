import React from 'react';

// Import Components optimiced
import { Cards, Chart, CountryPicker } from './components';

// Import Styles
import style from './App.module.css';

// Api data
import {fetchData} from './api';

// Image
import coronaImage from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country)=>{
        // fetch the data
        const fetchedData = await fetchData(country);

        // Set the state
        this.setState({ data: fetchedData, country: country });

        console.log(fetchedData)
    }

    render() {
        const { data, country } = this.state;

        return(
            <div className={style.container}>
                <img className={style.image} src={coronaImage} alt="Corona Image"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;