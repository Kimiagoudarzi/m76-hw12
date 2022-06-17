function event_function(event) {
    document.getElementById('show_position').innerHTML =
        `current width:${Math.round(event.pageX )}
         current heigh :${Math.round(event.pageY)}`;
}


let div = document.getElementById('container');
div.addEventListener('mouseout', () => {
    document.getElementById('show_position').innerHTML = null;

})