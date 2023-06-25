export default () => {
    const nameEl=document.getElementById("place-name");
    const detailsEl=document.getElementById("place-details");

    if(nameEl && detailsEl) {
        return '<b> ' + nameEl.value + '</b><br>' + detailsEl.value;
    }
}