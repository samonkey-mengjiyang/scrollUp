回到顶部插件
学习进步
```javascript
		$.scrollUpTest({
			scrollName : "scrollUp", //回到顶部的节点名称
			scrollDistance : 300,  //顶部和出现按钮的距离
			scrollSpeed : 1000, //回到顶部的速度
			easingType : 'linear', //回到顶部的均速
			scrollText : '回到顶部',//节点的文字
			animation : 'fade', //按钮出现的动画设置 'fade slide default'
			animationSpeed: 200, //动画速度
			scrollTrigger : false, //按钮节点 可以自定义
			scrollZindex:10000,
			scrollTarget:0 // 回到顶部的高度
		});
```