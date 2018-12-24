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

		var offerLink = row.cells[OfferCol].children[0];

		// var offerName = "";
		// var offerLinkHref = null;

		// row.cells[OfferCol].children.forEach(function (item, index)
		// {
		// 		if (item.href != "")
		// 		{
		// 			offerLinkHref = item;
		// 		}
		// 		else if (offerName != "")
		// 		{
		// 			offerName = item.innerText;
		// 		}
		// });

		// for (var i = 0; i < row.cells[OfferCol].children.length - 1; i++)
		// {
		// 	var item = row.cells[OfferCol].children[i];

		// 	if (item.href != "")
		// 	{
		// 		offerLinkHref = item;
		// 	}
		// 	else if (offerName != "")
		// 	{
		// 		offerName = item.innerText;
		// 	}
		// }
		// console.log("offer", row.cells[OfferCol].children);
		// console.log("offerName", offerName);
		// console.log("offerLinkHref", offerLinkHref);

		var offer = new Offer(offerLink.innerText
							, offerLink.href
							, ""
							, DateSpan.parseBookDates(row.cells[BookDatesCol].innerText)
							, DateSpan.parseSailDates(row.cells[SailDatesCol].innerHTML)
							, row.cells[ItinerariesCol].innerText
							, row.cells[CabinCategoriesCol].innerText
							, row.cells[CombinabilityCol].innerText);
		
		offers.push(offer);

	}

	console.log("Offers", offers);
}


///	Find the table that has the information.
///	There may be multiple tables.
function findTable()
{
	return $("th:contains(Offer)").first().closest("table");
}