export default (coords) => {
    const coordsTxAreaEl=document.getElementById("coords-output");
    coordsTxAreaEl.value='Latitude: '+coords.lat+'\nLongtitude: '+coords.lng;
}