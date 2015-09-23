
var seatLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var createTable = function() {

	var num_rows = parseInt($('#plane_num_rows').val()) - 1;
	var num_cols = parseInt($('#plane_num_cols').val()) - 1;

	var body = document.getElementById('seat-table');

	var tbl = document.createElement('table');
    tbl.setAttribute('border', '1');

    var tbdy = document.createElement('tbody');

    for (var i = 0; i <= num_rows; i++) {
    	var tr = document.createElement('tr');

		for (var j = 0; j <= num_cols; j++) {
			var td = document.createElement('td');

			td.innerHTML= seatLetters[i] + (j+1);

			td.className = 'cell';
			tr.appendChild(td);
		}

		tbdy.appendChild(tr);
	}

	tbl.appendChild(tbdy);
	body.appendChild(tbl);
};

var displayTable = function() {
	var cell = $('td.cell');

	for (var i = 0; i < cell.length; i++) {
		console.log(cell[i].innerHTML);

	}
};


$(document).ready(function() {
	$('#generate_seats').on('click', function() {
		createTable();
		displayTable();
	});
});


