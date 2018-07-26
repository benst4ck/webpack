import $ from 'jquery';
import './home.css';
import './home2.css';
import './home3.css';

$(function(){
	$("#box").html('<span id="hw">Hello <em>World</em></span>');
	
	$("#hw").hover(
	  function () {
	    $(this).addClass("hover");
	  },
	  function () {
	    $(this).removeClass("hover");
	  }
)
})

