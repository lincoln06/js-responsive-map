export default (marker) => {
    const nameEl=document.getElementById("place-name");
    const detailsEl=document.getElementById("place-details");

    if(nameEl && detailsEl) {
        let message=(nameEl.value==='' && detailsEl.value==='')
            ?'Complete the form on the right to see name and description here... '
            : '<b> ' + nameEl.value + '</b><br>' + detailsEl.value;
        marker.bindPopup(message).openPopup();
    }
}