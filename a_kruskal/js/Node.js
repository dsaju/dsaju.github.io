// component id
// consecutive number which will be increased with every new node
// is needed to group different nodes within a connected component
// (with this mechanism circles can be avoided)
var NODE_COMPONENT_ID = 0;

// Node class
// declared by the kinetic circle object
function Node(kCircle) {
	var that = this;
	this.componentId = NODE_COMPONENT_ID++;
	this.kCircle = kCircle;
	
	// resetComponentId function
	// this will not really reset the component id to the original one, but it will
	// set it to a new unique one
	this.resetComponentId = function() {
		that.componentId = NODE_COMPONENT_ID++;
	};
}
