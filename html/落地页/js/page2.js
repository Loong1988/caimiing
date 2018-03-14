	var goodsType=1005;
	var change=false;
	function GetQueryString(name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
	var nowtype=GetQueryString('goodsType')
	var arr=[1001,1002,1003,1004,1005]
	arr.forEach(function (x,num) {
		if(x==nowtype){
			change=true;
			console.log(1)
		}
	})
	if(nowtype!=null&&change){
		goodsType=nowtype
	}
	
	var app=angular.module('app',[])   
	app.controller('one',function ($scope) {
	   $scope.bigimg=goodsType
	   $scope.bigUrl=''
	   $scope.detail=function(urls){
			location.href=urls
	   }
	   $scope.bigGoods=function () {
	   	location.href=$scope.bigUrl
	   }
	   list1.forEach(function (x,num) {
	     if(x.id==goodsType){
	     	 $scope.bigUrl=x.urls
	     	list1.splice(num,1)
	     }
	   })
	    $scope.item=list1
	    console.log($scope.bigUrl)
	})