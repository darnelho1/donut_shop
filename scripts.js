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

}

// Method generates a random number of customers. Can this be combined with donutsPerHour??
/*TopPotStore.prototype.customerGenerator = function(){
	return Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
} */

// Method generates array of donuts sold per hour
TopPotStore.prototype.donutsPerHour = function(){
	for(var i = 0; i < 12; i++) {
		var customersThisHour = Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
		//var customersThisHour = store.customerGenerator();
		var donutsPurchased = Math.round(customersThisHour * this.avgDonuts);
		this.dPurchasedEachHour[i] = donutsPurchased;
	};
}

// Method generates total donuts needed for one store.
TopPotStore.prototype.totalDonuts = function(store) {
	var total = store.dPurchasedEachHour.reduce(function(a,b){
		return a + b;
	});
	this.sumDonuts = total;
}

// Render function
TopPotStore.prototype.render = function(store) {
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

// Updating the table
// Step 1: Identify info you want to extract

// Step 2:

var newStore = function() {
	var locInfo = document.getElementById('locationAdd').value;
	var minCustAdd = document.getElementById('minCustAdd').value;
	var maxCustAdd = document.getElementById('maxCustAdd').value;
	var avgDonutsAdd = document.getElementById('avgDonutsAdd').value;
	var newStoreObject = new TopPotStore(locInfo,parseInt(minCustAdd),parseInt(maxCustAdd),parseInt(avgDonutsAdd));
	newStoreObject.donutsPerHour();
	newStoreObject.totalDonuts(newStoreObject);
	newStoreObject.render();
	console.log(newStoreObject);
}

// Step 3: Event listener for Update button

document.getElementById('buttonUpdate').addEventListener('click', newStore, false);


// Store locations
var downtown = new TopPotStore("Downtown", 8, 43, 4.50);
downtown.donutsPerHour();
downtown.totalDonuts(downtown);
downtown.render();

var capitolHill = new TopPotStore("Capitol Hill", 4, 37, 2.00);
capitolHill.donutsPerHour();
capitolHill.totalDonuts(capitolHill);
capitolHill.render();

var southLakeUnion = new TopPotStore("South Lake Union", 9, 23, 6.33);
southLakeUnion.donutsPerHour();
southLakeUnion.totalDonuts(southLakeUnion);
southLakeUnion.render();

var wedgewood = new TopPotStore("Wedgewood", 2, 28, 1.25);
wedgewood.donutsPerHour();
wedgewood.totalDonuts(wedgewood);
wedgewood.render();

var ballard = new TopPotStore("Ballard", 8, 58, 3.75);
ballard.donutsPerHour();
ballard.totalDonuts(ballard);
ballard.render();


