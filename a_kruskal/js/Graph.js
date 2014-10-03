// Graph class
// consists of edges and nodes
// provides several functions to modify the graph or to get useful information
function Graph() {
	var that = this;
	this.nodes = [];
	this.edges = [];

	// getEdgeIndex function
	// returns the index of a edge (identified by a kinetic line object) of the edges array
	function getEdgeIndex(kLine) {
		for (var i = 0; i < that.edges.length; i++) {
			if (that.edges[i].kLine == kLine) {
				return i;
			}
		}
		throw "edge not found";
	}

	// addEdge function
	// creates a new edge and inserts it into the graph
	this.addEdge = function(kLine, kCircleA, kCircleB, weight) {
		if (isNaN(weight)) {
			weight = 0;
		}
		var newEdge = new Edge(kLine, kCircleA, kCircleB, weight);
		that.edges.push(newEdge);
	};

	// deleteEdge function
	// deletes an edge identified by a kinetic line object
	this.deleteEdge = function(kLine) {
		try {
			that.edges.splice(getEdgeIndex(kLine), 1);
		} catch (e) {
			alert(e);
		}
	};

	// editEdge function
	// edits the weight of an edge identified by a kinetic line object
	this.editEdge = function(kLine, weight) {
		if (isNaN(weight)) {
			weight = 0;
		}
		try {
			that.edges[getEdgeIndex(kLine)].weight = weight;
		} catch (e) {
			alert(e);
		}
	};

	// getNodeIndex function
	// returns the index of a node (identified by a kinetic circle object) of the nodes array
	function getNodeIndex(kCircle) {
		for (var i = 0; i < that.nodes.length; i++) {
			if (that.nodes[i].kCircle == kCircle) {
				return i;
			}
		}
		throw "node not found";
	}
	
	// getNode function
	// returns the node object (identified by a kinetic circle object)
	this.getNode = function(kCircle) {
		return that.nodes[getNodeIndex(kCircle)];
	};

	// addNode function
	// creates a new node and inserts it into the graph
	this.addNode = function(kCircle) {
		var newNode = new Node(kCircle);
		that.nodes.push(newNode);
	};

	// deleteNode function
	// deletes a node identified by a kinetic circle object
	this.deleteNode = function(kCircle) {
		try {
			that.nodes.splice(getNodeIndex(kCircle), 1);
		} catch (e) {
			alert(e);
		}
	};

	// edgesOf function
	// returns an array of edge objects a node (identified by its kinetic line object) is connected with
	this.edgesOf = function(kCircle) {
		var eo = [];
		for (var i = 0; i < that.edges.length; i++) {
			var edge = that.edges[i];
			if (edge.kCircleA == kCircle || edge.kCircleB == kCircle) {
				eo.push(edge);
			}
		}
		return eo;
	};
}
