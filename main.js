import './style.css'
import "./scss/main.scss";
import initMap from './lib/map.js'
document.querySelector('#app').innerHTML = `
<div id="content">
    <div id="map">
    </div>
    <div id="form-layer">
        <form id="form">
            <label for="place-name">Place name</label>
            <input type="text" id="place-name" placeholder="Type a name..." />
            <label for="place-details">Description</label>
            <textarea id="place-details" placeholder="Type a description" rows="6"></textarea>
            <label for="coords-output">Coordinates</label>
            <textarea id="coords-output" rows="4" disabled></textarea>
            <button id="save-button">Save</button>
            <button id="close-button">Close</button>
       </form>
    </div>
</div>
<footer>
<p>js-responsive-map | Author: Maciej Janta-Lipiński INF II NS</p>
</footer>
`

initMap(54.4533521,17.0419606,15);
