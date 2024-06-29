<script>
    import { makeID } from "./utils";
    let { add } = $props();
    let value = $state("");

    function handleSubmit(event) {
        event.preventDefault();
        let newText = value.trim();
        if (newText) {
            add({ id: makeID(), text: newText });
            value = "";
        }
    }
</script>

<form onsubmit={handleSubmit} class="flex gap-2">
    <input
        bind:value
        type="text"
        placeholder="Add a new task..."
        class="px-4 py-2 border rounded-md text-sm flex-1"
    />
    <button class="px-4 py-2 bg-[#ff3e00] text-white rounded-md text-sm font-medium"> Add </button>
</form>
