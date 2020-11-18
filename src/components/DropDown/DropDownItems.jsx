import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import take from 'lodash/take';
import './DropDownItems.css'
import { isEmpty } from 'lodash';
import AddOption from './AddOption'


class DropDownItems extends React.Component {
    constructor(){
        super();
        this.state={
            searchTerm:'',
            showAllOptions: false
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.updateShowAllOptions = this.updateShowAllOptions.bind(this);
    }
    handleFilter = (e) => {
        this.setState({
            searchTerm:e.target.value
        })
    }

    updateShowAllOptions = () => {
        this.setState({
            showAllOptions: true
        })
    }

    renderOptions = () => {
        const { showAllOptions, searchTerm } = this.state;
        const { handleOptionSelect, options, maximumDisplayOptions, canCreateOption } = this.props;
        const filteredOptions = options.filter(option => {
            return option.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });

        const visibleOptions = showAllOptions ? filteredOptions : take(filteredOptions, maximumDisplayOptions);
        const hiddenOptions = filteredOptions.length - visibleOptions.length;
        if(filteredOptions.length === 0 && !isEmpty(searchTerm)){
            return <AddOption addNewOption={this.props.addNewOption} searchTerm={searchTerm} canCreateOption={canCreateOption} />
        }
        else{
            return visibleOptions.map((option,index) =>
            <>
                <div className="dropdown-items" key={index} onClick={() => handleOptionSelect(option)}>
                    {option}  
                </div>
                {(index === visibleOptions.length - 1) && (hiddenOptions > 0) 
                    ? <button 
                        className="show-more-btn"
                        onClick={this.updateShowAllOptions}
                        >{hiddenOptions} more
                      </button>
                    : ''
                }
            </>
            );
        }
    }
    render(){

        return(
            <div className="dropdown-box">
                <div className="dropdown-items search-input">
                    <SearchIcon className="search-icon"/>                    
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={this.handleFilter}
                        className="search"
                    />                    
                </div>
                {this.renderOptions()}
            </div>
        )
    }
}

export default DropDownItems;