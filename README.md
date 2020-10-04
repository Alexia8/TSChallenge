# TSChallenge
Triangle Challenge. JavaScript MVC architecture

INTRO -> 
Web application with Javascript that tells you if a triangle is Equilateral, Iscoseles or Scalene. 
The purpose of this acrhitecture is to simulate a bigger and more complex system if it had to scail with JavaScript as a requirement for the challenge.

DESIGN/UI -> 
The Design structure that has been implemented is very intuitive and clean. 
The animated.css class is being used to faciliate with the animations and give a feel of interaction and movement to the user as if it were a game.
It provides the user with 3 inputs and a button to execute the program. 
Once the user has played he is provided a button to restart ('play again'). 

Time has been dedicated to the styling and animations as it is a Frontend challenge.

ARCHITECTURE -> 
An MVC design pattern has been followed for this challenge to simulate a purpose for a bigger system. 
MVC help keep the project maintainable and scailable keeping the logic separated from the view making the project also very testable. 
The project has been treated as if it were a learning game for children that in the future could contain different learning challenges.

The model for this challenge represents the Traingle object providing the neccesary data to be manipulated.
The View represent the components in the html file and interacts with it providing the user with a result.
The Controller interacts with this two classes providing a clean structure to create events that will be executed in the model/view. 

TECHNOLOGIES -> 
JavaScript and Jquery has been used for this project. 
Jquery helps writing less and clean code for interacting with elemens in the html.
native JavaScipt has been used simulating an OOP way of coding. 

ERROR CASES/Possible Unit tests -> 
-Make sure the user only inputs numbers (if he inputs something that is not number it will read it is empty)
-Make sure the user inputs all three fields
-Clean args by restarting game
-If the user inputs , or . both are validated

DOCUMENTATION -> 
Complete documentation has been provided in the code the help understand how the architecture works and readable code has been provided by using logic naming for classes, variables and functions.

Please view "index.html" to see Web & Design




