<template>
    <div class="roulette">
        <h1>Roulette</h1>
        <h2>{{rouletteList}}</h2>
        <div id="roulette" :data-rouletteList="rouletteList">
            <div id="result"></div>
            <canvas id="canvas" width="500" height="500"></canvas>
        </div>
        <button class="btn btn--big" value="spin" id='spin'>Spin</button>


    </div>
</template>

<script>
    export default {
        name: "Roulette",
        props: ['softs', 'alcohols', 'alcoholRate'],
        computed: {
            rouletteList: function () {
                return Array.from(this.softs, soft => soft.name)
            }
        },
        created() {
            let script = document.createElement('script')
            script.setAttribute('src',"/rouletteScript.js");
            document.head.appendChild(script);
        }
    }
</script>

<style scoped>

</style>