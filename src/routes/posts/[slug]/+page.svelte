<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<svelte:head>
    <title>Archives - testing site</title>
    <meta property="og:title" content={data.post.title} />
</svelte:head>
<div>
    <article>
        <header>
            <!-- <h1>{data.post.title}</h1> -->
        </header>
        <svelte:component this={data.component} />
    </article>
</div>
