// 对所有的值进行base64加密后放进去
// 示例：atob('MTkyLjE2OC4wLjU3OjkwMDA=')
window._baseConfig = {
  development: {
    NODE_ENV: 'development',
    // VUE_APP_API_BASE_URL: 'http://192.168.200.237:8080/joinsoft-jsmf',
    // 锡盟
    // VUE_APP_API_BASE_URL: 'http://60.216.11.35:28888/joinsoft-jsmf',
    // 物业一体化
    // VUE_APP_API_BASE_URL: 'http://119.189.1.195:8133/joinsoft-jsmf',
    // 宽城线上
    // VUE_APP_API_BASE_URL: 'http://kc.china-join.com:8888/joinsoft-jsmf',
    // 滕州线上35
    // VUE_APP_API_BASE_URL: 'http://218.59.235.198:8888/joinsoft-jsmf',
    // 徐自男-
    // VUE_APP_API_BASE_URL: 'http://192.168.200.27:8080/joinsoft-jsmf',
    // VUE_APP_API_BASE_URL: 'http://121.26.33.74:8888/joinsoft-jsmf',
    // 十二师
    // VUE_APP_API_BASE_URL: 'http://222.82.223.194:9999/joinsoft-jsmf',
    // 鄄城
    // VUE_APP_API_BASE_URL: 'https://www.jcxwxzj.com/joinsoft-jsmf',
    // 翔
    // VUE_APP_API_BASE_URL: 'http://192.168.200.171:8080/joinsoft-jsmf',
    // 66
    // VUE_APP_API_BASE_URL: 'http://60.216.11.35:22220/joinsoft-jsmf',
    // 昊
    // VUE_APP_API_BASE_URL: 'http://192.168.200.124:8080/joinsoft-jsmf',
    // 鄄城线上
    // VUE_APP_API_BASE_URL: 'http://221.1.215.26:8888/joinsoft-jsmf',
    // 衡水线上
    // VUE_APP_API_BASE_URL: 'http://193.168.20.214:8083/joinsoft-jsmf',
    // 雨w
    // VUE_APP_API_BASE_URL: 'http://192.168.200.135:8080/joinsoft-jsmf',
    // 35
    VUE_APP_API_BASE_URL: 'http://192.168.0.35:8080/joinsoft-jsmf',
    // 秦景涛
    // VUE_APP_API_BASE_URL: 'http://192.168.2.65:8080/joinsoft-jsmf',
    // VUE_APP_API_BASE_URL: 'http://192.168.200.134:8080/joinsoft-jsmf',
    // 57
    // VUE_APP_API_BASE_URL: 'http://192.168.0.57:8083/jNoinsoft-jsmf',
    //
    // VUE_APP_API_BASE_URL: 'http://192.168.200.223:8080/joinsoft-jsmf',
    // 奇
    // VUE_APP_API_BASE_URL: 'http://192.168.200.88:8888/joinsoft-jsmf',
    // 鹏
    // VUE_APP_API_BASE_URL: 'http://192.168.200.100:8080/joinsoft-jsmf',
    // 斌
    // VUE_APP_API_BASE_URL: 'http://192.168.200.136:8081/joinsoft-jsmf',
    // VUE_APP_API_BASE_URL: 'http://192.168.200.42:8080/joinsoft-jsmf',
    // 强哥
    // VUE_APP_API_BASE_URL: 'http://192.168.200.250:8080/joinsoft-jsmf',
    // 本地
    // VUE_APP_API_BASE_URL: 'http://localhost:8080/joinsoft-jsmf',
    // VUE_APP_API_BASE_URL: 'http://222.82.223.194:9999//joinsoft-jsmf',
    // VUE_APP_API_BASE_URL: 'http://172.16.6.10:8888/joinsoft-jsmf/',
    // VUE_APP_MINIO_URL: '60.216.11.35:60613',
    // VUE_APP_MINIO_INNER_URL: '192.168.0.35:9000',
    // 滕州minio配置
    // VUE_APP_API_WY_BASE_URL: 'http://192.168.200.88:8889/joinsoft-jsmf',
    VUE_APP_API_WY_BASE_URL: 'http://119.189.1.195:8133/jeecg-boot',
    VUE_APP_MINIO_URL: '222.82.223.194:9999',
    VUE_APP_MINIO_INNER_URL: '172.168.2.241:9000',
    VUE_APP_CAS_BASE_URL: 'http://cas.example.org:8443/cas',
    VUE_APP_ONLINE_BASE_URL: 'http://fileview.jeecg.cosasm/onlinePreview',
  },
  production: {
    NODE_ENV: 'production',
    VUE_APP_API_BASE_URL: 'http://192.168.0.35:8080/joinsoft-jsmf',
    VUE_APP_API_WY_BASE_URL: 'http://119.189.1.195:8133/jeecg-boot',
    VUE_APP_MINIO_URL: '60.216.11.35:22221',
    VUE_APP_MINIO_INNER_URL: atob('MTkyLjE2OC4wLjU3OjkwMDA='),
    VUE_APP_CAS_BASE_URL: 'http://localhost:8888/cas',
    VUE_APP_ONLINE_BASE_URL: 'http://fileview.jeecg.com/onlinePreview'
  },
  // 用于部分系统选项的默认配置
  systemConfig: {
    // 是否缓存路由
    keepAliveRoute: true
  }
}
