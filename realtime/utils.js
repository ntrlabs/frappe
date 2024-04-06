<<<<<<< HEAD
const request = require("superagent");
=======
const { get_conf } = require("../node_utils");
const conf = get_conf();
>>>>>>> 266b2797aa (refactor: use Fetch API instead of superagent)

function get_url(socket, path) {
	if (!path) {
		path = "";
	}
	return socket.request.headers.origin + path;
}

module.exports = {
	get_url,
};
