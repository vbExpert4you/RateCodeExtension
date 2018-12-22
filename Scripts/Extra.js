//Offer.js

$(document).ready(function() 
{ 
	
	$("#btnShow").click(function ()
	{
		var table = findTable();
		
		if (table == null || table == "undefined")
		{
			alert("I could not find the table that contains the offers");
			return;
		}
		
		table = table[0];
		
		var offers = parseTable(table);

	});
});

function parseTable(table)
{
	const OfferNumberCol = 0;
	const OfferCol = 1;
	const BookDatesCol = 2;
	const SailDatesCol = 3;
	const ItinerariesCol = 4;
	const CabinCategoriesCol = 5;
	const CombinabilityCol = 6;
	
	var offers = [];
		
	console.log(table);
	
	var rowLength = table.rows.length;

	console.log("rows: ", rowLength);
	
	//	Skip the first row because it's actually the headers
	for(var i = 1; i < rowLength; i += 1)
	{
		
	  var row = table.rows[i];

	  //onstructor (offerName, rateCode, bookDates, sailDates, itineraries, cabinCategories, combinability)
	  console.log("cell", row.cells[OfferCol]);
	  console.log("cell th", row.cells[OfferCol].th);
	  console.log("cell innerHTML", row.cells[OfferCol].innerHTML);
	  var offer = new Offer(row.cells[OfferCol].text, "", row.cells[BookDatesCol],
							row.cells[SailDatesCol].html, row.cells[ItinerariesCol].html, 
							row.cells[CabinCategoriesCol].html, row.cells[CombinabilityCol].html);
	  console.log(offer);
	  var cellLength = row.cells.length;
	  for(var y = 0; y < cellLength; y += 1)
	  {
		var cell = row.cells[y];

		//console.log("row " + i + ", cell " + y, cell);
		
		//do something with every cell here
	  }
	}
}

///	Find the table that has the information.
///	There may be multiple tables.
function findTable()
{
	return $("th:contains(Offer)").first().closest("table");
}