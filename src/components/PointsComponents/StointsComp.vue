<template>
    <div class="bodyCard">
        <!-- The quiz amount determines the progress -->
        <button class="quizbutton" @click="count++">
            You did the quiz {{ count }} times
        </button>
        <!-- Each circle is in its own div and has a voucher attached -->

        <div id="flex-direction">
            <div id="individualcircles">
                <circle-progress :percent="count * 10" :is-bg-shadow="true" empty-color="white" :border-width="15"
                    :border-bg-width="30" :is-gradient="true" :gradient="{
                      angle: 90,
                      startColor: '#ff0000',
                      stopColor: '#ffff00',
                    }" />
                <button id="individualbuttons">
                    Vida E Coffee
                    <img class="logo1" src="/src/assets/qr.png" width="50" height="50" />
                </button>
            </div>
            <div id="individualcircles">
                <circle-progress :percent="10" :is-bg-shadow="true" empty-color="white" :border-width="15"
                    :border-bg-width="30" :is-gradient="true" :gradient="{
                      angle: 90,
                      startColor: 'green',
                      stopColor: 'lightblue',
                    }" /><button id="individualbuttons">
                    CottonOn Voucher
                    <img class="logo1" src="/src/assets/qr.png" width="50" height="50" />
                </button>
            </div>
            <div id="individualcircles">
                <circle-progress :percent="90" :is-bg-shadow="true" empty-color="white" :border-width="15"
                    :border-bg-width="30" :is-gradient="true" :gradient="{
                      angle: 90,
                      startColor: '#66ffff',
                      stopColor: '#009999',
                    }" /><button id="individualbuttons">
                    Hazz Voucher
                    <img class="logo1" src="/src/assets/qr.png" width="50" height="50" />
                </button>
            </div>
            <div id="individualcircles">
                <circle-progress :percent="50" :is-bg-shadow="true" empty-color="white" :border-width="15"
                    :border-bg-width="30" :is-gradient="true" :gradient="{
                      angle: 90,
                      startColor: '#ff3333',
                      stopColor: ' #cc0000',
                    }" />
                <button id="individualbuttons">
                    Factorie Voucher
                    <img class="logo1" src="/src/assets/qr.png" width="50" height="50" />
                </button>
            </div>
            <div id="individualcircles">
                <circle-progress :percent="80" :is-bg-shadow="true" empty-color="white" :border-width="15"
                    :border-bg-width="30" :is-gradient="true" :gradient="{
                      angle: 90,
                      startColor: '#df80ff',
                      stopColor: '#9900cc',
                    }" />
                <button id="individualbuttons">
                    Mugg & Bean
                    <img class="logo1" src="/src/assets/qr.png" width="50" height="50" />
                </button>
            </div>
            <div id="individualcircles">
                <circle-progress :percent="3" :is-bg-shadow="true" empty-color="white" :border-width="15"
                    :border-bg-width="30" :is-gradient="true" :gradient="{
                      angle: 90,
                      startColor: '#4dff4d',
                      stopColor: '#009900',
                    }" />
                <button id="individualbuttons">
                    DCM Voucher
                    <img class="logo1" src="/src/assets/qr.png" width="50" height="50" />
                </button>
            </div>
            <div id="individualcircles">
                <circle-progress :percent="20" :is-bg-shadow="true" empty-color="white" :border-width="15"
                    :border-bg-width="30" :is-gradient="true" :gradient="{
                      angle: 90,
                      startColor: '#ffff66',
                      stopColor: '#ff751a',
                    }" />
                <button id="individualbuttons">
                    MyBrew Voucher
                    <img class="logo1" src="/src/assets/qr.png" width="50" height="50" />
                </button>
            </div>
            <div id="individualcircles">
                <circle-progress :percent="30" :is-bg-shadow="true" empty-color="white" :border-width="15"
                    :border-bg-width="30" :is-gradient="true" :gradient="{
                      angle: 90,
                      startColor: ' #ff80df',
                      stopColor: '#b30086',
                    }" />
                <button id="individualbuttons">
                    Spar R100 off
                    <img class="logo1" src="/src/assets/qr.png" width="50" height="50" />
                </button>
            </div>
            <div id="individualcircles">
                <circle-progress :percent="70" :is-bg-shadow="true" empty-color="white" :border-width="15"
                    :border-bg-width="30" :is-gradient="true" :gradient="{
                      angle: 90,
                      startColor: '#99b3ff',
                      stopColor: ' #002080',
                    }" /><button id="individualbuttons">
                    Buzz Voucher
                    <img class="logo1" src="/src/assets/qr.png" width="50" height="50" />
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
// importing circle progress for the rewards
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
    components: { CircleProgress },
    data() {
        return {
            count: 0,
        }
    }
}
</script>

<style scoped>
#flex-direction {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
}

#individualcircles {
    display: flex;
    margin: 5px 5px 5px 5px;
}

#individualbuttons {
    padding: 10px;
    margin: 50px 40px 50px 50px;
    border-radius: 10px;
    border: 2px solid black;
}

.quizbutton {
    border-radius: 10px;
    background-color: lightgray;
    border: 4px solid black;
}
</style>