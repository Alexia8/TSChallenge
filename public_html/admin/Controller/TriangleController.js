/*
 * @author alexiacdura
 * eslint-env jqueryﬁﬁ
 
 * Controller class that sends input from user to the model class
 * Interacts with the view once triangle has been generated
 */
var TriangleController = function (model, view) {
    this.model = model;
    this.view = view;
    //call to constructor
    this.init();
};

TriangleController.prototype = {

    /*
     *Void function simulates constructor of the class that will initialize class and execute handlers
     *@see setupHandlers()
     *@see outputView()
     */

    init: function () {
        this.setupHandlers()
            .outputView();
    },
    
    /*
     * Return function that will initialize the generateTriangleHandler and execute sendTriangleToModel()
     * Keeping hadlers separated makes it easy to add any new handler needed if a new feature must be implemented.
     * @see sendTriangleToModel()
     * @returns {Controller} 
     */

    setupHandlers: function () {
        this.generateTriangleHandler = this.sendTriangleToModel.bind(this);
        return this;
    },

    /*
     * Return function that will attach handler to the view
     * @see TriangleView.generateTriangle
     * @returns {Controller} 
     */

    outputView: function () {
        this.view.generateTriangleEvent.attach(this.generateTriangleHandler);
        return this;
    },

    /*
     * Void function that will execute generateTriangle() in the model class
     * Sends input provided by the user to the model
     * @see TriangleModel.generateTriangle()
     */
    sendTriangleToModel: function (sender, args) {
        this.model.generateTriangle(args.side1,args.side2,args.side3);
    }
};