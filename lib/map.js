import L from 'leaflet'
import {hideForm, showForm} from './components/toggleForm.js'
import showCoords from './components/showCoords.js'
import createPopupText from './components/popupTextMaker.js'

export default () => {
    const formEl = document.getElementById("form");
    const map = L.map('map').setView([51.505, -0.09], 13);
    const markerLayer=L.layerGroup().addTo(map);
    const closeButtonEl=document.getElementById("close-button");
    const saveButtonEl=document.getElementById("save-button");
    saveButtonEl.disabled=true;
    const mapEl=document.getElementById("map");
    map.doubleClickZoom.disable();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    if(mapEl) {
        map.on('dblclick',function(event) {
            if(formEl.style.display==="flex") {
                markerLayer.clearLayers();
                const marker=new L.marker(event.latlng, {
                    draggable: true
                });
                marker.addTo(markerLayer);
                // marker.bindPopup(('something').openPopup());
                saveButtonEl.disabled=false;
                marker.on('dragend', (event) => {
                    showCoords(marker.getLatLng());
                    handlePopup(marker);
                })
                showCoords(event.latlng);
                if(saveButtonEl) {
                    saveButtonEl.addEventListener("click",() => {
                        handlePopup(marker);
                    })
                }
            } else {
                showForm(formEl);
            }
        })
        }
        if(closeButtonEl) {
            closeButtonEl.addEventListener("click", (event) => {
                hideForm(formEl);
                event.preventDefault();
                event.stopPropagation();
            });
        }
    function handlePopup(marker) {
        marker.bindPopup(createPopupText()).openPopup();
    }
}