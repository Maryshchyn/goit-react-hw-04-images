import { useState } from "react";
 import {Searchbarform} from './Searchbar.styled'


export function Searchbar({onSubmit}) {
    const [query, setQuery] = useState('')
    
    const handlerSearchChange = e => {
        setQuery(e.currentTarget.value.toLowerCase())
        
        
    }
const handelrSubmit = e => {
        e.preventDefault();
        
        if (query.trim() === '') {
            alert('Введіть щось');
            return
    }
    setQuery('')
        
        onSubmit(query)
    }

     return (
            <header >
          <Searchbarform onSubmit={handelrSubmit} >
    <button type="submit" >
      <span >Search</span>
    </button>

    <input
      name="query"
      type="text"
      value={query}
      onChange={handlerSearchChange}
      // autocomplete="off"
      // autofocus
      placeholder="Search images and photos"
    />
        </Searchbarform>
        </header>
        )
}



    
    
    

    
