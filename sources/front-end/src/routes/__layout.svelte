<script>
  import '../app.css';
</script>

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
