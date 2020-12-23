<script>

import axios from 'axios'
import { Line} from 'vue-chartjs'

    export default {
        extends: Line,
        data () {
            return {
                date:[],
                death:[],
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
                this.death.push(element.death);
            });

            const dates = this.date;
            const totals = this.death;
            this.renderChart({
                labels: dates,
                datasets: [{
                    label: 'Daily Death',
                    data: totals,
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