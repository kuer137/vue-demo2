<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../../assets/vux_logo.png">
      <h1>66 </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>

    <!--checklist-->
    <checklist required :options="commonList" @on-change="change"></checklist>
  </div>
</template>

<script>
import { Group, Cell, Checklist } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Checklist
  },
  methods: {
    change (val, label) {
      console.log('change', val, label)
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      commonList: [ 'China', 'Japan', 'America' ]
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
