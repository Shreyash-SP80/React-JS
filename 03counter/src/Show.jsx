import './show.css'
import { useEffect } from 'react';

function Show() {
    
    // Executed when show() executed 
    useEffect(() => {
        alert("Show page loadded");
    }, []);

    return (
        <div id='container'>
            <h1>Show component returns h1</h1>
            <h2>Show component returns h2</h2>
            <h3>Show component returns h3</h3>
        </div>
    )
}

export default Show;