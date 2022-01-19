<script>
  import Nav from '$lib/controls/Nav.svelte';
  import '../app.css';
</script>


<Nav />
<main>
  <slot />
</main>

<style>
  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-width: 100vw;
    min-height: 100vh;
  }
</style>
