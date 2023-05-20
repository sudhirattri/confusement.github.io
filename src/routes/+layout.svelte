<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import * as config from "$lib/config";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let darkThemeCheckbox: boolean = false;
  onMount(() => {
    themeChange(false);
    let selectedTheme = document.documentElement.getAttribute("data-theme");
    // 👆 false parameter is required for svelte
    if (selectedTheme == "light") darkThemeCheckbox = true;
    else darkThemeCheckbox = false;
  });
</script>

<div>
  <Header />
  <!-- Contents -->
  <div class="md:w-4/6 md:mx-auto my-8">
    <slot />
  </div>

  <Footer />
</div>
