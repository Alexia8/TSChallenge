/* eslint-env jqueryﬁ
 * @author alexiacdura
 * Class that will hold click events that don't need to be executed directly inside the platform's architecture.
 *ﬁOnly click events that don't interact with the view and need to be kept separate from the logic.
 * Some examples of this:
 * 
 * 1.Reloading page
 * 2.Accesing links that are not part of the game itself (social media, highlights, ads)
 * 3.Separted click events that are only available in specifici moments of the game
 *
 */
$(document).ready(function () {

    $('#js-restart-btn').click(function () {
        location.reload();
    });

});
