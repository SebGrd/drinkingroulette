<template>
    <div class="menu">
        <Header/>

        <div class="container">

            <div class="inner-menu">
                <button class="btn">Choose alcohols</button>
                <button class="btn">Choose softs</button>
            </div>

            <label>Alcohol/Soft rate: {{alcoholRate}}/{{softRate}}</label>
            <InputRange min="10" max="100" value="75"
                        v-on:alcoholRateChange="updateAlcoholRate"
                        v-on:softRateChange="updateSoftRate"
            />




            <button class="btn btn--big">Play</button>
        </div>

    </div>
</template>

<script>

    import Header from "../components/Header";
    import InputRange from "../components/InputRange";

    export default {
        name: 'Menu',
        components: {
            Header,
            InputRange
        },
        data(){
            return {
                alcoholRate: 0,
                softRate: 0
            }
        },
        methods: {
            updateAlcoholRate(rate) {
                this.alcoholRate = rate
            },
            updateSoftRate(rate) {
                this.softRate = rate

            }
        },
    }

</script>


<style lang="scss" scoped>

    Header{
        margin-bottom: 20px;
    }

    .inner-menu{
        margin-bottom: 20px;
    }

    label{
        font-weight: 300;
        font-size: 20px;
        padding-left: 4px;
    }
    button{
        display: block;
        width: 100%;
        margin-bottom: 10px;
    }



</style>
