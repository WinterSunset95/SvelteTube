
import { Server } from 'socket.io'

let globalChat;

export const wserver = (server) => {
	const io = new Server(server)
	io.on('connect', (socket) => {

		socket.emit('serverMessage', "Connected to server")

		socket.on('clientMessage', (data) => {
			if (globalChat) {
				globalChat.push(data)
			} else {
				globalChat = [data]
			}
			if (globalChat.length > 100) {
				globalChat.shift()
			}
			socket.emit('newMessage', globalChat)
		})

		function constantlyEmits() {
			if (globalChat) {
				socket.emit('newMessage', globalChat)
			}
		}

		setInterval(constantlyEmits, 1000)

		socket.on('checkUsername', (username) => {
			if (globalChat) {
				const taken = globalChat.some((message) => message.name === username)
				socket.emit('usernameChecked', taken)
			} else {
				socket.emit('usernameChecked', false)
			}
		})

	})
}
