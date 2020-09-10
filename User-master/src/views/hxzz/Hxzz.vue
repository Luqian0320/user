<template>
	<header>
		<h1>SGMW河西基地总装车间数字化管理系统</h1>
		<div class="show-head">匠心创造 装配可调</div>
		<!--时间显示-->
		<div class="show-time">{{getdate()}}</div>
	
	</header>
</template>
<script>
	// function jump(){
	// 	window.location.href="aqyx.html";
	// }
	export default{
	data(){
		
	},
	methods:{
		getdate(){
				var date =new Date();
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
	},
	};
</script>

<style scoped>
	@import "../../assets/css/index.css";

</style>