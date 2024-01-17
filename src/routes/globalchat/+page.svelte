<script lang="ts">
import type { GlobalChat } from '$lib/types';
import { io } from 'socket.io-client';

let socket = io()

let readyForAction = false;
let userName: string;
let userNameTaken = true;
let serverMessage = 'not connected'
let recievedMessage: GlobalChat[];
let userInput = '';

socket.on('connect', () => {
	console.log('connected')
})

socket.on('serverMessage', (msg) => {
	console.log(msg)
	serverMessage = msg
})

socket.on('newMessage', (msg) => {
	recievedMessage = msg
})

socket.on('usernameChecked', (msg:boolean) => {
	userNameTaken = msg
})

function sendMessage() {
	if (userInput == '') return
	socket.emit('clientMessage', {name: userName, message: userInput})
	userInput = ''
}

//function reconnetSocket() {
//	socket.emit('reconnect', 'to server')
//}
//
//setInterval(reconnetSocket, 1000)

$: userName && socket.emit('checkUsername', userName)

</script>

<div class="container">
	<div class="header">
		<h2>GlobalChat (not persistent)</h2>
		<p>{serverMessage}</p>
	</div>
	{#if readyForAction}
		<ul class="messages">
			{#if recievedMessage}
				{#each recievedMessage.reverse() as message}
					<li><span>{message.name}</span> - {message.message}</li>
				{/each}
			{/if}
		</ul>
		<form on:submit|preventDefault={sendMessage} class="input">
			<input bind:value={userInput} type="text" placeholder="Enter message">
			<input type="submit" value="Send" />
		</form>
	{:else}
		<div class="messages"></div>
		<form on:submit|preventDefault={() => readyForAction = true} class="input">
			<input bind:value={userName} type="text" placeholder="Enter username">
			{#if !userNameTaken}
				<input type="submit" value="Enter" />
			{/if}
		</form>
		<p class="red">{userNameTaken ? "Username taken" : "Username available"}</p>
	{/if}
</div>

<style>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
}
.header {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(var(--primary-rgb), 0.5);
}
.messages {
	flex-grow: 1;
	overflow-y: scroll;
	width: 100%;
	display: flex;
	gap: 0.5rem;
	flex-direction: column-reverse;
	align-items: flex-start;
	justify-content: flex-start;
}
.messages > li {
	padding: 0.5rem;
}
.messages > li > span {
	font-weight: bold;
	color: var(--highlight);
}
.input {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: rgba(var(--primary-rgb), 0.5);
	width: 100%;
}
.input > input[type="text"] {
	flex-grow: 1;
	padding: 0.5rem;
	border: 1px solid var(--secondary);
	border-radius: 0.5rem;
	background: none;
	margin: 0.5rem;
	color: var(--text);
}
.input > input[type="submit"] {
	padding: 0.5rem;
	border-radius: 0.5rem;
	border: none;
	color: var(--highlight);
	background: var(--secondary);
	margin: 0.5rem;
}
</style>
