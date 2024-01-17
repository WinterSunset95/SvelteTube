
import { Server } from 'socket.io'
import type { GlobalChat } from '$lib/types'

let globalChat: GlobalChat[];

export const wserver = {
	name: 'wserver',
	configureServer(server:any) {
		const io = new Server(server.httpServer)
		io.on('connect', (socket) => {

			socket.emit('serverMessage', "Connected to server")

			socket.on('clientMessage', (data:GlobalChat) => {
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

			socket.on('checkUsername', (username: string) => {
				if (globalChat) {
					const taken = globalChat.some((message) => message.name === username)
					socket.emit('usernameChecked', taken)
				} else {
					socket.emit('usernameChecked', false)
				}
			})

		})
	}
}
