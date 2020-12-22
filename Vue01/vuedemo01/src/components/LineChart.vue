

<script>
import { Line } from 'vue-chartjs'



export default {

      extends: Line,
  mounted() {
    const dates = [
      '2020/07/05',
      '2020/07/06',
      '2020/07/07',
      '2020/07/08',
      '2020/07/09',
      '2020/07/10',
    ]
    const totals = [50, 40, 71, 51, 25, 49]

    this.renderChart({
      labels: dates,
      datasets: [
        {
          label: 'demo',
          data: totals,
        },
      ],
    },
    {
      responsive: true,
      maintainAspectRatio: false,
    })
  },

    // name: 'LineChart',
    // data() {
    //     return {
    //     lineChartData: {
    //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //             datasets: [
    //             {
    //                 label: 'Weight track',
    //                 backgroundColor: "transparent",
    //                 data: [75, 75.6, 77.8, 78.1, 79.1, 80, 78.5],
    //                 borderColor: "rgba(1, 116, 188, 0.50)",
    //                 pointBackgroundColor: "rgba(171, 71, 188, 1)"
    //             }
    //             ]
    //         }
    //     }
    // },
    // extends: Line,
    // mixins: [reactiveProp],
    // props: ['options'],
    // mounted() {
    //     // this.chartData is created in the mixin.
    //     // If you want to pass options please create a local options object
    //     this.renderChart(this.lineChartData, this.options)
    // }
}




        
</script>

<style>
  /* .small {
    max-width: 600px;
    margin:  150px auto;
  } */
</style>