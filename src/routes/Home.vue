<template>
    <h1>Home</h1>
    <div class="about">{{connectData}}</div>
    <h1>{{connectData}}</h1>
</template>
<script>

export default {
    name : "About"
    , components : []
    , data() {
        return {
            connectData : "",
        };
    },
    methods: {
        get() {
            this.axios.get("/connectTest").then((response) => {
                this.connectData = response.data;
            });
        },
    },
    mounted() {
        this.get();
    },
}
</script>
