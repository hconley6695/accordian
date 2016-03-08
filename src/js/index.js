// Javascript Entry Point
import $ from 'jquery';

$('.box1').css('color', 'gray');
$('.box2').css('color', 'gray');
$('.box3').css('color', 'gray');

//$('h2').addClass('#box3')

$('#header3').on('click', function() {
	$('#box3').addClass('.moveup');
});