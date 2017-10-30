function deletepost(id) {
  alert('ํYOU WANT TO DELETE THIS POST ? ');

  //Delete from back end
  $.ajax({
    url: "http://localhost:3000/posts/" + id, // post id
    type: "DELETE" // Use DELETE
  })
  alert('DELETE COMPLETE');
  setTimeout(window.location.href = "index.html");
  //Delete from front end
  $("#posts" + id).empty();

}
/*------------------------------------------------------------------------------------------------------ */
/*
function disTxt(id){
  
  document.getElementById("desc"+id).style.display = "block";

}


/*แก้ไขโพสเพื่อเปิดจาก อ่านเท่านั่นเป็นแก้ไขได้*  ***อยู่ตรงนี้่มันอยู่ตรงนี้++++++++++ที่เปลี่ยนสเตตัสไงเหลือเปลี่ยนกลับนะ***/ 
function editpost(id) {
  console.log(id);
  var url = "http://localhost:3000/posts";
  $("#desc" + id).hide();
  $("#descedit" + id).prop('type', "text");
}
/*
  $.ajax({
      type: 'PUT',
      //data: {name: 'Billy Bob', age: 28},
      url: url + "/" + id,
      success: function () {
          //no data...just a success (200) status code
          console.log(id);
      }
  });
  */


/*แก้ไข้*/
function savepost(id, location, desc) {
  // console.log(id,title)
  var location = location;
  var desc = desc;
  var picture = picture;
  var newposts = {};

  newposts.id = id;
  newposts.like = "20";
  newposts.picture = $("#picture" + id).val(),
    newposts.desc = $("#desc" + id).val();
  newposts.location = $("#location" + id).val();


  var url = "http://localhost:3000/posts/" + id;
  $.ajax({
    type: 'PUT',
    data: newposts,
    url: url,
    success: function () {
      //no data...just a success (200) status code
      console.log(newposts);
    }
  });
}


$(document).ready(function () {
  var $desc = $('#desc');
  var $location = $('#location');
  var $picture = $('#picture');

  var url = "http://localhost:3000/posts"
  $.ajax({
    url: url,
    method: "GET",
    success: function (data, status, xhr) {
      console.log(data);
      var template = $('#template').html();
      for (var i = 0; i < data.length; i++) {
        var rendered = Mustache.render(template, data[i]);
        $("#posts").append(rendered);
      }
    }
  })




  //create
  $("#postpin").click(function () {
    console.log($("#desc").val());
    $.post(url, {
      desc: $("#desc").val(),
      location: $("#location").val(),
      picture: $("#picture").val(),
      like: "20",


    });
    setTimeout(window.location.href = "index.html");


  });
  /*
  //update have error
  $("#btnU").click(function () {
    $.get(url + "/3", function (data, status) {
      console.log(data);
      var newuser = {};
      newuser.id = data.id;
      newuser.title = "zzzzzzzzzzzzzzz";
      console.log(JSON.stringify(newuser));
      var updateUrl = url + "/3";
      $.ajax({
        url: updateUrl,
        type: 'PUT',
        data: newuser,
        success: function (result) {
          console.log('Updated!');
        }
      });
    });
  });
  */
});