# jquery.slide
一个简单的焦点图切换jquery插件, 支持缓慢放大

## 安装

安装之前先要引入jquery:

```html
<link rel="stylesheet" href="/path/to/jquery.slide.css" />
<script src="/path/to/jquery.slide.js"></script>
```

## 使用

使用非常简单:

```html
<div id="church-banner">
	<ul>
		<li class="church-item"><img src="../img/1.jpg" alt="" width="1200" height="550" /></li>
		<li class="church-item"><img src="../img/2.jpg" alt="" width="1200" height="550" /></li>
		<li class="church-item"><img src="../img/3.jpg" alt="" width="1200" height="550" /></li>
	</ul>
</div>
<script type="text/javascript">
	$('#church-banner').slide();
</script>
```

## 参数

参数说明

```html

<script type="text/javascript">
	$('#church-banner').slide({
		cdTime : 3000, 		//切换时间
		controllerLeftButton : "leftButtonPath", 	//向左按钮图片地址
		controllerRightButton : "rightButtonPath"	//向右按钮图片地址
	});
</script>
```
