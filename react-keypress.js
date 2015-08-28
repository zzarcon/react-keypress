var Keypress = require("./bower_components/Keypress/keypress.js");

module.exports = function(keys, handler) {
	if (!keys || !handler) return;

	//TODO: Pass Dom element
	var listener = new Keypress.Listener();

	listener.register_combo({
		"keys": keys,
		"on_keyup": handler
	});
};