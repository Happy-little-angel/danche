const CracoLessPlugin = require('craco-less');
module.exports = {
    devServer: {
      port: 3000, // 端口配置
      proxy: {
          '/api': {
              target: ' http://api.map.baidu.com/weather/v1/?district_id=110100&data_type=all&ak=AjgOd5cXAYtLNL2omrQq3OXXxC6IbYw5',
              ws: false, // websocket
              changeOrigin: true, //是否跨域
              secure: false,  // 如果是https接口，需要配置这个参数
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { '@primary-color': '#f9c700'  },
          javascriptEnabled: true,
        },
      },
    },
  ],

};