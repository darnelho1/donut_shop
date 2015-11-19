
//////// Object Constructor to Create New Locations ////////
function TopPotStore(loc, minCustomer, maxCustomer, avgDonuts) {
	this.loc = loc;
	this.minCustomer = minCustomer;
	this.maxCustomer = maxCustomer;
	this.avgDonuts = avgDonuts;
	this.dPurchasedEachHour = [];
	this.sumDonuts = 0;
}

//////// Array Holding all Store Objects ////////
var storeArray = [];

/// USES STORE DATA TO GENERATE DONUTS/HOUR AND TOTAL ///
TopPotStore.prototype.donutsPerHour = function(){
	for(var i = 0; i < 12; i++) {
		var customersThisHour = Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
		var donutsPurchased = Math.round(customersThisHour * this.avgDonuts);
		this.dPurchasedEachHour[i] = donutsPurchased;
		this.sumDonuts += donutsPurchased;
	};
}

/// PUTS STORE INFO INTO TABLE ///
TopPotStore.prototype.render = function() {
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = this.loc;
	tr.appendChild(td);

	for (var i = 0; i < 12; i++) {
		var donuts = document.createElement('td');
		donuts.innerHTML = this.dPurchasedEachHour[i];
		tr.appendChild(donuts);
	};

	var totals = document.createElement('td');
	totals.innerHTML = this.sumDonuts;
	tr.appendChild(totals);
	document.getElementById('body').appendChild(tr);

	storeArray.push(this);
}


/// INITIAL LOCATIONS + FUNCTION CALLS ///
var downtown = new TopPotStore("Downtown", 8, 43, 4.50);
downtown.donutsPerHour();
downtown.render();

var capitolHill = new TopPotStore("Capitol Hill", 4, 37, 2.00);
capitolHill.donutsPerHour();
capitolHill.render();

var southLakeUnion = new TopPotStore("South Lake Union", 9, 23, 6.33);
southLakeUnion.donutsPerHour();
southLakeUnion.render();

var wedgewood = new TopPotStore("Wedgewood", 2, 28, 1.25);
wedgewood.donutsPerHour();
wedgewood.render();

var ballard = new TopPotStore("Ballard", 8, 58, 3.75);
ballard.donutsPerHour();
ballard.render();

/// DROPDOWN MENU
var dropOpt = function() {
		
		for (var i = 0; i < storeArray.length; i++) {
		var option = document.createElement('option');
		option.innerHTML = storeArray[i].loc;
		document.getElementById('dropdown').appendChild(option);
	}
}();


/// ADDS NEW STORE ///
var updateStores = function() {
	var locInfo = document.getElementById('locationAdd').value;
	var minCustAdd = document.getElementById('minCustAdd').value;
	var maxCustAdd = document.getElementById('maxCustAdd').value;
	var avgDonutsAdd = document.getElementById('avgDonutsAdd').value;
	var newStoreObject = new TopPotStore(locInfo,parseInt(minCustAdd),parseInt(maxCustAdd),parseInt(avgDonutsAdd));
	newStoreObject.donutsPerHour();
	newStoreObject.render();
	storeArray.push(newStoreObject);

	var option = document.createElement('option');
	option.innerHTML = newStoreObject.loc;
	document.getElementById('dropdown').appendChild(option);

	// deletes original Downtown row if added. Example only. ///
	if (locInfo.toUpperCase() === 'DOWNTOWN') {
		var removeTableRow = document.getElementsByTagName('table')[0];
		removeTableRow.deleteRow(1);
	}
}

// Event listener for Update button
document.getElementById('buttonUpdate').addEventListener('click', updateStores, false);


