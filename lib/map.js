import L from 'leaflet'
import {hideForm, showForm} from './components/toggleForm.js'
import showCoords from './components/showCoords.js'
import handlePopup from './components/popupHandler.js'

export default (latitude, longitude,zoom) => {

    const map = L.map('map').setView([latitude, longitude], zoom);
    const markerLayer = L.layerGroup().addTo(map);
    const closeButtonEl = document.getElementById("close-button");
    const saveButtonEl = document.getElementById("save-button");
    const formEl = document.getElementById("form");
    const mapEl = document.getElementById("map");
    const helpMarker = new L.marker(map.getCenter(), {opacity:0});
    saveButtonEl.disabled = true;
    map.doubleClickZoom.disable();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    helpMarker.bindTooltip("Double-click on the map<br> to get started", {permanent: true, className: "help-marker", offset: [0, 0] });
    helpMarker.addTo(map);

    if(mapEl) {
        map.on('dblclick',function(event) {
            helpMarker.remove();
            showForm(formEl);
            markerLayer.clearLayers();
            const marker = new L.marker(event.latlng, {
                draggable: true
            });
            marker.addTo(markerLayer);
            handlePopup(marker);
            saveButtonEl.disabled=false;
            marker.on('dragend', (event) => {
                showCoords(marker.getLatLng());
                handlePopup(marker);
            })
            showCoords(event.latlng);
            if(saveButtonEl) {
                saveButtonEl.addEventListener("click",(event) => {
                    handlePopup(marker);
                    event.preventDefault();
                })
            }
        })
        }
        if(closeButtonEl) {
            closeButtonEl.addEventListener("click", (event) => {
                hideForm(formEl);
                markerLayer.clearLayers();
                helpMarker.addTo(map);
                event.preventDefault();
            });
        }
}