$(document).ready(function() {
  var pattern = /.+id=(.+)/i;
  var id = pattern.exec(document.cookie)[1];

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
          if (json.data[arr[i]].id === id) {
            $("#selected-product").append("<div>" + "<img class='img-responsive' alt='advertisement image' src='" + json.data[arr[i]].images['0'] + "'>" + "</a>" + "<p class='adjust_pTitle'>" + json.data[arr[i]].title + "</p>" + "</div>");
          }
        }
      },
      error: function() {
        throw new error();
      }
    })
  });

  $(".buttonProperties").on('click', function() {
    // get form data and parse out first and last name
    var formdata = $("#signupForm").serialize();
    var pattern = /firstName=(.*)&lastName=(.*)&email=/i;
    document.cookie = "firstName=" + pattern.exec(formdata)[1] + "_" + "lastName=" + pattern.exec(formdata)[2];
  });
});