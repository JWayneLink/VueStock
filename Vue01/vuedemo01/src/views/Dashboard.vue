<template>
    <div class="container" style="width:70%;padding:30px;">
        <h1>COVID-19 Tracking Dashboard</h1>
        <b-container class="bv-example-row">
            <b-row>
                <b-col><LineChart></LineChart></b-col>
                <b-col><BarChart></BarChart></b-col>
                <b-col>3 of 3</b-col>
            </b-row>
        </b-container>

        
    </div>
</template>


<script>
import axios from 'axios'
    import LineChart from '../components/LineChart'
    import BarChart from '../components/BarChart'

    export default {
        name: 'Dashboard',
        data() {
            return {

            }
        },
        async created() {
            let { data } = await axios.get(
            'https://api.covidtracking.com/v1/us/daily.json'
            )
            console.log(data)
        },
        'components': {
            'LineChart': LineChart,
            'BarChart': BarChart,
        }
    }
</script>

<style>

</style>