/*eslint-env jquery*/
/*@author alexiacdura
 * Start of App.ﬁ
 * Initializes model, view and controller
 * 
 * The app follows a MVC pattern
 * This class is the Main class and will decide what will be executed first, meaning if scaled, the app can be separated into sections. 
 * 
 * Example of this:
 * Say this App's bigger purpose is a learning game for schildren. 
 * We could divide the app into several "mini" games (triangle challenge, Geography quiz challenge, Language challenge, etc)
 * In this class we would decide how all the objects to represented come into play and when providing a home page for the user selecting the "mini" game he wants to play first.
 * This means only one "mini game" at a time is available and when wanting to play another game the UI takes the user back to the home page where another game can be selected.
 * Having a complete game separated into little games that logic wise are all completely separeted from eachother. Easy to scale, easy to maintain and easy to test.
 * ﬁ
 */
$(function () {
    var model = new TriangleModel(),
        view = new TriangleView(model),
        controller = new TriangleController(model, view);
});