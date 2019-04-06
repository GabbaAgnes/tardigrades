/*only fetching 3 gifs for design purposes, query value and amount limit are hard-coded.  */
function displayResults(responseJson){
  console.log(responseJson);
  $('#tardiresults-list').empty();
     for (let i = 0; i < 3; i++){
  $('#tardiresults-list').append(
    `<li><h3><a href="${responseJson.data[i].url}">${responseJson.data[i].id}</a></h3>
    <iframe src='${responseJson.data[i].embed_url}'></iframe>
    </li>`
  )};
  };

fetch(`https://api.giphy.com/v1/gifs/search?api_key=IFi4RzT7NxvWjFC845z185zLEwjfObX5&q=tardigrade&limit=5&offset=0&rating=G&lang=en`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson));




/*This is only for fetching pictures with the changing query value, specified within input. */
function getPics(v){
  fetch(`https://api.unsplash.com/search/photos?query=${v}&client_id=26466f28b131dd4faf1de40f6fdad48db8620e6172ff77f8c0b459e6ea421d2f`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        //$(".pic").html('')
         let html=""
        for (let i=0; i<4; i++) {
          //$(".pic").append(`<img src= ${myJson.results[i].urls.thumb}/>`)
          let slide=`<div class="mySlides fade"  style="background-image: url(${myJson.results[i].urls.regular})">
          <div class="numbertext">${i} of 4</div>
          
          
          </div>`
           html+=slide
         
        }
       $(".slideshow-container").html(html)
        slideIndex = 0;
        showSlides();

         
    });
}  

/* this.value corresponds to each value of the input, */
$('input').on('change', function() {
    getPics(this.value);
    console.log(this.value);
    let obj={
      coords:{
        latitude:places[this.value].lat,longitude:places[this.value].long
      }
    }

    /*showPosition function is specified later when fetching sunset time data. */
    showPosition(obj);
});

let places={
  "yellowstone-national-park-hot-spring": {
        "lat":44.427963, "long":-110.588455
  }, 
  "glacier":{
       "lat":46.014, "long":7.54439
  },
  "salt-lake":{
        "lat":41.68992129999999, "long":-111.9694786
  },
  "desert":{
        "lat":31.7655374, "long":32.4096679
  },
  "ocean":{
        "lat":30.6693245, "long":-81.0351562
  },
  "sandstone":{
        "lat":29.7779369, "long":34.9799538
  },
  "sea":{
         "lat":17.7606265, "long":142.5160074
  },
  "galaxy":{
      "lat": 37.415229, "long": -122.06265
  }

}

var x = document.getElementById("demo");

/* sets the HTML markup contained within the element.
This is to display, under"demo", the latitude and longitude respectively, these in ${}
are the varied values we input in the previous section to change the API's returned results*/
function showPosition(position) {
  console.log(position);
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
   fetch(`https://api.sunrise-sunset.org/json?lat=${position.coords.latitude}&lng=${position.coords.longitude}&date=2019-01-01`)
   .then(response => response.json())
   .then(responseJson => showSunset(responseJson));

}


/* BELOW displays within the #displaymessage, data.results.sunset retrieves the time of sunset */
  function showSunset (data){
     console.log(data);
     $("#displaymessage p").html(data.results.sunset+ `<P>Here is the time of sunset on 2019-01-01 of the place you’ve chosen; meet me at this exact geographic location THREE hours prior to the indicated sunset time. If you've chosen the last 
     option--meet me FOUR hours prior to indicated; I'll introduce you to the spacestation's laboratory and get to it.
     <br><br>

      We start on the first day of 2019, and I have arranged my dearest friends of three teams to reanimate us from the Cryptobiosis state on the last day of 2019, so we can recharge our lives by watching the first sunrise of 2020.</P>`)
  }




$("#getlonglat").click(function(){
  $("#yousure").html(`Thank you for your interest, please expect a private message for details.`)
  
});



var slideIndex = 0;
//showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); 
}
  
$("#video").click(function(){
    $("#videoPlayer").html(`<video controls><source src="./picture/movie.mp4" type="video/mp4"</video>`)
    console.log("hi clicked");
});


$("a[href='#bottom']").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
});






