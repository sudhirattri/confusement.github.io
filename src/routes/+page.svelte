<script lang="ts">
    // import type { PageServerData } from "./$types";
    import { base } from "$app/paths";
    // export let data: PageServerData;
</script>

<div class="hero min-h-fit h-72 bg-base-200 mb-8">
    <div class="hero-content text-left">
        <div class="max-w-lg">
            <h1 class="text-3xl font-bold">Sudhir Attri</h1>
            <p class="py-1">
                A web developer with a passion in art, computers science and
                mathematics. Familiar with technologies for semantic web, web
                design UI/Server, neural nets and much more.
                <br />
            </p>
            <div class="flex gap-10 mt-4 flex-wrap">
                <div class="">
                    <a href={`${base}/about/`}>
                        <button class="btn btn-ghost no-animation btn-outline"
                            >About Me</button
                        ></a
                    >
                </div>
                <div class="">
                    <a href={`${base}/portfolio/`}>
                        <button class="btn btn-ghost no-animation btn-outline"
                            >Portfolio</button
                        ></a
                    >
                </div>
                <div class="">
                    <a href={`${base}/showcase/`}>
                        <button class="btn btn-ghost no-animation btn-outline"
                            >Projects Showcase</button
                        ></a
                    >
                </div>
            </div>
        </div>
    </div>
</div>

<h3>Quick Links</h3>
<ul>
    <li><a href="https://github.com/sudhirattri/dotfiles">Dotfiles repo</a></li>
    <li><a href="https://github.com/sudhirattri/">Github Page</a></li>
</ul>
