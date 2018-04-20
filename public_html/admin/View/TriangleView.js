/*
 * @author alexiacdura
 * eslint-env jquery
 
 * View Class that will update the view when there is data in the model and events have been dispatched
 * This class represents components to be drawn or accesed in the HTML
 */
var TriangleView = function (model) {
    this.types = ["Equilateral", "Isosceles", "Scalene"];
    this.model = model;
    this.generateTriangleEvent = new Event(this);
    //cal to constructor
    this.init();

    var form;
    var triangle;
};

/*
 *Void function simulates constructor of the class will initiate and enable all components to be manipulated
 *
 */
TriangleView.prototype = {

    init: function () {
        this.createChildren()
                .setupHandlers()
                .enable();
    },

    /*
     *Return function that will return the View once all components have been accesed in the html
     *@returns {View} 
     */
    createChildren: function () {
        // cache the document object
        this.$container = $('.js-container');
        //all their childer needed
        this.$generateTriangleBtn = this.$container.find('.js-generate-triangle-button');
        this.$formDiv = this.$container.find('.form');
        this.$side1Input = this.$container.find('.js-side1-input');
        this.$side2Input = this.$container.find('.js-side2-input');
        this.$side3Input = this.$container.find('.js-side3-input');
        this.$emptyContainer = this.$container.find('.js-empty-container');
        this.$triangleContainer = this.$container.find('.js-triangle-container');
        this.$titleContainer = this.$container.find('.js-title-container');
        this.$pContainer = this.$container.find('.js-p-container');

        //accesed this way to be able to use the style property of the element and change it
        this.form = document.getElementById("form");
        this.triangle = document.getElementById("triangle");

        return this;
    },

    /*
     *Return function that will create the handler and execute 
     *@return {View}
     */
    setupHandlers: function () {

        this.generateTriangleBtnHandler = this.generateTriangleBtn.bind(this);

        /**
         Create Handlers from Event Dispatcher
         */
        this.generateTriangleHandler = this.generateTriangle.bind(this);
        this.clearTriangleInputHandler = this.clearTriangleInput.bind(this);

        return this;
    },

    /*
     *Return function that will abilitate onClick event for the button
     *@return {View}
     */
    enable: function () {

        this.$generateTriangleBtn.click(this.generateTriangleBtnHandler);

        /**
         * Event Dispatcher, events are being attached to model to send data and clear once button is clicked
         */
        this.model.generateTriangleEvent.attach(this.generateTriangleHandler);
        this.model.generateTriangleEvent.attach(this.clearTriangleInputHandler);
        return this;
    },

    /*
     *Void function that notifies generateTriangle Event in the model class of the values inputted by the user when clicked
     */
    generateTriangleBtn: function () {
        this.generateTriangleEvent.notify({
            side1: this.$side1Input.val(),
            side2: this.$side2Input.val(),
            side3: this.$side3Input.val()
        });
    },

    /*
     *Void function that will buildView
     */
    show: function () {
        this.buildView();
    },

    /*
     *Void function that manipulated data in the HTML and constructs the resulting view once user interatcs with UI
     */
    buildView: function () {
        //All variables needed for manipulation
        var triangleType = this.model.getType(); //getter from model class
        var html = "";
        var title = "";
        var p = "";
        var $emptyContainer = this.$emptyContainer;
        var $triangleContainer = this.$triangleContainer;
        var $titleContainer = this.$titleContainer;
        var $pContainer = this.$pContainer;
        $emptyContainer.html('');

        //check if inputs are not empty
        if (this.$side1Input.val() === "" || this.$side2Input.val() === "" || this.$side3Input.val() === "") {
            $emptyContainer.append('<label style="color:tomato;">Empty fields!</label>');
            //an automatic reload when fields are empty
            var delay = 400;
            setTimeout(function () {
                location.reload();
            }, delay);
        } else {
            //hide form view and show triangle result view
            this.hideForm();
            $triangleContainer.html('');
            $titleContainer.html('');
            $pContainer.html('');
            title = "Side one: " + this.$side1Input.val() + " | side two: " + this.$side2Input.val() + " | side three: " + this.$side3Input.val();
            $titleContainer.append(title);
            //switch results to construt proper view
            switch (triangleType) {
                case this.types[0]:
                    p = "When all sides are the same length triangle is: ";
                    html += '<div class="triangle equilateral slideInLeft"></div>';
                    break;
                case this.types[1]:
                    p = "When only two sides are the same length triangle is: ";
                    html += '<div class="triangle isosceles slideInRight"></div>';
                    break;
                case this.types[2]:
                    p = "When all sides are different lengths triangle is: ";
                    html += '<div class="triangle scalene slideInLeft"></div>';
                    break;
            }
            //append data in the hmtl
            $triangleContainer.append(html);
            $pContainer.append(p);
        }
    },

    /*
     *Void function that shows/hides form or triangle view
     */
    hideForm: function () {
        if (this.form.style.display === "none") {
            this.form.style.display = "block";
            this.triangle.style.display = "none";
        } else {
            this.form.style.display = "none";
            this.triangle.style.display = "block";
        }
    },

    /* -------------------- Handlers From Event Dispatcher ----------------- */

    /*
     *Void function clear input once button clicked
     */
    clearTriangleInput: function () {
        this.$side1Input.val('');
        this.$side2Input.val('');
        this.$side3Input.val('');
    },

    //call to the Model constructor once cleared
    generateTriangle: function () {
        this.show();
    }


};
