function getScroll(id) {
    let el = document.getElementById(id);
    return el && el.scrollTop ? el.scrollTop : 0;
}

function setScroll(id, pos) {
    let el = document.getElementById(id);
    if (el)
        el.scrollTop = pos || 0;
}