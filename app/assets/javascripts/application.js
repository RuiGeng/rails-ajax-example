// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
  $("#btn1").click(function(event){
  	alert('You clicked the Button');
  	var inputText = $("#input1").val()

  	$.ajax({
    type: "GET",
    url: "/title", 
    dataType: "json",
    data: { title: inputText },
    success: function(data){
		$.each(data, function (index, value) {
			console.log(value.title);
			console.log(value.url);
			$("#p1").text(value.url);
		})
      return false},
    error: function(data){
      return false}
    });
    event.preventDefault(); 
  });

});