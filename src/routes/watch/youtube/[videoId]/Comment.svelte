<script>
export let comment
export let videoId
import Replies from "./Replies.svelte";
</script>


<div class="comment">
	<div class="comment_author">
		<img src={comment.authorThumbnails[0].url} alt={comment.author} />
		<div class="author_meta">
			<span class="author_name">{comment.author}</span>
			<span>{comment.publishedText}</span>
		</div>
	</div>
	<div class="comment_text">
		{@html comment.contentHtml}
	</div>
	<div class="replies">
		{#if comment.replies ? comment.replies.replyCount > 0 : false}
			<Replies videoId={videoId} comment={comment} />
		{/if}
	</div>
</div>

<style>
	.comment {
		margin-bottom: 1rem;
	}

	.comment_author {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.comment_author > img {
		width: 2rem;
		height: 2rem;
		border-radius: 10rem;
	}

	.author_meta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 1rem;
	}

</style>
