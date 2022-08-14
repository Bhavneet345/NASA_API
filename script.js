// api-key = AB43RoKoQ8S8fMEnO7XSiFXEjOd4wKQJzvsyeBKs
// data - response data
function displayImage(data){
    // $('<img>', {
    //     src: data.url
    // }).appendTo('#image-container');
    $(document.createElement('img')).attr('src', data.url).appendTo('#image-container');
}

$.ajax({
    method: 'GET', 
    url: 'https://api.nasa.gov/planetary/apod',
    success: displayImage, 
    data: {
        api_key: 'AB43RoKoQ8S8fMEnO7XSiFXEjOd4wKQJzvsyeBKs', 
        date: '2018-07-05'
    }
});