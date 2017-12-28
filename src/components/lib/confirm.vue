<template>
  <div>
    <div style="padding:15px;">
      <x-button @click.native="showPlugin" type="primary">显示确认框</x-button>
    </div>
    <div style="padding:15px;">
      <x-button @click.native="showAlert" type="warn">显示alert弹窗</x-button>
    </div>
    <div style="padding:15px;">
      <x-button @click.native="showpop()" type="default">显示popup</x-button>
    </div>

    <div style="padding:15px;">
      <x-button @click.native="showPosition('top')" type="primary">Top</x-button>
      <x-button @click.native="showPosition('middle')" type="primary">Middle</x-button>
      <x-button @click.native="showPosition('bottom')" type="primary">Bottom</x-button>
      <x-button @click.native="showPosition('')" type="primary">Default</x-button>
    </div>


    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
        <div class="popup0">
          <p>我是皮受罚几率弹窗</p>
          <p>我是皮受罚几率弹窗</p>
          <p>我是皮受罚几率弹窗</p>
        </div>
      </popup>

      <toast v-model="msgshow" type="text" :time="800" is-show-mask text="Hello World" :position="position">i im msg</toast>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { ConfirmPlugin, AlertPlugin, XButton, TransferDom, Popup, Toast } from 'vux'
  Vue.use(ConfirmPlugin)
  Vue.use(AlertPlugin)
  export default {
    directives: {
      TransferDom
    },
    components: {
      XButton,
      Popup,
      Toast
    },
    data () {
      return {
        show: false,
        position: 'default',
        msgshow: false
      }
    },
    methods: {
      showPlugin () {
        this.$vux.confirm.show({
          title: 'Title',
          content: 'Content666',
          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          },
          onCancel () {
            console.log('plugin cancel')
          },
          onConfirm () {
            console.log('plugin confirm')
          }
        })
      },
      showAlert () {
        this.$vux.alert.show({
          title: 'Vux is Cool',
          content: 'Do you agree?',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
          }
        })
      },
      log (str) {
        console.log(str)
      },
      showpop () {
        this.show = true
      },
      showPosition (position) {
        this.position = position
        this.msgshow = true
      }
    }
  }
</script>
