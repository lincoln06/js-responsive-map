function showForm(element) {
    element.style.display = "flex";
}

function hideForm(element) {
    element.style.display = "none";
    element.reset();
}

export {showForm, hideForm};