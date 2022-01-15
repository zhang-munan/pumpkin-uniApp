import App from './App'
import store from './store'

// i18n部分的配置
// 引入语言包，注意路径
import Chinese from '@/common/locales/zh.js';
import English from '@/common/locales/en.js';

// 引入全局baseConfig
import baseConfig from 'baseConfig';

// api接口配置
import * as api from 'common/api.js'

// #ifndef VUE3
import Vue from 'vue'

// VueI18n
import VueI18n from '@/common/vue-i18n.min.js';

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$adpid = "1111111111"
Vue.prototype.$api = api

// VueI18n
Vue.use(VueI18n);

Vue.use(baseConfig);

const i18n = new VueI18n({
  // 默认语言
  locale: 'zh',
  // 引入语言文件
  messages: {
    'zh': Chinese,
    'en': English,
  }
});

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n;

App.mpType = 'app'
const app = new Vue({
  i18n,
  store,
  ...App
})

// 引入请求封装
require('./util/request/index')(app)

app.$mount()
// #endif

// #ifdef VUE3
import {createSSRApp} from 'vue'

// VueI18n
// import { VueI18n } from '@/common/vue-i18n.min.js';

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(baseConfig);
  // app.use(VueI18n)
  app.config.globalProperties.$adpid = "1111111111"

  // const i18n = new VueI18n({
  //   // 默认语言
  //   locale: 'zh',
  //   // 引入语言文件
  //   messages: {
  //     'zh': Chinese,
  //     'en': English,
  //   }
  // });

  // 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
  // Vue.prototype._i18n = i18n;
	
  return {
    // i18n,
    app
  }
}

// #endif