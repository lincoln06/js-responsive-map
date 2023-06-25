import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import "./scss/main.scss";
import { setupCounter } from './counter.js'
import initMap from './lib/map.js'
document.querySelector('#app').innerHTML = `
<div id="content">
    <div id="map">
    
    </div>
    <div id="form-layer">
        <form id="form">
            <label for="place-name">Place name</label>
            <input type="text" id="place-name" placeholder="Type a name..." />
            <textarea id="place-details" placeholder="Type a description"></textarea>
            <label for="coords-output">Coordinates</label>
            <textarea id="coords-output" rows="10" disabled></textarea>
            <button id="save-button">Save</button>
            <button id="close-button">Close</button>
       </form>
    </div>
</div>
`

initMap();
