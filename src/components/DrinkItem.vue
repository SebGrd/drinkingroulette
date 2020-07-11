<template>
    <li>
        <span class="name">{{drink.name}}</span>
        <span class="controls">
            <button class="controls-edit">
                <img src="../assets/pencil.png" alt="">
            </button>
            <button class="controls-delete">
                <img src="../assets/trash.png" alt="">
            </button>
        </span>
    </li>
</template>

<script>
    export default {
        name: "DrinkItem",
        props: ['drink']
    }
</script>

<style lang="scss" scoped>
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid #cb5492;
        border-radius: 50px;
        margin-bottom: 8px;

        .name{
            font-weight: bold;
            font-size: 24px;
            padding: 4px 15px;
        }
        .controls{
            background: #cb5492;
            border-radius: 50px;
            padding: 4px 8px 4px 10px;
            &-edit,&-delete{
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                img{
                    width: 30px;
                }
            }
            &-edit{
                margin-right: 6px;
            }
            &-delete{

            }
        }
    }
</style>