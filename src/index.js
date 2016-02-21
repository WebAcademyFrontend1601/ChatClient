var WS;
var wsAddr = 'ws://192.168.1.64:8080';

var nameBar, msgBar, sendBtn, messageList;

window.onload = main;

function main() {
	nameBar = document.querySelector('#username');
	msgBar = document.querySelector('#msg');
	sendBtn = document.querySelector('#send');
	messageList = document.querySelector('#messages');

	sendBtn.onclick = function(e) {
		WS.send(
			JSON.stringify({
				userName: nameBar.value,
				message: msgBar.value
			})
		);
	};

	WS = new WebSocket(wsAddr);

	WS.onopen = function(e) {
		sendBtn.disabled = false;
	};

	WS.onmessage = function(e) {
		var msg = JSON.parse(e.data);

		messageList.innerHTML = '<li>' +
	          '<div class="name">' + msg.userName + '</div>' +
	          '<div class="msg">' + msg.message + '</div>' +
	        '</li>' + messageList.innerHTML;

	};

}
