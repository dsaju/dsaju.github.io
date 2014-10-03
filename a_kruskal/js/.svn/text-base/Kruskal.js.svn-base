// KruskalStates indicates the different states of the alogrithm
var KruskalStates = {
	NEXT_EDGE : 0,
	CHECK_EDGE : 1,
	FINISHED : 2,
	NOT_STARTED : 3
};

// Kruskal class
// generates a minimum spanning tree of a graph
function Kruskal() {
	var that = this;
	this.graph;
	this.lastState = KruskalStates.NOT_STARTED;
	this.currentEdge;

	// nextStep function
	// this will alternately call the nextEdgeStep function and the checkEdgeStep function
	// (depending on the last state)
	// call this function to perform the minimum spanning tree step by step
	this.nextStep = function() {
		if (that.lastState == KruskalStates.CHECK_EDGE
				|| that.lastState == KruskalStates.NOT_STARTED) {
			that.lastState = KruskalStates.NEXT_EDGE;
			nextEdgeStep();
		} else if (that.lastState == KruskalStates.NEXT_EDGE) {
			that.lastState = KruskalStates.CHECK_EDGE;
			checkEdgeStep();
			if (!getEdgeWithLowestWeight()) {
				that.lastState = KruskalStates.FINISHED;
			}
		}
	};

	// nextEdgeStep function
	// marks the next edge the algorithm is considering (sets the edge's state to EdgeStates.CURRENT).
	function nextEdgeStep() {
		edge = getEdgeWithLowestWeight();
		edge.setState(EdgeStates.CURRENT);
		that.currentEdge = edge;
	}

	// checkEdgeStep function
	// checks if the current edge (marked by the nextEdgeStep function) is part of the minimum
	// spanning tree or not
	// if yes, the component ids of the newly connected components gets unified and the edge's state gets set
	// to EdgeStates.MST
	// if not, the edge's state gets set to EdgeStates.OUT
	function checkEdgeStep() {
		var edge = that.currentEdge;
		if (isCircle(edge)) {
			edge.setState(EdgeStates.OUT);
		} else {
			// change componentIds
			var oldComponentId = that.graph.getNode(edge.kCircleA).componentId;
			var newComponentId = that.graph.getNode(edge.kCircleB).componentId;
			for (var i = 0; i < that.graph.nodes.length; i++) {
				var node = that.graph.nodes[i];
				if (node.componentId == oldComponentId) {
					node.componentId = newComponentId;
				}
			}
			edge.setState(EdgeStates.MST);
		}
	}

	// getEdgeWithLowestWeight function
	// returns the edge with the lowest weight which has the state EdgeStates.UNSELECTED
	function getEdgeWithLowestWeight() {
		var lowest = {
			weight : Number.MAX_VALUE
		};
		for (var i = 0; i < that.graph.edges.length; i++) {
			var edge = that.graph.edges[i];
			if (edge.state == EdgeStates.UNSELECTED
					&& edge.weight < lowest.weight) {
				lowest = edge;
			}
		}
		if (lowest.weight == Number.MAX_VALUE) {
			return false;
		}
		return lowest;
	}

	// isCircle function
	// checks if the edge would perform a circle in the minimum spanning tree
	// there this function checks if the two nodes of this edge has got the same component id
	function isCircle(edge) {
		if (that.graph.getNode(edge.kCircleA).componentId == that.graph.getNode(edge.kCircleB).componentId) {
			return true;
		}
		return false;
	}

	// isFinished function
	// returns true, if the algorithm is finished
	function isFinished() {
		return that.lastState == KruskalStates.FINISHED;
	}
	
	// reset function
	// can be called to reset everything to the beginning
	// all edge states are set to EdgeStates.UNSELECTED
	// all nodes are getting a new unique component id
	// the kruskal algorithm state is set to KruskalStates.NOT_STARTED
	this.reset = function() {
		for (var i = 0; i < that.graph.nodes.length; i++) {
			that.graph.nodes[i].resetComponentId();
		}
		
		for (var i = 0; i < that.graph.edges.length; i++) {
			that.graph.edges[i].setState(EdgeStates.UNSELECTED);
		}
		
		that.lastState = KruskalStates.NOT_STARTED;
		
		delete that.currentEdge;
	};
	
	// deleteAll function
	// can be called to reset and delete both the graph and the kruskal state
	this.deleteAll = function() {
		that.lastState = KruskalStates.NOT_STARTED;
		delete that.currentEdge;
		that.graph.nodes = [];
		that.graph.edges = [];
	};

	// toString function
	// returns a string of the current state of the kruskal and the graph object
	// (only for debugging purposes)
	this.toString = function() {
		var string = "kruskal: lastState(" + that.lastState + ")<br/>\n";
		
		for (var i = 0; i < that.graph.edges.length; i++) {
			var e = this.graph.edges[i];
			string += "edge: weight(" + e.weight + "), nodeA(" + this.graph.getNode(e.kCircleA).label
					+ "), nodeB(" + this.graph.getNode(e.kCircleB).label + "), state(" + e.state
					+ ")<br/>\n";
		}

		for (var i = 0; i < that.graph.nodes.length; i++) {
			var n = that.graph.nodes[i];
			string += "node: label(" + n.label + "), componentId("
					+ n.componentId + ")<br/>\n";
		}
		
		return string;
	};
}
