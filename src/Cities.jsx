import React from 'react'
import DropDown from './DropDown'
import isEmpty from 'lodash/isEmpty';

class Cities extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedCity: "",
            cities: []
        }
    }

    onCityChange = (city) => {
        this.setState({
            selectedCity: city
        });
        console.log(city);
    }
    addNewOption = (option) => {
        this.setState({
            cities:[...this.state.cities, option],
            selectedCity: option
        })
        console.log(option);
        console.log(this.state.cities);
    }
    addCities = (data) => {
        this.setState({
            cities: data
        })
    }
    componentDidMount() {
        fetch("https://my-json-server.typicode.com/prashu851/demo/cities")
        .then((data) => data.json())
        .then(this.addCities)
    }
    render(){
        const { selectedCity, cities } = this.state;
        if (isEmpty(cities)) {
            return <></>
        }
        return(
            <DropDown 
                label={isEmpty(selectedCity) ? "Select City": selectedCity }
                options={cities}
                onOptionChange={this.onCityChange}
                maximumDisplayOptions={3}
                addNewOption={this.addNewOption}
                canCreateOption={false}
            />
        )
    }
}

export default Cities;