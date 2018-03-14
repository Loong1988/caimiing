	function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
 var hide=GetQueryString('from')
if(hide){
	document.querySelector('.fanhui').style.display='none'
	
}
	function golink() {
		var v=GetQueryString('from')
		if(v=='appAndroid'){
			android.toGoodsList()
			return
		}else if(v=='appIos'){
			testobject.ZTHCash()
			return
		}else{
			location.href='http://m.caimiing.com/overt/cash-tasks'
		}
	}
