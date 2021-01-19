<template>
    <div class="container">

        <div class="pl-1 pb-2 pt-3">Stock Code: {{query}} </div>
            <vue-typeahead-bootstrap
            :data="datasource"
            v-model="query"
            v-on:keyup="SearchAutoCompleate"
            placeholder="Choose a stock code"
            />
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
    Vue.use(VueAxios, axios)

    export default {
        name: 'Stock',
        components: {
            VueTypeaheadBootstrap
        },
        data: function () {
            return {
                query: '',
                datasource: []
            }
        },
        created: async function () {

        },
        methods: {
            SearchAutoCompleate : async function(){
          
                // 每次輸入查詢Stock Code
                let response = await axios.get(`https://localhost:44309/api/Common/StockCodeAutoComplete?stockCode=${this.query}`);
                this.datasource = [];
                response.data.data.forEach(element => {
                    let options = `${element.type} / ${element.descr}`;
                    this.datasource.push(options);
                });
                
            }
        }
    }
</script>

<style>

</style>