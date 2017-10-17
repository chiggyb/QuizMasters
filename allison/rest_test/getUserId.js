var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://jsonplaceholder.typicode.com/posts",
  "method": "GET",
  "headers": {
    "userid": "2",
    "cache-control": "no-cache",
    "postman-token": "389c205e-19b6-d248-b470-c22a4cb06141"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});