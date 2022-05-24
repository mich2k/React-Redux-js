import React, {useState, useEffect} from "react";
import axios from 'axios';

const Search = () =>{

    const [term, setTerm] = useState('');

    useEffect(() =>{

        const search = async () =>{
            await axios.get('https://it.wikipedia.org/w/api.php');
        };
        search();   // I call the function that i just defined (1 of 3 syntax)

    }, [term]); // everytime re-renders and the arr changes it updates

    /*
        useEffect scenarios/configurations

        empty array []              -> Run at initial render
        nothing                     -> Run at initial render & after every re-render
        illed array [term, term1]  -> Run at initial render & (after every re-render ONLY IF data in array has changed)

    
    */

    return(
        <div className="ui form">
            <div className="field">
                <label htmlFor="">Search term:  </label>
                <input 
                value={term}
                onChange={e => setTerm(e.target.value)}
                type="text" className="input" />
            </div>
        </div>
    );
}

export default Search;