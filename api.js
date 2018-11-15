console.log("hello")
let searchterm= "tardigrades"
fetch(`http://api.giphy.com/v1/gifs/search?q=${searchterm}&api_key=IFi4RzT7NxvWjFC845z185zLEwjfObX5&limit=5`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    $(".gif").html(`<iframe width="480" height="300" src="${myJson.data[0].embed_url}"></iframe>`)
  });
  
