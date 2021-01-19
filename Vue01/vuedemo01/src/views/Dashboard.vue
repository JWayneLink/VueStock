<template>
    <div class="container" style="width:70%;padding:30px;">
        <h1>COVID-19 Tracking Dashboard</h1>

        <v-tabs v-model="tab" align-with-title>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
            <v-tab-item>
                <v-card flat>
                    <v-card-text v-text="dailydeath"></v-card-text>
                    <DeathLineChart></DeathLineChart>
                </v-card>
            </v-tab-item>

            <v-tab-item>
                <v-card flat>
                    <v-card-text v-text="recovered"></v-card-text>
                    <RecoveredLineChart></RecoveredLineChart>
                </v-card>
            </v-tab-item>

            <v-tab-item>
                <v-card flat>
                    <v-card-text v-text="hospitialized"></v-card-text>
                    <HoptializedLineChart></HoptializedLineChart>
                </v-card>
            </v-tab-item>

            <v-tab-item>
                <v-card flat>
                    <v-card-text v-text="confirmedStatus"></v-card-text>
                    <CovidStatusLineChart></CovidStatusLineChart>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </div>
</template>


<script>

    import DeathLineChart from '../components/COVID19/DeathLineChart'
    import RecoveredLineChart from '../components/COVID19/RecoveredLineChart'
    import HoptializedLineChart from '../components/COVID19/HoptializedLineChart'
    import CovidStatusLineChart from '../components/COVID19/CovidStatusLineChart'
    import BarChart from '../components/BarChart'

    export default {
        name: 'Dashboard',
        data() {
            return {
                tab: null,
                items: ['Daily Death', 'Recovered', 'Hoptialized', 'Confirmed Status'],
                dailydeath: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                recovered:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                hospitialized:"Nationally, surveillance indicators tracking levels of SARS-CoV-2 circulation and associated illnesses declined slightly or remained stable during the week ending December 12, 2020.",
                confirmedStatus:"This information is regularly updated but may not reflect the latest totals for each country."
            }
        },
        'components': {
            'DeathLineChart': DeathLineChart,
            'RecoveredLineChart': RecoveredLineChart,
            'HoptializedLineChart': HoptializedLineChart,
            'CovidStatusLineChart': CovidStatusLineChart,
            'BarChart': BarChart,
        }
    }
</script>

<style>

</style>