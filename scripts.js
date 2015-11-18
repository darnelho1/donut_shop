// Create constructor function that models Top Pot Donut
// locations. Add method(s) to simulate the number of donuts
// needed based on the table data provided.

function TopPotStore(loc, minCustomer, maxCustomer, avgDonuts) {
	this.loc = loc;
	this.minCustomer = minCustomer;
	this.maxCustomer = maxCustomer;
	this.avgDonuts = avgDonuts;
	this.dPurchasedEachHour = [];
	this.sumDonuts = 0;

	this.donutsPerHour = function(){
	for(var i = 0; i < 12; i++) {
		var customersThisHour = Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
		var donutsPurchased = Math.round(customersThisHour * this.avgDonuts);
		this.dPurchasedEachHour[i] = donutsPurchased;
		this.sumDonuts += donutsPurchased;
	};
}

}

// Render function
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
}


// Store locations
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


// Top Pot Store Array
var storeArray = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];

// Updating the table with button

var updateStores = function() {
	var locInfo = document.getElementById('locationAdd').value;
	var minCustAdd = document.getElementById('minCustAdd').value;
	var maxCustAdd = document.getElementById('maxCustAdd').value;
	var avgDonutsAdd = document.getElementById('avgDonutsAdd').value;
	var newStoreObject = new TopPotStore(locInfo,parseInt(minCustAdd),parseInt(maxCustAdd),parseInt(avgDonutsAdd));
	newStoreObject.donutsPerHour();
	newStoreObject.render();
	storeArray.push(newStoreObject);
}


// Event listener for Update button
document.getElementById('buttonUpdate').addEventListener('click', updateStores, false);


