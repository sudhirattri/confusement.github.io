<script lang="ts">
    import { onMount } from "svelte";
    onMount(async () => {
        const bundle = await import("./bundle.js");
        // import * as bundle from "./bundle.js";
    });
</script>

<div class="canvas-container">
    <canvas id="webgpu-canvas" />
</div>
