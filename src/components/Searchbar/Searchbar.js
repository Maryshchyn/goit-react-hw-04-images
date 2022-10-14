import { Component } from "react";
 import {Searchbarform} from './Searchbar.styled'


export default class Searchbar extends Component{
    state = {
        query: '',
    }

    handlerSearchChange = e => {
        this.setState({ query: e.currentTarget.value.toLowerCase() })
        
    }
    handelrSubmit = e => {
        e.preventDefault();
        
        if (this.state.query.trim() === '') {
            alert('Введіть щось');
            return
        }
        this.setState({ query: '' })
        this.props.onSubmit(this.state.query)
    }
    

    render() {
        return (
            <header >
          <Searchbarform onSubmit={this.handelrSubmit} >
    <button type="submit" >
      <span >Search</span>
    </button>

    <input
      name="query"
      type="text"
      value={this.state.query}
      onChange={this.handlerSearchChange}
      // autocomplete="off"
      // autofocus
      placeholder="Search images and photos"
    />
        </Searchbarform>
        
    
</header>
        )
    }
}