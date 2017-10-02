var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://jsonplaceholder.typicode.com/posts",
  "method": "GET",
  "headers": {
    "quizid": "12345",
    "questionnum": "1",
    "cache-control": "no-cache",
    "postman-token": "7445e794-d402-f44e-616f-8f93702fb00f"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});