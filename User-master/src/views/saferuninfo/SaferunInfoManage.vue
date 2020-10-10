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
			<div  class="column">
				
				<!-- 安全运行页面开始 -->
				<div class="panel-main" >
					<el-row :gutter="20" type="flex"  class="row-b" justify="space-around">
					  <el-col :span="6" class="row-c">
						  <div class="grid-content bg-purple">损工事故：</div>
						  <div class="inputsc"></div>
						  </el-col>
					  <el-col :span="6" class="row-c"><div class="grid-content bg-purple">可记录事故：</div></el-col>
					  <el-col :span="6" class="row-c"><div class="grid-content bg-purple">急救事故：</div></el-col>
					  <el-col :span="6" class="row-c"><div class="grid-content bg-purple">险肇事故</div></el-col>
					</el-row>
					<el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
					  <el-col :span="6"><div class="grid-content bg-purple">相关方事故：</div></el-col>
					  <el-col :span="6"><div class="grid-content bg-purple">火险事故：</div></el-col>
					  <el-col :span="6"><div class="grid-content bg-purple">环境事故：</div></el-col>
					  
					</el-row>
				<!-- 安全绿十字 -->
					    <div class="content">
					        <div class="cross up"></div>
					        <div class="cross left"></div>
					        <div class="cross icon"></div>
					        <div class="cross right"></div>
					        <div class="cross down "></div>
					    </div>

										
				</div>
				<!-- 安全运行结束 -->
				<!-- 底部盒子 -->
				<div class="panel-main-footer">
					<div class="show-button">
							<button type="button" class="el-button--detal" onclick=javascript:jumpindex() >
								<span>返回首页</span>
							</button>													
					</div>
					<div class="btn-next">
						
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				inputs:'',
				inputk:''
			}
		},
		methods:{
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
	}
</script>

<style scoped>
		@import "../../assets/css/aqyx.css";
</style>
