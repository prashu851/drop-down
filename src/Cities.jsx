import React from 'react'
import DropDown from './DropDown'
import isEmpty from 'lodash/isEmpty';

class Cities extends React.Component {
    constructor(){
        super();
        this.state={
            selectedCity: "",
            cities:['Hyderabad', 'Mumbai', 'Chennai', 'Nizamabad', 'Warangal']
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

    render(){
        const { selectedCity, cities } = this.state;
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