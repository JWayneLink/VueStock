

![image](https://user-images.githubusercontent.com/40432032/145327577-b3902445-404a-4b2f-966b-283a8718c5dc.png)

<hr>

<H3>MY VUE LEARNING</H3>
<https://vuejs.org/>

<ul>
  <li>
    npm install vue-router
  </li>
    <li>
    npm install vue bootstrap-vue bootstrap
  </li>
    <li>
    npm install vue-i18n
  </li>
  <li>
    npm install axios vue-axios --save
  </li>  
  <li>
    npm install vuex --save
  </li>
  <li>
    npm install vuetify
  </li>
  <li>
    npm install vee-validate --save
  </li>
  <li>
   npm install chart.js --save
  </li>
  <li>
    npm install vue-chartjs chart.js --save
  </li>
  <li>
    npm install vue-typeahead-bootstrap --save
  </li>
  <li>
    npm install apexcharts --save
  </li>
  <li>
    npm install vue3-apexcharts --save
  </li>
</ul>


<hr>

<H2>COVID-19 Dashboard Template</H3>
```javascript
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

```

| COVID-19 DAILY DEATH |
|-------|
| ![image](https://user-images.githubusercontent.com/40432032/145331064-39a365c3-e345-4186-8ff5-0149691669a0.png)  |
| COVID-19 DAILY HOSPITALIZED |
| ![image](https://user-images.githubusercontent.com/40432032/145331038-b65dc1b7-28d5-498d-acae-8cfe5c535bdf.png)  |


| STOCK ITEM LIST |
|-------|
|  ![image](https://user-images.githubusercontent.com/40432032/145331422-05b4e5c6-ef1a-4dc8-b56d-d2a205596da4.png) |
| STOCK PRICE INFO |
| ![image](https://user-images.githubusercontent.com/40432032/145331279-ed6c62b5-cc1f-4b8b-93b3-bb9d25f0f7c3.png) |


| MULTI-LANG - JA (i18n) |
|-------|
| ![image](https://user-images.githubusercontent.com/40432032/145330442-f9eee439-eb8e-4ae7-85bc-948567d6a712.png) |
| MULTI-LANG - EN (i18n) |
| ![image](https://user-images.githubusercontent.com/40432032/145331504-3c7516d8-b470-441e-8175-193e5a213fa3.png) |



| LOGIN VLIDATION |
|-------|
| ![image](https://user-images.githubusercontent.com/40432032/145330820-3273efaa-5453-4fe9-a18e-ad90f3883278.png)  |
| MY GITHUB ACCOUNT |
| ![image](https://user-images.githubusercontent.com/40432032/145330723-cdd5e1f1-a8cf-42f5-8cc1-19312d5cc73a.png)  |


<HR>

