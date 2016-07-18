$(document).ready(function() {
	
	$('.button-collapse').sideNav({		      
		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	})

	$('.info-legal').click(function(e) {
		e.preventDefault()
	})

	$('.info-privacy').click(function(e) {
		e.preventDefault()
	})

 
})