<!-- src/routes/+page.svelte -->

<script lang="ts">
    import type { PageServerData } from "./$types";
    import { base } from "$app/paths";
    export let data: PageServerData;
    console.log("DATA", data);
</script>

<svelte:head>
    <title>Archives - Index</title>
    <meta property="og:title" content="All Posts" />
</svelte:head>
<div class="container">
    <ul class="links">
        {#each data.posts as post}
            <div
                class="card w-full bg-base-100 rounded-sm mt-8 border-2 card-bordered"
            >
                <div class="flex">
                    <figure class="flex-none m-4 self-stretch">
                        <img
                            src={`${base}/about/cycling.webp`}
                            alt="Shoes"
                            class="posts-image"
                        />
                    </figure>
                    <div class="flex-1 w-64">
                        <div class="card-body">
                            <h2 class="card-title">{post.title}</h2>
                            <p>
                                {post.description}
                            </p>
                            <h5 class="last-updated-text">
                                Last updated : {new Date(
                                    post.date
                                ).toDateString()}
                            </h5>
                            <div class="card-actions justify-end">
                                <a href={`${base}/posts/${post.slug}`}>
                                    <button
                                        class="btn btn-ghost no-animation btn-outline"
                                        >Go To Post</button
                                    ></a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </ul>
</div>
