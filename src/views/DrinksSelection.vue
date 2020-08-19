<template>
  <div>
    <Header text="Cancel" confirmation="true"/>

    <div class="container">
      <h1>{{pageTitle}}</h1>
      <AddDrink class="add-drink" :type="type"
                @add-alcohol="addAlcohol"
                @add-soft="addSoft"/>

      <ul v-if="type === 'soft'">
        <DrinkItem v-for="soft in softsList" :key="soft.id"
                   :drink="soft"
                   @delete-drink="deleteSoft"/>
      </ul>

      <ul v-if="type === 'alcohol'">
        <DrinkItem v-for="alcohol in alcoholsList" :key="alcohol.id"
                   :drink="alcohol"
                   @delete-drink="deleteAlcohol"/>
      </ul>

      <transition name="fade" appear>
        <button class="btn btn--big" @click="save">Save</button>
      </transition>
    </div>

  </div>
</template>

<script>
    import Header from "../components/Header";
    import AddDrink from "../components/AddDrink";
    import DrinkItem from "../components/DrinkItem";
    import * as uuid from "uuid";

    export default {
        name: "DrinksSelection",
        components: {
            Header,
            AddDrink,
            DrinkItem
        },
        props: ['type', 'alcohols', 'softs'],
        data() {
            return {
                alcoholsList: [],
                softsList: [],
                deleteList: []
            }
        },
        created() {
            if (!this.type) {
                this.$router.push({path: '/menu'})
            }
        },
        mounted() {
            this.alcoholsList = this.alcohols
            this.softsList = this.softs

        },
        computed: {
            pageTitle: function () {
                if (this.type) {
                    return this.type.toUpperCase() + 'S'
                } else {
                    return 'Loading'
                }
            }
        },
        methods: {
            addAlcohol: function (name) {
                this.alcoholsList = [{id: uuid.v4(), name}, ...this.alcoholsList]
            },
            addSoft: function (name) {
                this.softsList = [{id: uuid.v4(), name}, ...this.softsList]
            },
            deleteAlcohol(id) {
                let index = this.alcoholsList.findIndex(alcohol => alcohol.id === id)
                this.alcoholsList.splice(index, 1)
            },
            deleteSoft(id) {
                let array = this.softsList
                let index = array.findIndex(soft => soft.id === id)
                array.splice(index, 1)
                this.softsList = array
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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
    transition-delay: 0.2s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  h1 {
    text-align: center;
    margin-top: 0;
  }

  .add-drink {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    position: fixed;
    right: 15px;
    bottom: 20px;
    left: 15px;
    font-size: 36px;
    font-weight: 400;
    width: calc(100% - 30px);
    box-shadow: 0 0 10px #cb5492;

  }

</style>