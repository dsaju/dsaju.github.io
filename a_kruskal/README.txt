KRUSKAL APPLICATION
-------------------

1. Introduction 

The Kruskal application is implemented using HTML5 and Javascript. 
The user can create his own graph for the simulation or use the pre-loaded graph on the webpage for the same.
Launch the main.html for viewing the application.

2. How to see the algorithm in action ?

Working with Pre-loaded Graph for the simulation
------------------------------------------------

1. On the webpage you will see a graph to study the working of the Kruskal algorithm. 
2. Click on the button "Simulate Kruskal Algorithm" to start the simulation.
3. The edge with minimum weight will be highlighted in yellow. The yellow color indicates the current candidate edge with minimum weight.
4. Click "Next-Step" to proceed. If the candidate edge fulfills the criteria of Kruskal algorithm e.g Non creation of closed loops, it will be selected by turning to green colour.
5. If the candidate edge cause a closed loop and does not fulfill the criteria of Kruskal algorithm it will turn white indicating a rejected edge for minimum spanning tree .  
6. At the end of the algorithm you will see a message displayed "finished". This indicates the end of simulation . 


Customize/Create your own Graph for the simulation
------------------------------------------------------

The user can can use the buttons provided for modifying the graph or creating a new graph . 
The following points will explain the usage of button provided.

1. "Add a node" - Use the button to add new nodes to the existing graph  or your own new graph .
    After clicking on the button, just click on the canvas to add desired number of nodes . 

2. "Remove a node" - Use the button to remove an existing node on the graph . 
    After clicking on the button , click on the desired node to be removed.
 
3. "Add an edge" - Use the button to add edges to the graph.
    After clicking on the button , user need to click on two nodes i.e the starting and destination node for the edge .
    The user will be presented with a pop-up to provide the weight of new edge.

4. "Remove an edge" - Use the button to remove an edge from the graph.
    After clicking on the button , click on the desired edge to be removed .

5. "Clear" - Use this button to clear the canvas from any existing graph or items .

6. "Reset"- Use this button to reset the algorithm and remove all selections made during the running of algorithm.

7. "Pre-build Graph" - A default graph is presented to the user for simulating an algorithm .
   Clicking on this button redraws the graph .

8. "Simulate Kruskal Algorithm" - This button is used for starting the simulation .

9. "Next Step" - This button is used to proceed with simulation in steps . 

10. Modifying the weight - Click on the edge weight text to modify the weight of the edge . 


 
