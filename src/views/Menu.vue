<template>
    <div class="menu">
        <Header :text="''" :confirmation="true" />
        <button>Choose alcohols</button>
        <button>Choose softs</button>
        <label for="rate">Alcohol/Soft rate:</label>
        <input type="range" id="rate">
    </div>
</template>

<script>

    import Header from "../components/Header";

    export default {
        name: 'Menu',
        components: {
            Header
        }
    }


</script>
