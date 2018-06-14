
export default{
    URL: 'http://139.129.240.27:8031/ZDHYW/',
    PERSON_PERSITION: 'DP_RY_WeiZhi', //位置接口
    CONTROL_RECORDS: 'DP_YWJL_list', //运维接口
    ERROR_STYLES: 'DP_GZFX',
    WORK_HEAVY: 'DP_GZLFX',
    request: function (url,params,callback) {
        $.ajax({
			type: "post",
			url: url,
			async: true,
			data: params,
			dataType: 'jsonp',
			success: callback,
			error: function(xhr, type, errorThrown) {
				console.log(JSON.stringify(xhr))
				console.log(type)
				console.log(errorThrown)
			}
		});
    },
}