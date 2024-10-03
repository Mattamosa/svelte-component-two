<script>
  import SearchBar from './SearchBar.svelte';
</script>

<!-- COMMENT /UNCOMMENT DIFFERENT COMPONENT VARIATIONS -->
<main class="p-6 space-y-6">
  <!-- EMPTY VARIATION W/ MICROPOHONE -->
  <SearchBar placeholder="Search" buttonText="Cancel" state="empty" />
  <!-- FOCUSED VARIATION -->
  <SearchBar placeholder="Search" buttonText="Cancel" state="focused" />
  <!-- INPUT VARIATION W/ "X"-->
  <SearchBar placeholder="Search" buttonText="Cancel" state="input" value="Colorado" />
</main>