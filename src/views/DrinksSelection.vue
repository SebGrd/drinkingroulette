<template>
    <div>
        <Header text="Cancel" confirmation="true"/>

        <div class="container">
            <h1>{{pageTitle}}</h1>
            <AddDrink :type="type" @add-alcohol="addAlcohol" @add-soft="addSoft"/>

            <ul v-if="type === 'soft'">
                <li v-for="soft in softsList" :key="soft.id">{{soft.name}}</li>
            </ul>

            <ul v-if="type === 'alcohol'">
                <li v-for="alcohol in alcoholsList" :key="alcohol.id">{{alcohol.name}}</li>
            </ul>

            <button @click="save">Save</button>
        </div>


    </div>
</template>

<script>
    import Header from "../components/Header";
    import AddDrink from "../components/AddDrink";
    import * as uuid from "uuid";

    export default {
        name: "DrinksSelection",
        components: {
            Header,
            AddDrink
        },
        props: ['type', 'alcohols', 'softs'],
        data() {
            return {
                alcoholsList: [],
                softsList: []
            }
        },
        mounted() {
            this.alcoholsList = this.alcohols
            this.softsList = this.softs
        },
        computed: {
            pageTitle: function () {
                return this.type.toUpperCase() + 'S'
            }
        },
        methods: {
            addAlcohol: function (name) {
                this.alcoholsList = [{id: uuid.v4(), name}, ...this.alcoholsList]
            },
            addSoft: function (name) {
                this.softsList = [{id: uuid.v4(), name}, ...this.softsList]
            },
            save() {
                if (this.type === 'alcohol') this.$emit('save-alcohols', this.alcoholsList)
                if (this.type === 'soft') this.$emit('save-softs', this.softsList)
                this.$router.push({path: '/menu'})
            }
        }
    }
</script>

<style lang="scss" scoped>

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        li {

        }
    }

</style>