mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style:'mapbox://style/mapbox/streets-v12',// style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 8 // starting zoom
});

const marker = new mapboxgl.Marker({color: 'red'})
 .setLngLat(listing.geometry.coordinates)//listing.geometry.coordinates
 .setPopup(new mapboxgl.Popup({offset: 25 })
 .setHTML(
    `<h4>${listing.location}</h4><p>Exact location will be provided after booking!</P>`
 ))
 .addTo(map);

 
