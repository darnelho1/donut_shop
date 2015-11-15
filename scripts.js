// Create constructor function that models Top Pot Donut
// locations. Add method(s) to simulate the number of donuts
// needed based on the table data provided.

function TopPotStore(loc, minCustomer, maxCustomer, avgDonuts) {
	this.loc = loc;
	this.minCustomer = minCustomer;
	this.maxCustomer = maxCustomer;
	this.avgDonuts = avgDonuts;
	
}

TopPotStore.prototype.customerGenerator = function(){
	console.log(Math.floor(Math.random()*(this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
}

var downtown = new TopPotStore("Downtown", 8, 43, 4.50);
downtown.customerGenerator();

var capitolHill = new TopPotStore("Capitol Hill", 4, 37, 2.00);
capitolHill.customerGenerator();

var southLakeUnion = new TopPotStore("South Lake Union", 9, 23, 6.33);
southLakeUnion.customerGenerator();

var wedgeweood = new TopPotStore("Wedgewood", 2, 28, 1.25);
wedgewood.customerGenerator();

var ballard = new TopPotStore("Ballard", 8, 58, 3.75);
ballard.customerGenerator();