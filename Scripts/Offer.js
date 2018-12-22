class DateSpan
{
	constructor (originalText, startDate, endDate)
	{
		this.originalText = originalText;
		this.startDate = startDate;
		this.endDate = endDate;
	}
}

class Offer
{
	constructor (offerName, rateCode, bookDates, sailDates, itineraries, cabinCategories, combinability)
	{
		this.offerName = offerName;
		this.rateCode = rateCode;
		this.bookDates = new DateSpan(bookDates, new Date, new Date);
		this.sailDates = new DateSpan(sailDates, new Date, new Date);
		this.cabinCategories = cabinCategories;
		this.combinability = combinability;
	}
	
	static getDates(dateRange)
	{
		if (dateRange != null && dateRange != "")
		{
			//var expr = /from \"(.*)\" to \"(.*)\"/g;
			var yearFirstDateRegEx = /([12]\d{3}[-.](0[1-9]|1[0-2])[-.](0[1-9]|[12]\d|3[01]))/g;
			var matches = yearFirstDateRegEx.exec(dateRange);
			console.log(matches);
			if (matches.length == 1)
			{
				return new DateSpan(dateRange, new Date, matches[1]);
			}
			if (matches.length == 2)
			{
				var start = new Date(matches[1]);
				var end = new Date(matches[2]);
				
				if (start === null || end === null) 
				{
					return null;
				}
				return new DateSpan(dateRange, start, end);
				
			}
			
			return null;
		}
	}
}