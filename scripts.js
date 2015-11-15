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

var testDowntown = new TopPotStore("Downtown", 8, 43, 4.5);
testDowntown.customerGenerator();

