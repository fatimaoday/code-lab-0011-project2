var ct = new Vue({
    el: "#root",
    data: {
        cartoons: [],
    },
    methods: {}
});

axios.get("http://codelab.camp/api/spacetoon").then(function (response) {
    ct.cartoons = (response.data)
})