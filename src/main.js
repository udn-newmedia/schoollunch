// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Utils from 'udn-newmedia-utils'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

$(document).ready(function(){
  $('a').click(function(){
    console.log('click')
    fbq('track', 'ViewContent');
    ga("send", {
      "hitType": "event",
      "eventCategory": "超連結點擊",
      "eventAction": "click",
      "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + $(this).attr('href') + "] [" + $(this).parent().attr('class') + "]"
    });
  })
})

