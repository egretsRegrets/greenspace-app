
function autoComplete(input, latInput, lngInput) {
    input.addEventListener('keydown', function(e){
        if (e.keyCode === 13){
            e.preventDefault();
        }
    });
    if (!input) return;
    const dropdown = new google.maps.places.Autocomplete(input);
    dropdown.addListener('place_changed', function (){
        var place = dropdown.getPlace();
        latInput.value = place.geometry.location.lat();
        lngInput.value = place.geometry.location.lng();
    });
}

let input = document.getElementById('greenspaceAddress');
let latInput = document.getElementById('greenspaceAddressLat');
let lngInput = document.getElementById('greenspaceAddressLng');
if (input) {
    input.addEventListener('focus', autoComplete(input, latInput, lngInput));
}
