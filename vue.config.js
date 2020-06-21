module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			disableHostCheck: true
		}
	},
	transpileDependencies: ['uni-simple-router', 'luch-request']
}
