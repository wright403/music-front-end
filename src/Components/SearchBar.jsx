import React, { useState } from 'react';

const SearchBar = ({getUserInput, userInput}) => {

    
    
    
    
    
    // function handleSubmit(event){
    //     event.preventDefault();
    //     let filterfieldvalue = {
    //         filterfield: filterfield
    //     }
    //     filterSongs( filterfieldvalue )
    

    return ( 
        <form>
            <div>
                <label>Filter</label>
                <input name={''} type='search' value={userInput} onChange={(event) => getUserInput(event)}/>
            </div>
        </form>
     );
}
 
export default SearchBar;