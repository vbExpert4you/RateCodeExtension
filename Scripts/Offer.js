class DateSpan
{
	constructor (originalText, startDate, endDate)
	{
		this.originalText = originalText;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	static parseBookDates(bookDatesText)
	{
		if (bookDatesText.indexOf("-") > 0)
		{
			var dates = bookDatesText.split("-");
			return new DateSpan(bookDatesText, new Date(dates[0]), new Date(dates[1]))
		}
		
		return new DateSpan(bookDatesText, new Date(bookDatesText), new Date(bookDatesText));	
	}

	static parseSailDates(sailDatesText)
	{
		if (sailDatesText == "Select")
		{
			return new DateSpan(sailDatesText, new Date(), new Date());
		}

		if (sailDatesText.indexOf("Sailings thru") >= 0)
		{
			var startDate = new Date();
			var endDate = new Date(sailDatesText.replace("Sailings thru", ""));

			//	This gives us the first day of the month so calculate the last day of the month
			var lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0);

			return new DateSpan(sailDatesText, startDate, lastDayOfMonth);
		}

		return new DateSpan(sailDatesText, new Date(), new Date());
	}
}

class Offer
{
	constructor (offerName, offerLink, rateCode, bookDates, sailDates, itineraries, cabinCategories, combinability)
	{
		this.offerName = offerName;
		this.offerLink = offerLink;
		this.rateCode = rateCode;
		this.bookDates = bookDates;
		this.sailDates = sailDates;
		this.cabinCategories = cabinCategories;
		this.combinability = combinability;
	}
	

}