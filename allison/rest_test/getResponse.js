var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://jsonplaceholder.typicode.com/posts",
  "method": "GET",
  "headers": {
    "id": "11",
    "questionnum": "1",
    "cache-control": "no-cache",
    "postman-token": "bbc883ad-0f88-f534-465e-444406c506ee"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});