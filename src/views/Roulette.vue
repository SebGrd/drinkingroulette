<template>
    <div class="roulette">
        <Header text="Return"/>
<!--        <p>{{rouletteList}}</p>-->
        <div id="roulette" :data-rouletteList="rouletteList">
            <div id="result-wrapper">
                <svg width="358" height="106" viewBox="0 0 358 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7.5" y="7.5" width="343" height="91" rx="43.5" fill="#FFF1DC" stroke="#EA2820" stroke-width="15"/>
                    <circle cx="57" cy="7" r="6" fill="url(#paint0_linear)"/>
                    <circle cx="29" cy="13" r="6" fill="url(#paint1_linear)"/>
                    <circle cx="10" cy="36" r="6" fill="url(#paint2_linear)"/>
                    <circle cx="10" cy="70" r="6" fill="url(#paint3_linear)"/>
                    <circle cx="29" cy="92" r="6" fill="url(#paint4_linear)"/>
                    <circle cx="330" cy="92" r="6" transform="rotate(-180 330 92)" fill="url(#paint5_linear)"/>
                    <circle cx="349" cy="69" r="6" transform="rotate(-180 349 69)" fill="url(#paint6_linear)"/>
                    <circle cx="349" cy="35" r="6" transform="rotate(-180 349 35)" fill="url(#paint7_linear)"/>
                    <circle cx="330" cy="13" r="6" transform="rotate(-180 330 13)" fill="url(#paint8_linear)"/>
                    <circle cx="92" cy="7" r="6" fill="url(#paint9_linear)"/>
                    <circle cx="127" cy="7" r="6" fill="url(#paint10_linear)"/>
                    <circle cx="162" cy="7" r="6" fill="url(#paint11_linear)"/>
                    <circle cx="197" cy="7" r="6" fill="url(#paint12_linear)"/>
                    <circle cx="232" cy="7" r="6" fill="url(#paint13_linear)"/>
                    <circle cx="267" cy="7" r="6" fill="url(#paint14_linear)"/>
                    <circle cx="302" cy="7" r="6" fill="url(#paint15_linear)"/>
                    <circle cx="58" cy="98" r="6" fill="url(#paint16_linear)"/>
                    <circle cx="93" cy="98" r="6" fill="url(#paint17_linear)"/>
                    <circle cx="128" cy="98" r="6" fill="url(#paint18_linear)"/>
                    <circle cx="163" cy="98" r="6" fill="url(#paint19_linear)"/>
                    <circle cx="198" cy="98" r="6" fill="url(#paint20_linear)"/>
                    <circle cx="233" cy="98" r="6" fill="url(#paint21_linear)"/>
                    <circle cx="268" cy="98" r="6" fill="url(#paint22_linear)"/>
                    <circle cx="303" cy="98" r="6" fill="url(#paint23_linear)"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="51" y1="7" x2="63" y2="7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="23" y1="13" x2="35" y2="13" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear" x1="4" y1="36" x2="16" y2="36" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear" x1="4" y1="70" x2="16" y2="70" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear" x1="23" y1="92" x2="35" y2="92" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear" x1="324" y1="92" x2="336" y2="92" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear" x1="343" y1="69" x2="355" y2="69" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear" x1="343" y1="35" x2="355" y2="35" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear" x1="324" y1="13" x2="336" y2="13" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear" x1="86" y1="7" x2="98" y2="7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint10_linear" x1="121" y1="7" x2="133" y2="7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint11_linear" x1="156" y1="7" x2="168" y2="7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint12_linear" x1="191" y1="7" x2="203" y2="7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint13_linear" x1="226" y1="7" x2="238" y2="7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint14_linear" x1="261" y1="7" x2="273" y2="7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint15_linear" x1="296" y1="7" x2="308" y2="7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint16_linear" x1="52" y1="98" x2="64" y2="98" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint17_linear" x1="87" y1="98" x2="99" y2="98" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint18_linear" x1="122" y1="98" x2="134" y2="98" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint19_linear" x1="157" y1="98" x2="169" y2="98" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint20_linear" x1="192" y1="98" x2="204" y2="98" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint21_linear" x1="227" y1="98" x2="239" y2="98" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint22_linear" x1="262" y1="98" x2="274" y2="98" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                        <linearGradient id="paint23_linear" x1="297" y1="98" x2="309" y2="98" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFD600"/>
                            <stop offset="0.484275" stop-color="#FFCE00"/>
                            <stop offset="0.484375" stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#FFB800"/>
                        </linearGradient>
                    </defs>
                </svg>
                <span id="result"></span>
            </div>

            <canvas id="canvas" width="500" height="500"></canvas>
        </div>
        <div class="container">
            <button class="btn btn--big" value="spin" id='spin'>Spin</button>
        </div>


    </div>
</template>

<script>
    import Header from "../components/Header";
    export default {
        name: "Roulette",
        components: {
            Header
        },
        props: ['softs', 'alcohols', 'alcoholRate'],
        computed: {
            rouletteList: function () {
                let softs = Array.from(this.softs, soft => soft.name)
                let alcohols =  Array.from(this.alcohols, alcohols => alcohols.name)
                let alcoholRate = this.alcoholRate
                let softsRate = 100 - alcoholRate


                return [...softs, ...alcohols]
            }
        },
        created() {
            let script = document.createElement('script')
            script.setAttribute('src',"/rouletteScript.js");
            document.head.appendChild(script);
        }
    }
</script>

<style lang="scss" scoped>

    #roulette{
        margin-top: 20px;
    }

    #result-wrapper{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        #result{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-transform: uppercase;
            color: black;
            font-weight: 700;
            font-size: 32px;
        }
    }
    button{
        width: 100%;
        box-shadow: 0 0 10px #cb5492;
        font-size: 36px;
        font-weight: 400;
        outline: none;
    }
</style>