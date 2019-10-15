import React, { Component, Fragment } from "react";
import Select from 'react-select';

class Autocomplete extends Component {
 
state = { 
    movies: [],
    selectedList: []
}

handleSearch = (keyWord) => {
  fetch(`http://www.omdbapi.com/?apikey=c5451a0c&s=${keyWord}`)
  .then(response => response.json())
  .then(this.renderMovies)
}

renderMovies = (response) =>
{
    if(response.Search===undefined) return ;
    var options=[];
    console.log(response.Search)
    response.Search.forEach(element => {
          options.push({"value":element.Title, "label":element.Title})
    });
    this.setState({ movies:options })
}

keyWordChanged = event =>
{
   const {selectedList} = this.state;
   this.setState({ movies:[] })
    if(selectedList!==undefined&& selectedList!== null&& selectedList.length>4)
    {
      return ;
    }
    this.handleSearch(event)
}

updateValue = values =>
{ 
  this.setState({selectedList: values});
}   
 
  render() {
    const {movies,selectedList} = this.state;
    return (
      <div className = "selectBox">
          <Select 
          onInputChange={this.keyWordChanged}
          onChange = {this.updateValue}
          isMulti
          components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
          options = {movies} />   
         {(selectedList!==undefined&& selectedList!== null&& selectedList.length>4)
          && (<span className="exceedError">selected movies cannot exceed 5</span>)
         }
      </div>
      
    )
  }
}

export default Autocomplete;