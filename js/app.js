$(document).ready(function() {
	
	$('.button-collapse').sideNav({		      
		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	})

    $('.scrollspy').scrollSpy()

    $('.card-title a').click(function(e) {
    	e.preventDefault()
    })

	$('.info-legal').click(function(e) {
		e.preventDefault()
	})

	$('.info-privacy').click(function(e) {
		e.preventDefault()
	})

 
})