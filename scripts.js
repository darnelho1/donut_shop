// Create constructor function that models Top Pot Donut
// locations. Add method(s) to simulate the number of donuts
// needed based on the table data provided.

function TopPotStore(loc, minCustomer, maxCustomer, avgDonuts) {
	this.loc = loc;
	this.minCustomer = minCustomer;
	this.maxCustomer = maxCustomer;
	this.avgDonuts = avgDonuts;
	this.dPurchasedEachHour = [];
}

// Method generates a random number of customers
TopPotStore.prototype.customerGenerator = function(){
	return Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
}

// Method generates array of donuts sold per hour
TopPotStore.prototype.donutsPerHour = function(store){
	for(var i = 0; i < 12; i++) {
		var customersThisHour = store.customerGenerator();
		var donutsPurchased = Math.round(customersThisHour * this.avgDonuts);
		this.dPurchasedEachHour[i] = donutsPurchased;
	};
}

// Store locations
var downtown = new TopPotStore("Downtown", 8, 43, 4.50);
downtown.donutsPerHour(downtown);
console.log(downtown.dPurchasedEachHour);

var capitolHill = new TopPotStore("Capitol Hill", 4, 37, 2.00);
var southLakeUnion = new TopPotStore("South Lake Union", 9, 23, 6.33);
var wedgewood = new TopPotStore("Wedgewood", 2, 28, 1.25);
var ballard = new TopPotStore("Ballard", 8, 58, 3.75);


