<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item nav-link" to="/portfolio" activeClass="active" tag="li">
          Portfolio <span class="sr-only">(current)</span>
        </router-link>
        <router-link class="nav-item nav-link" to="/stocks" activeClass="active" tag="li">
          Stocks <span class="sr-only">(current)</span>
        </router-link>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#" @click="endDay">End Day</a></li>
        <li
          class="nav-item dropdown"
          :class="{show: isDropdownShow}"
          @click="isDropdownShow = !isDropdownShow"
          >
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Save & Load</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
        <li class="nav-item">
          <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        isDropdownShow: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
            funds: this.$store.getters.funds,
            stockPortfolio: this.$store.getters.stockPortfolio,
            stocks: this.$store.getters.stocks
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }

</script>