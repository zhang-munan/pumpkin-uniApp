// 引入全局mixin
import mixin from './libs/mixin/mixin.js'
// 全局挂载引入http相关请求拦截插件
import Request from './libs/luch-request'

// 路由封装
import route from './libs/utils/route.js'

// 规则检验
import test from './libs/function/test.js'
// 防抖方法
import debounce from './libs/function/debounce.js'
// 节流方法
import throttle from './libs/function/throttle.js'
// 公共文件写入的方法
import index from './libs/function/index.js'
// 数据验证（表单验证）
import graceChecker from './libs/function/graceChecker.js'

// 配置信息
import config from './libs/config/config.js'

const $dlhc = {
	route,
	http: new Request(),
	test,
	debounce,
	throttle,
	config,
	formCheck: graceChecker,
	...index,
}

// $dlhc挂载到uni对象上
uni.$dlhc = $dlhc

const install = (Vue) => {
	Vue.mixin(mixin)

	// #ifdef VUE3
	// #ifndef APP-NVUE
	// Vue.config.globalProperties.$dlhc = $dlhc
	//#endif
	//#endif

	// 从 Vue 3.0 开始，过滤器已移除，且不再支持。
	// #ifndef VUE3
	Vue.filter('timeFrom', (timestamp, format) => {
		return timeFrom(timestamp, format)
	})

	// 只有vue，挂载到Vue.prototype才有意义，因为nvue中全局Vue.prototype和Vue.mixin是无效的
	Vue.prototype.$dlhc = $dlhc
	// #endif
	// #endif
}

export default {
	install
}
