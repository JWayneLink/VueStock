<script>

import axios from 'axios'
import { Line} from 'vue-chartjs'

    export default {
        extends: Line,
        data () {
            return {
                date:[],
                positive:[],
                negative:[],
                result:[]
            }
        },
        async mounted() {

            let { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json')
            this.result = data;
            let temp = this.result.slice(0, 20);

            temp.reverse();
            temp.forEach(element => {
                this.date.push(element.date);
                this.positive.push(element.positive);
                this.negative.push(element.negative);
            });

            const dates = this.date;
            const positive = this.positive;
            const negative = this.negative;
            
            this.renderChart({
                labels: dates,
                datasets: [
                    {
                        label: 'positive',
                        yAxesID: 'positive',
                        data: positive,
                        backgroundColor: "rgba(219, 0, 0, 0.4)",
                        borderColor: "rgba(184, 0, 0, 1)", 
                    }, 
                    {
                        label: 'negative',
                        yAxesID: 'negative',
                        data: negative,
                        backgroundColor: "rgba(3, 118, 195, 0.4)",
                        borderColor: "rgba(0, 73, 122, 1)", 
                    }],
                options: {
                    scales: {
                        yAxes: [
                        {
                            id: 'positive',
                            type: 'linear',
                            position: 'left'
                        }, 
                        {
                            id: 'negative',
                            type: 'linear',
                            position: 'right'
                        }]
                    }
                }
            },
            {
                responsive: true,
                maintainAspectRatio: false,
            })
        },
    }
</script>

<style>
    /* .small {
    max-width: 600px;
    margin:  150px auto;
  } */
</style>