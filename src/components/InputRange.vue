<template>
    <div class="rate">
        <div class="custom-input">
            <span class="alcohol">Alcohol</span>
            <input @input="updateRateBar"
                   v-model="alcoholRate"
                   type="range" id="rate" min="10" max="100" value="75">
            <div class="ratebar"></div>
            <span class="soft">Soft</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputRange",
        data() {
            return {
                min: 10,
                max: 100,
                alcoholRate: 75
            }
        },
        methods: {
            updateRateBar(e) {
                let value = e.target.value
                document.querySelector('.ratebar').style.width = value + '%'
            }
        },
        computed: {
            softRate() {
                return this.max - this.alcoholRate
            }
        },
        mounted() {
            this.updateRateBar({target: document.getElementById('rate')})
            this.$emit('alcoholRateChange', this.alcoholRate)
            this.$emit('softRateChange', this.softRate)

        },
        watch: {
            alcoholRate: function (newAlcohol) {
                this.$emit('alcoholRateChange',newAlcohol)
            },
            softRate(newSoft) {
                this.$emit('softRateChange',newSoft)
            }
        }

    }
</script>

<style lang="scss" scoped>
    .rate {
        .custom-input {
            position: relative;
            width: 100%;
            height: 44px;
            box-sizing: content-box;
            border-radius: 40px;
            z-index: 1;

            background: #f8f8f8;
            border: 2px solid #CB5492;
            overflow: hidden;

            input {
                width: 100%;
                height: 44px;
                border-radius: 40px;
                margin: 0;
                border: 2px solid transparent;
                -webkit-appearance: none;
                padding: 0;
                outline: none;

                background: transparent;
                cursor: pointer;

                &::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 40px;
                    height: 40px;
                    border: 2px solid #CB5492;
                    border-radius: 50%;
                    background: #CB5492;
                }
            }

            .ratebar {
                width: 50%;

                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                background: #CB5492;
                border-radius: 40px;
                /*border-top-left-radius: 40px;*/
                /*border-bottom-left-radius: 40px;*/
                pointer-events: none;
            }

            span {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 2;
                mix-blend-mode: multiply;
                color: #CB5492;
                text-transform: uppercase;
                font-size: 18px;
                pointer-events: none;

                &.alcohol {
                    left: 8px;
                }

                &.soft {
                    right: 8px;
                }
            }
        }
    }
</style>