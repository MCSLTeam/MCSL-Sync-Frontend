enum LoadingStatus {
    LOADING,
    SUCCESS,
    FAIL_CONNECT = '无法连接至 MCSL-Sync 服务器！',
    FAIL_CODE = '服务器返回非200状态码！',
    FAIL_EMPTY = '服务器返回的数据为空！'
}

export default LoadingStatus;