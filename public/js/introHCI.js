'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

function addProjectDetails(e) {
	e.preventDefault();

	var projectID = $(this).closest('.project').attr('id');
	
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get("/project/" + idNumber, addproject);
}

function addproject(result){
	var projectHTML = '<img src="' + result['image'] + '" class="detailsImage"/>' +
		'<p>' + result['title'] + '</p>' +
		'<p><small>' + result['date'] + '</small></p>' +
		result['summary'];

	var details = $("#project" + result['id'] + " .details");
	details.html(projectHTML);


} 

function randomizeColors(e) {
	console.log("User clicked on color button");

	e.preventDefault();
	$.get("/palette", randomColor);
}

function randomColor(result){
	var colors = result.colors.hex;
	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);
}