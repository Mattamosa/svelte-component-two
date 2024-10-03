<script>
  import CancelButton from './Cancel.svelte';

  export let placeholder = "Search"; 
  export let buttonText = "Cancel";
  export let state = "empty"; // Default state is empty
  export let value = ""; // For the input text when the state is "input"

  // Input value
  let inputValue = value;

  // Function to clear the input
  function clearInput() {
      inputValue = ""; // Reset input value
  }

  // Classes for input field depending on the state
  let inputClass = 
    state === "empty"
      ? "text-gray-400 text-xl bg-gray-100"
      : state === "focused"
      ? "text-black border-gray-300 text-xl bg-gray-100"
      : "text-black border-gray-300 text-xl bg-gray-100";
</script>

<div class="flex items-center w-full max-w-md">
  <section class="flex items-center flex-grow p-2 border rounded-lg shadow-md relative bg-gray-100">
    <!-- Search SVG -->
    <div class="pl-3">
      <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="h-6 w-6 text-gray-500">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <title>search</title>
          <desc>Created with Sketch Beta.</desc>
          <defs></defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Icon-Set" transform="translate(-256.000000, -1139.000000)" fill="#000000">
              <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z" id="search"></path>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <!-- Input Field -->
    <div class="flex-grow">
      <input 
        type="text" 
        class={`w-full px-4 py-2 rounded-full outline-none ${inputClass}`} 
        placeholder={placeholder} 
        bind:value={inputValue} 
      />
    </div>

    <!-- "X" for clearing input -->
    {#if state === "input" && inputValue !== ""}
      <div class="pr-3">
        <button on:click={clearInput}>
          <svg fill="#000000" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-500 hover:text-black">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"></path>
            </g>
          </svg>
        </button>
      </div>
    {/if}

    <!-- Microphone Icon (shown only in "empty" state) -->
    {#if state === "empty"}
      <div class="pr-3">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C9.79086 1 8 2.79086 8 5V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V5C16 2.79086 14.2091 1 12 1ZM10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V5Z" fill="#000000"></path>
          <path d="M5 9C5.55228 9 6 9.44771 6 10V12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12V10C18 9.44771 18.4477 9 19 9C19.5523 9 20 9.44771 20 10V12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.3938 18.9199 14.7518 19.717 12.9981 19.9375C12.9993 19.9582 13 19.979 13 20V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20C11 19.979 11.0006 19.9582 11.0019 19.9375C9.2482 19.717 7.60623 18.9199 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12V10C4 9.44771 4.44772 9 5 9Z" fill="#000000"></path>
        </svg>
      </div>
    {/if}

  </section>

  <!-- Cancel Button -->
  {#if state === "input" || state === "focused"}
    <CancelButton text={buttonText} />
  {/if}
</div>
