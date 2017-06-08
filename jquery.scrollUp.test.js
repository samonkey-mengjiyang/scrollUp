;(function($){
var scrollUp = function(config){

//默认配置
this.defaultConfig = {
	scrollName : "scrollUp", //回到顶部的节点名称
	scrollDistance : 300,  //顶部和出现按钮的距离
	scrollSpeed : 300, //回到顶部的速度
	easingType : 'linear', //回到顶部的均速
	scrollText : '回到顶部',//节点的文字
	animation : 'fade', //按钮出现的动画设置 'fade slide default'
	animationSpeed: 200, //动画速度
	scrollTrigger : false, //按钮节点 可以自定义
	scrollZindex:10000,
	scrollTarget:0 // 回到顶部的高度
}

//其他配置
//重置参数
if(config && $.isPlainObject(config)){
	$.extend(this.defaultConfig,config);
}else{
	this.isConfig = true;
}

//判断是否重复
//1
if(!$.data(document.body,'scrollUp')){
	$.data(document.body,'scrollUp',true);
	this.create();
}


}
//方法
scrollUp.prototype = {

	create:function(){
		//console.log(this.defaultConfig);
		var o = this.defaultConfig,triggerVisible,
			animIn,animOut,animSpeed,scrollEvent,
			$self;

		//2 节点是否定义
		if(o.scrollTrigger){
			$self = $(o.scrollTrigger);
		}else{
			$self = $("<a/>",{
				id:o.scrollName,
				href:'#top'
			})
		}

		$self.appendTo('body');
		//3添加其他属性和公共css
		if(o.scrollText){
			$self.html(o.scrollText);
		}

		$self.css({
			position: 'fixed',
			zIndex:o.scrollZindex,
			display:'block',
			right:'20px',
			bottom:'20px',
			width:'38px',
			height:'38px',
			display:'none'
		})
		//4高度线
		$("<div/>",{
			id:o.scrollName+'-active'
		}).css({
			width:"100%",
			position:'absolute',
			borderTop:'1px solid red',
			top:o.scrollDistance+'px',
			zIndex:o.scrollZindex,
			display:'none'
		}).appendTo('body')


		//5按钮显示动画
		switch(o.animation){
			case 'fade':
			animIn = 'fadeIn',
			animOut = 'fadeOut',
			animSpeed=o.animationSpeed
			break;
			case 'slide':
			animIn = 'slideDown',
			animOut = 'slideUp',
			animSpeed=o.animationSpeed
			break;
			default:
			animIn = 'fadeIn',
			animOut = 'fadeOut',
			animSpeed=o.animationSpeed
		}

		//5 按钮逻辑
		scrollEvent = $(window).scroll(function(){
			if($(this).scrollTop() > o.scrollDistance){
				if(!triggerVisible){
					$self[animIn](animSpeed);
					triggerVisible = true;
				}
				
			}else{
				if(triggerVisible){
					$self[animOut](animSpeed);
					triggerVisible = false;
				}
				}
		})


		//6 点击事件
		$self.click(function(event) {
			/* Act on the event */
            event.preventDefault(); //防止闪烁

			$('html,body').animate({
				scrollTop:o.scrollTarget
			},o.scrollSpeed,'linear')
		});
	}
}




$.scrollUpTest = function(config){
	return new scrollUp(config);
}
})(jQuery)