import React from 'react'
import DropDown from './DropDown'
import isEmpty from 'lodash/isEmpty';

class Countries extends React.Component {
    constructor(){
        super();
        this.state={
            selectedCountry: "",
            countries:['India','Australia','Newzealand','England','South Africa','USA','Russia','China','Japan','Germany']
        }
    }

    onCountryChange = (country) => {
        this.setState({
            selectedCountry: country
        });
        console.log(country);
    }
    addNewOption = (option) => {
        this.setState({
            countries:[...this.state.countries,option],
            selectedCountry:option
        })
        console.log(option)
        console.log(this.state.countries)
    }

    render(){
        const { selectedCountry, countries } = this.state;
        return(
            <DropDown 
                label={isEmpty(selectedCountry) ? "Select Location": selectedCountry }
                options={countries}
                onOptionChange={this.onCountryChange}
                maximumDisplayOptions={5}
                addNewOption={this.addNewOption}
                canCreateOption={true}
            />
        )
    }
}

export default Countries;