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
        padding: 4px 15px;
        border: 2px solid #cb5492;
        border-radius: 50px;
        margin-bottom: 8px;

        .name{
            font-weight: bold;
            font-size: 24px;
        }
        .controls{
            &-edit,&-delete{

            }
            &-edit{

            }
            &-delete{

            }
        }
    }
</style>