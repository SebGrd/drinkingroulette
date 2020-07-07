<template>
    <div class="menu">
        <Header/>

        <div class="container">

            <div class="inner-menu">
                <router-link  class="btn link"
                        :to="{name: 'DrinksSelection', params: { type: 'alcohols' } }">Choose alcohols
                </router-link>
                <router-link  class="btn link"
                        :to="{name: 'DrinksSelection', params: { type: 'softs' } }">Choose softs
                </router-link>
            </div>

            <label>Alcohol/Soft rate:</label>
            <InputRange
                    min="10" max="100" value="75"
                    v-on:alcoholRateChange="updateAlcoholRate"
                    v-on:softRateChange="updateSoftRate"/>
            <div class="display-rate">
                <span>{{alcoholRate}}%</span>
                <span>{{softRate}}%</span>
            </div>

            <button class="btn btn--big btn-play"></button>
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
        data() {
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
            },
        },
    }

</script>


<style lang="scss" scoped>

    Header {
        margin-bottom: 20px;
    }

    .inner-menu {
        margin-bottom: 20px;
    }

    label {
        font-weight: 300;
        font-size: 20px;
        padding-left: 4px;
    }


    button, .link {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        cursor: pointer;
        outline: none;
        text-decoration: none;
    }

    .display-rate {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
    }

    .btn-play {
        position: relative;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        box-shadow: 0 0 10px #cb5492;
        outline: none;
        cursor: pointer;
        margin: 120px auto auto;

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: calc(50% + 15px);
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            background: transparent;
            border-top: 70px solid transparent;
            border-bottom: 70px solid transparent;
            border-left: 120px solid white;
        }

        &:after {
            content: 'Play';
            position: absolute;
            top: 50%;
            left: calc(50%);
            transform: translate(-50%, -50%);
            color: #CB5492;
        }

        &:active {
            background: white;
            box-shadow: inset 0 0 5px #cb5492;
            transform: scale(0.95);

            &:before {
                border-left: 120px solid #CB5492;
            }

            &:after {
                color: white;
            }
        }
    }


</style>
