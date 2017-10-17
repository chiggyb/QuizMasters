var form = new FormData();
form.append("questionNum", "1");
form.append("timestamp", "1506816000");
form.append("answer", "b");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://jsonplaceholder.typicode.com/posts",
  "method": "POST",
  "headers": {
    "id": "11",
    "cache-control": "no-cache",
    "postman-token": "096129ea-b48d-2911-8cf1-8a81e0deea7c"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});