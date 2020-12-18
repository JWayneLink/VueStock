<template>
  <div class="container" style="width:70%;padding:30px;">
    <!-- <img alt="Vue logo" src="../assets/about.png"> -->
    <div>
      <ul>
        <li>
          <h4>{{ $t('aboutInfo.Establishment.title') }}</h4>
          <h6>{{ $t('aboutInfo.Establishment.content') }}</h6>
        </li>
        <li>
          <h4>{{ $t('aboutInfo.Employees.title') }}</h4>
          <h6>{{ $t('aboutInfo.Employees.content') }}</h6>
        </li>
        <li>
          <h4>{{ $t('aboutInfo.Headquarter.title') }}</h4>
          <h6>{{ $t('aboutInfo.Headquarter.content') }}</h6>
        </li>
        <li>
          <h4>{{ $t('aboutInfo.Revenue.title') }}</h4>
          <h6>{{ $t('aboutInfo.Revenue.content') }}</h6>
        </li>
      </ul>
    </div>
    <div class="content">
      <div>
        {{ $t('aboutInfo.content1') }}
      </div>
      <br>
      <div>
        {{ $t('aboutInfo.content2') }}
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'About',
    data() {
      return {

      }
    }
  }
</script>

<style>
  ul {
    text-align: left;
    /* list-style-type: none; */
  }

  .content {
    text-align: left;
  }
</style>