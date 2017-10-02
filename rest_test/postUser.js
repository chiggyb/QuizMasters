var form = new FormData();
form.append("id", "11");
form.append("userName", "einstein");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://jsonplaceholder.typicode.com/posts",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "58e52fd9-24e3-4565-ce73-2119eabc9458"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});