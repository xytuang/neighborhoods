
import * as React from 'react'
import { useState } from 'react'
const Search = () => {
    const [search, setSearch] =  useState('')
    return (
        <div>
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Enter a location here!"/>
            <div>
                <input type='checkbox' id='restaurants' name='restaurants'/>
                <label htmlFor='restaurants'>Restaurants</label>
            </div>

            <div>
                <input type='checkbox' id='train-stations' name='train-stations'/>
                <label htmlFor='train-stations'>Train Stations</label>
            </div>

            <div>
                <input type='checkbox' id='bus-stops' name='bus-stops'/>
                <label htmlFor='bus-stops'>Bus Stops</label>
            </div>

            <div>
                <input type='checkbox' id='malls' name='malls'/>
                <label htmlFor='malls'>Malls</label>
            </div>
            

        </div>
    )
}

export default Search