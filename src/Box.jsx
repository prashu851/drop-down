import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Box.css'

class Box extends React.Component {
    constructor(){
        super();
        this.state={
            searchTerm:''
        }
        this.handleFilter = this.handleFilter.bind(this)
    }
    handleFilter = (e) => {
        this.setState({
            searchTerm:e.target.value
        })
    }
    render(){
        const { searchTerm } = this.state
        const filteredCountries = this.props.countries.filter(country => {
            return country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
          });
        return(
            <div className="dropdown-box">
                <div className="dropdown-items">
                    <SearchIcon className="search-icon"/>                    
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={this.handleFilter}
                    />                    
                </div>
                {filteredCountries.map((country,index)=>
                <div className="dropdown-items" key={index} onClick={()=>console.log(country)}>
                    {country}
                </div>
                )}
            </div>
        )
    }
}

export default Box;