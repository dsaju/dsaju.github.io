// EdgeStates indicates the individual state for an individual edge
var EdgeStates = {
	UNSELECTED : 0, // not considered yet
	CURRENT : 1,    // considered right NOW
	MST : 2,        // is in the minimum spanning tree
	OUT : 3         // is NOT in the MST
};

// Edge class
// declared by a kinetic line object, two kinetic circle objects (which are connected by this line) and the weight
function Edge(kLine, kCircleA, kCircleB, weight) {
	var that = this;
	this.kLine = kLine;
	this.kCircleA = kCircleA;
	this.kCircleB = kCircleB;
	this.weight = weight;
	this.state = EdgeStates.UNSELECTED;	
	//SAJU
	this.lineLabel = weight;
	//SAJU
	
	// setState function
	// changes the EdgeState and sets the stroke color for the kinetic line object
	this.setState = function(state) {
		that.state = state;
		if (that.state == EdgeStates.UNSELECTED) {
			that.kLine.setStroke("red");
		} else if (that.state == EdgeStates.CURRENT) {
			that.kLine.setStroke("yellow");
		} else if (that.state == EdgeStates.MST) {
			that.kLine.setStroke("green");
		} else if (that.state == EdgeStates.OUT) {
			that.kLine.setStroke("white");
		}
	};
}
