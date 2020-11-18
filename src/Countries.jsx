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

    render(){
        const { selectedCountry, countries } = this.state;
        return(
            <DropDown 
                label={isEmpty(selectedCountry) ? "Select Location": selectedCountry }
                options={countries}
                onOptionChange={this.onCountryChange}
            />
        )
    }

}

export default Countries;