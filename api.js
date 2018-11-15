
function getPics(v){
  fetch(`https://api.unsplash.com/search/photos?query=${v}&client_id=26466f28b131dd4faf1de40f6fdad48db8620e6172ff77f8c0b459e6ea421d2f`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        $(".gif").html('')
        for (let i=0; i<5; i++) {
          $(".gif").append(`<img src= ${myJson.results[i].urls.regular}/>`)
        }
       
    });
}
       
   
  
  $('select').on('change', function() {
    getPics(this.value);
  });
