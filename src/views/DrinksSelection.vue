<template>
    <div>
        <Header text="Cancel" confirmation="true"/>

        <h1>Choose {{type}}</h1>
    </div>
</template>

<script>
    import Header from "../components/Header";

    export default {
        name: "DrinksSelection",
        components: {
          Header
        },
        props: ['type'],
        data() {
            return {

            }
        },
    }
</script>

<style scoped>

</style>