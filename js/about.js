// Tabs

$(function () {
    $('#tabs').tabs({
        event: 'mouseover'
    });
});

// Map

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 56.963565, lng: 24.236183 },
        zoom: 11,
    });
};