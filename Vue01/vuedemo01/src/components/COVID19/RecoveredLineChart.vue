<script>

import axios from 'axios'
import { Line} from 'vue-chartjs'

    export default {
        extends: Line,
        data () {
            return {
                date:[],
                recovered:[],
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
                this.recovered.push(element.recovered);
            });

            const dates = this.date;
            const totals = this.recovered;
            this.renderChart({
                labels: dates,
                datasets: [{
                    label: 'Recovered',
                    data: totals,
                    backgroundColor: "rgba(86, 199, 0, 0.2)", 
                    borderColor: "rgba(86, 199, 0, 1)", 
                }, ],
            }, {
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