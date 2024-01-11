<script>
export let comment
export let videoId

let replies = []
async function getReplies(continuation) {
	let response = await fetch(`https://invidious.lunar.icu/api/v1/comments/${videoId}?continuation=${continuation}`)
	let data = await response.json()
	replies = data.comments
}

$: console.table(replies)

</script>

<div class="replies">
	{#if replies.length > 0}
		{#each replies as reply}
			<div class="reply">
				<div class="reply_author">
					<img src={reply.authorThumbnails[0].url} alt={reply.author} />
					<div class="reply_meta">
						<div class="author_name">{reply.author}</div>
						<div>{reply.publishedText}</div>
					</div>
				</div>
				<div class="reply_text">
					{@html reply.contentHtml}
				</div>
			</div>
		{/each}
	{:else}
		<span class="see_replies" on:click={getReplies(comment.replies.continuation)}>View {comment.replies.replyCount} replies</span>
	{/if}
</div>

<style>
	.see_replies {
		cursor: pointer;
		color: var(--highlight);
	}

	.replies {
		margin-left: 2rem;
	}

	.reply {
		margin-bottom: 1rem;
	}

	.reply_author {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.reply_author > img {
		width: 2rem;
		height: 2rem;
		border-radius: 10rem;
	}

	.reply_meta {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
	}
</style>
