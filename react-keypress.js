var Keypress = require("./bower_components/Keypress/keypress.js");
var elements = [];

module.exports = function(keys, handler) {
	if (!keys || !handler) return;

	return function(e) {
		var el = e.target;

		//Check for no register the same element multiple times
		if (elements.indexOf(el) >= 0) return;

		var listener = new Keypress.Listener(el);

		elements.push(el);
		listener.register_combo({
			"keys": keys,
			"on_keyup": handler
		});
	};
};