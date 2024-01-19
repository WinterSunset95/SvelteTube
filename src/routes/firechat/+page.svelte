<script lang="ts">
export let data: any;
import type { GlobalChat } from '$lib/types';
import { onMount } from 'svelte';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, push, set, get } from 'firebase/database';

const app = initializeApp(data)
const db = getDatabase(app);

let readyForAction = false;
let recievedMessage: GlobalChat[];
let userlist: [{name: string; pass: string}];
let userInput = '';

let userName = '';
let userNameTaken = false;
let passWord = '';

const messagesRef = ref(db, 'globalchat');
const usersRef = ref(db, "userlist")

onValue(messagesRef, (snapshot) => {
	recievedMessage = snapshot.val();
});

onValue(usersRef, (snapshot) => {
	userlist = snapshot.val()
})

function sendMessage() {
	set(ref(db, `globalchat/${recievedMessage.length}`), {
		"message": userInput,
		"name": userName
	})
	userInput = ''
}

function checkUsername() {
	if (userlist) {
		userNameTaken = userlist.some((user) => user.name === userName)
	}
}

function loginOrSignup() {
	if (userNameTaken && userlist) {
		userlist.map(user => {
			if (user.name == userName && user.pass == passWord) {
				readyForAction = true
				alert(`Welcome back ${userName}`)
			}
		})
		if (!readyForAction) {
			alert('Wrong Password')
		}
	} else if (!userNameTaken && userName != "" && passWord != "") {
		set(ref(db, `userlist/${userlist.length}`), {
			"name": userName,
			"pass": passWord
		})
		alert(`Welcome aboard ${userName}`)
		readyForAction = true
	} else {
		alert('Both fields need to be filled up')
	}
}

$: userName && checkUsername()

onMount(() => {
	const messagesRef = ref(db, 'globalchat');
	get(messagesRef).then((snapshot) => {
		recievedMessage = snapshot.val();
	})
	.catch((err) => {
		console.table(err)
	})
	const usersRef = ref(db, 'userlist');
	get(usersRef).then((snapshot) => {
		userlist = snapshot.val()
	})
	.catch((err) => {
		console.table(err)
	})
})

</script>

<svelte:head>
	<title>FireChat - Chat based on firebase</title>
	<meta name="description" content="Built on the firebase realtime database and sveltekit">
</svelte:head>

<div class="container">
	<div class="header">
		<h2>FireChat</h2>
		<p>Realtime database from firebase</p>
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
		<form on:submit|preventDefault={loginOrSignup} class="input">
			<input bind:value={userName} type="text" placeholder="Enter username" required>
			<input bind:value={passWord} type="text" placeholder="password" required>
			<input type="submit" value="Enter" />
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
