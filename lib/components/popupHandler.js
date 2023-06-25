export default (marker) => {
    const nameEl=document.getElementById("place-name");
    const detailsEl=document.getElementById("place-details");

    if(nameEl && detailsEl) {
        marker.bindPopup('<b> ' + nameEl.value + '</b><br>' + detailsEl.value).openPopup();
    }
}