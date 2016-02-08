$(document).ready(function() {

  
  var url_visitor = 'http://www.yourfunnel.com/index.html?source=​Facebook';

  // grab the source GET parameter
  var pattern = /http.+source=(.+)/i;
  var source = pattern.exec(url_visitor)[1];

  if (source !== '​Facebook' && source !== 'Google' && source !== '​Twitter') {
    alert("wrong url parameter.  now exiting...")
    throw new error();
  }



  // store the source GET parameter in a cookie for later use
  document.cookie = "sourceInput=" + source;

  // retrieve the data from the API
  $(function() {
    $.ajax({
      async: false,
      cache: false,
      dataType: 'json',
      url: 'http://www.getitfree.us/api/posts.json?filter=popular&limit=10',
      type: "get",
      success: function(json) {
        var arr = ['51b7af297665ebc546c39a34', '51ae281f1521021885573173', '52a9ff2ef484b9f53d8b4b1b', '51ae281c15210218855730b8', '554b9bac747b7785408b4581', '54d2650236c7e1c12f8b4567', '54a6dc4f93554243488b4567', '51ae283a1521021885573852'];
        for (var i = 0; i < arr.length; i++) {
          $("#gif-results").append("<div>" + "<a href='./signup.html' target='_blank' class='anchor' id='" + json.data[arr[i]].id + "'>" + "<img class='img-responsive' alt='advertisement image' src='" + json.data[arr[i]].images['0'] + "'>" + "</a>" + "<p class='adjust_pTitle'>" + json.data[arr[i]].title + "</p>" + json.data[arr[i]].description + "</div>");
        }

      },
      error: function() {
        alert("error");
        throw new error();
      }
    })
  });

  // get the product ID after image is clicked and store in cookie
  $(document).on('click', '.anchor', function() {
    var number = $(this).attr("id");
    document.cookie = "id=" + number;
  });
});
