<template>
    <div class="add-drink">
        <form @submit.prevent="addDrink('test')">

            <input type="text"  v-model="name" :placeholder="'Choose ' + type">
            <button type="submit">+</button>
        </form>
    </div>
</template>

<script>

    export default {
        name: "AddDrink",
        props: ['type'],
        data() {
            return {
                name: ''
            }
        },
        methods: {
            addDrink() {
                if (this.type === 'alcohol') this.$emit('add-alcohol', this.name)
                if (this.type === 'soft') this.$emit('add-soft', this.name)
                this.name = ''
            }
        }
    }
</script>

<style lang="scss" scoped>

    form{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        input{
            height: 48px;
            width: 100%;
            margin-right: 8px;
            background: #cb5492;
            border: none;
            font-family: Nunito, sans-serif;
            font-size: 24px;
            color: white;
            outline: none;
            border-radius: 50px;
            padding: 8px 20px;
            &::placeholder{
                color: rgba(255, 255, 255, 0.5);
                font-weight: 400;
                line-height: 84.9%;
            }
        }
        button{
            flex-shrink: 0;
            height: 48px;
            width: 48px;
            background: #cb5492;
            border: none;
            font-family: Nunito, sans-serif;
            color: white;
            border-radius: 50%;
            line-height: 0;
            font-size: 43px;
            padding: 10px;
        }
    }

</style>