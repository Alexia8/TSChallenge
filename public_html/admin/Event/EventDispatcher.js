/*eslint-env jqueryﬁ
 * @author alexiacdura
 * Class that listens when an invent has been dispatched
 * @param {type} sender
 * @returns {Event}
 */
var Event = function (sender) {
    this._sender = sender;
    this._listeners = [];
};

Event.prototype = {

    /*
     * Function that attaches a listener to the event
     * @param {Function} listener 
     */
    attach: function (listener) {
        this._listeners.push(listener);
    },

    /*
     * Function that notifies listeners with arguments and sender
     * @param {Arguments} args 
     */
    notify: function (args) {
        for (var i = 0; i < this._listeners.length; i += 1) {
            this._listeners[i](this._sender, args);
        }
    }

};