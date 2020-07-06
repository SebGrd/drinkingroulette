<template>
    <header class="container">

        <span v-if="!text" class="placeholder"></span>

        <a  v-if="text && !confirmation"
            href @click.prevent="goBack">{{ text }}</a>

        <a v-if="text && confirmation"
           href @click.prevent="showAlert">{{ text }}</a>
        <div id="return-alert" class="alert" v-if="confirmation">
            <div class="wrapper">
                <p class="title">{{ text }}</p>
                <p>Are you sure ?</p>
                <div class="controls">
                    <button @click="hideAlert" class="no">No</button>
                    <button @click="goBack" class="yes">Yes</button>
                </div>
            </div>
        </div>

        <img alt="Vue logo" src="../assets/logo.png">
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: ['text', 'confirmation'],
        methods: {
            goBack() {
                window.history.back()
            },
            showAlert() {
                document.getElementById('return-alert').classList.add('active')
            },
            hideAlert() {
                document.getElementById('return-alert').classList.remove('active')
            }
        },
        computed: {
            type: function () {
                return this.confirmation === true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 6px;
        padding-bottom: 6px;
        a{
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
            line-height: 0.8;
            color: #E71414;
        }
        img{
            width: 40px;
        }
        .alert{
            &.active{
                display: flex;
            }
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: rgba(0, 0, 0, 0.2);
            .wrapper{
                padding: 15px 30px;
                background: white;
                border-radius: 15px;
                .title{
                    color: #CB5492;
                    font-size: 34px;
                    font-weight: 400;
                    margin: 0 0 10px;
                }
                p{
                    margin: 0 0 30px;
                    font-size: 18px;
                }
                .controls{
                    button{
                        font-family: 'Nunito', sans-serif;
                        font-size: 24px;
                        text-transform: uppercase;
                        background: #CB5492;
                        color: white;
                        padding: 4px 8px;
                        border: 2px solid transparent;
                        &:first-child{
                            margin-right: 8px;
                        }
                        &.no{
                            border: 2px solid #E71414;
                            background: white;
                            color: #E71414;
                        }
                    }
                }
            }
        }
    }
</style>