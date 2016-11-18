var sheng=document.getElementById('sheng');
var shi=document.getElementById('shi');
var qu=document.getElementById('qu');
// console.log(json.citylist[0].p);//北京  获取示例
// console.log(json.citylist[0].c[0].n)//东城区  获取示例
// console.log(json.citylist.length);//35  获取示例
var opt1='<option value="-1">请选择</option>';
for (var i = 0; i <json.citylist.length; i++) {//省份初始值
	opt1=opt1+'<option value="'+i+'">'+json.citylist[i].p+'</option>';
	sheng.innerHTML=opt1;
}
sheng.onchange=function (){//选择省份后
	var opt2='<option value="-1">请选择</option>';//初始值
	qu.innerHTML=opt2;
	shi.innerHTML=opt2;
	if(sheng.value!=-1){
		if (json.citylist[sheng.value].c[0].a) {//是省份执行这
			for (var i = 0; i <json.citylist[sheng.value].c.length; i++) {
				opt2=opt2+'<option value="'+i+'">'+json.citylist[sheng.value].c[i].n+'</option>';
				shi.innerHTML=opt2;
			}
		} else{//是直辖市执行这
			opt2=opt2+'<option value="0">'+json.citylist[sheng.value].p+'</option>';
			shi.innerHTML=opt2;
		};
	}
	}
		

shi.onchange=function (){//选择城市后
	var opt3='<option value="-1">请选择</option>';//初始值
	qu.innerHTML=opt3;
	if(shi.value!=-1){
		if (json.citylist[sheng.value].c[0].a) {//是省份执行这
			for (var i = 0; i <json.citylist[sheng.value].c[shi.value].a.length; i++) {
				opt3=opt3+'<option value="'+i+'">'+json.citylist[sheng.value].c[shi.value].a[i].s+'</option>';
				qu.innerHTML=opt3;
			}
		} else{//是直辖市执行这
			for (var i = 0; i <json.citylist[sheng.value].c.length; i++) {
				opt3=opt3+'<option value="'+i+'">'+json.citylist[sheng.value].c[i].n+'</option>';
				qu.innerHTML=opt3;
			}
		};
	
	}
}