import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'
import Card from './components/Card/card'

function App(){

    const url = "https://api.spacexdata.com/v4/launches";
    const fetchData = async () => {
        const response = await axios.get(url)
        setLaunches(response.data)
    }
    
    const [launches, setLaunches] = useState([

    ]);

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="wrapper">
            <a href="https://github.com/thereal-atom/spacex"><img src="https://cdn.discordapp.com/attachments/810932922306789406/856165911126605894/spaces.jpg" alt="Spacex logo" className="logo" /></a>
            <div className="container">
                {launches.map(launch => (
                    <div className="cards__container"> 
                        <Card name={launch.name} succesful={launch.success ? "Yes" : "No"} description={launch.details} image={launch.links.patch.large} wiki={launch.links.wikipedia}/><br/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;