<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide';

import {mapActions} from 'vuex';

export default {
  components: {
    FooterGuide,
  },
  created () {
    // this.$store.dispatch('getAddress');
    this.getAddress();
    this.getUser();
  },
  methods: {
    ...mapActions(['getAddress', 'getUser']),
  },
};
</script>

<style lang="stylus" rel="stylesheet/styl">
  .app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
