const {
	http
} = uni.$dlhc
// 获取菜单
export const fetchMenu = (params, config = {}) => http.post('/equipment/home', params, config)
