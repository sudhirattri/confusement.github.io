<script lang="ts">
  import "../../app.css";
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

<svelte:head>
  <title>About me - sudhirattri.com</title>
  <meta
    name="Portfolio website - sudhirattri.com"
    content="Sudhir Attri, personal website"
  />
</svelte:head>
<div>
  <Header />
  <!-- Contents -->
  <div class="md:w-4/6 w-5/6 mx-auto my-8 pt-16">
    <slot />
  </div>

  <Footer />
</div>
