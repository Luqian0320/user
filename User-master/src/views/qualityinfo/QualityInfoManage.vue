<template>
	<div id="Sa">
		<!-- 头部盒子 -->
		<header>
			<h1>SGMW河西基地总装车间</h1>
			<div class="show-head">匠心创造 装配可调</div>
			<!--时间显示-->
			<div class="show-time">{{getdate()}}</div>
		</header>
		<!--main盒子主体部分-->
		<div class="mainbox">
			
			<!-- 左側盒子 -->
			<div class="column">
				<div class="panel-left">
					<div class="panel-left-small">
						<h1><a href="#">安全运行</a></h1>
					</div>
					<div class="panel-left-small">
						<h1><a href="scgl.html">生产管理</a></h1>
					</div>
					<div class="panel-left-small">
						<h1><a href="lzcsj.html">流转车数据</a></h1>
					</div>
					<div class="panel-left-small">
						<h1><a href="zl.html">质量</a></h1>
					</div>
					<div class="panel-left-small">
						<h1><a href="rygl.html">人员管理</a></h1>
					</div>
					<div class="panel-left-small">
						<h1><a href="nhgl.html">能耗管理</a></h1>
					</div>

					<div class="panel-left-small">
						<h1><a href="sbzt.html">设备状态</a></h1>
					</div>
				</div>
			</div>
			<!-- main -->
			<div class="column">

				<!-- 质量页面开始 -->
				<div class="panel-qua">
					<div class="qua-up">
						
					</div>
					<div class="qua-down">
						
					</div>
					
				</div> 
				<!-- 质量结束 -->
				<!-- 底部盒子 -->
				<div class="panel-main-footer">
				</div>
				
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//时间显示
			getdate() {
				var date = new Date();
				var seperatorl = "-";
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var strDate = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				var currentdate = year + "年" + month + "月" + strDate + "日";
				return currentdate;
			}
		}
	};
</script>

<style scoped>
	@import "../../assets/css/pub.css";
	@import "../../assets/css/quality.css";
	
</style>
