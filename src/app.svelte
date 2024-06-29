<script>
    import Input from "./input.svelte";
    import Item from "./item.svelte";
    import { makeStorage } from "./utils";

    let storage = makeStorage("todos");
    let todos = $state(storage.get() ?? []);

    $effect(() => {
        storage.set(todos);
    });

    function add(newTodo) {
        todos.push(newTodo);
    }

    function remove(id) {
        todos = todos.filter((todo) => todo.id !== id);
    }

    function edit(updatedTodo) {
        let index = todos.findIndex((todo) => todo.id === updatedTodo.id);
        todos[index] = updatedTodo;
    }
</script>

<div class="pt-16 max-w-sm mx-auto grid gap-6">
    <h1 class="font-bold text-3xl pb-2">Todo Demo Svelte</h1>
    <Input {add} />
    <ul class="grid gap-3">
        {#each todos as todo (todo.id)}
            <Item {todo} {remove} {edit} />
        {/each}
    </ul>
</div>
