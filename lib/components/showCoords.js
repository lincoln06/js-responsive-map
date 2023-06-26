export default (coords) => {
    const coordsTxAreaEl = document.getElementById("coords-output");
    coordsTxAreaEl.value = `Latitude:\n${coords.lat}\nLongitude:\n${coords.lng}`;
}