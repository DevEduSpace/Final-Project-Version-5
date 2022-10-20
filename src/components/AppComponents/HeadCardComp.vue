<template>
    <div class="headCard" v-if="$store.state.user">
        <a @click="$router.go(-1)" class="previous">&#8249; Previous</a>
        <a @click="$router.go(+1)" class="next">Next &#8250; </a>
        <label id="headCardHeading">{{ currentRouteName }}
        </label>
    </div>
</template>
  
<script>
export default {
    setup() { },
    computed: {
        currentRouteName() {
            return this.$route.name;
        },
        previousRouteName() {
            return this.$route.name - 1;
        }
    }
};
</script>

<style>
.headCard {
    background-color: rgb(211, 211, 211, 90%);
    color: rgb(0, 0, 0);
    font-weight: bold;
    text-align: center;
    height: 36px;
}

a {
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
    text-align: left;
}

a:hover {
    background-color: rgb(96, 34, 59);
    color: rgb(211, 211, 211);
}

.previous {
    background-color: rgb(211, 211, 211);
    color: rgb(0, 0, 0);
    float: left;
}

.next {
    background-color: rgb(211, 211, 211);
    color: rgb(0, 0, 0);
    float: right;
}
</style>