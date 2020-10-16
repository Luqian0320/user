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
						<!-- <h1><a href="#">安全运行</a></h1> -->	
						<h1><router-link :to="{name:'SaferunInfoManage'}">安全运行</router-link></h1>					
					</div>
					<div class="panel-left-small">
						<h1><router-link :to="{name:'ProduceInfoManage'}">生产管理</router-link></h1>
					</div>
					<div class="panel-left-small">
						<h1><router-link :to="{name:'TransferInfoManage'}">流转车数据</router-link></h1>
					</div>
					<div class="panel-left-small">
						<h1><router-link :to="{name:'QualityInfoManage'}">质量管理</router-link></h1>
					</div>
					<div class="panel-left-small">
						<h1><router-link :to="{name:'PersonnelInfoManage'}">人员管理</router-link></h1>
					</div>
					<div class="panel-left-small">
						<h1><router-link :to="{name:'EnergyInfoManage'}">能耗管理</router-link></h1>
					</div>
					
					<div class="panel-left-small">
				        <h1><router-link :to="{name:'EquipmentInfoManage'}">设备状态</router-link></h1>
					</div>
				</div>
			</div>
			<!-- main -->
			<div class="column">

				<!-- 质量页面责任错漏装start -->
				<div class="panel-qua-false">
					<div class="qua1">
						总装责任错漏装
					</div>
					<div class="qua-up">
						<div class="up">
							<div class="little">
								<div class="hz">东部C线</div>
								
							</div>
							<div class="little">
								<div class="hz">1</div>
							</div>
						</div>
						<div class="up">
							<div class="little">
								<div class="hz">东部D线</div>
							</div>
							<div class="little">
								<div class="hz">88.5</div>
							</div>
						</div>
						<div class="up">
							<div class="little">
								<div class="hz">西部B线</div>
							</div>
							<div class="little">
								<div class="hz">22</div>
							</div>
						</div>
						<div class="up">
							<div class="little">
								<div class="hz">西部C线</div>
							</div>
							<div class="little">
								<div class="hz">33</div>
							</div>
						</div>
						<div class="up">
							<div class="little">
								<div class="hz">合计</div>
							</div>
							<div class="little">
								<div class="hz"></div>
							</div>
						</div>
						
						
					</div>
					
					<div class="qua2">
						总装拦截问题
					</div>
					<div class="qua-dowm">
						<div class="down">
							<div class="little">
								 <div class="hz1">东部C线</div> 
								
							</div>
							<div class="little">
								<div class="hz">23</div>
							</div>
						</div>
						<div class="down">
							<div class="little">
								<div class="hz3">东部D线</div>
							</div>
							<div class="little">
								<div class="hz">2</div>
							</div>
						</div>
						<div class="down">
							<div class="little">
								<div class="hz">西部B线</div>
								
							</div>
							<div class="little">
								<div class="hz">7</div>
							</div>
						</div>
						<div class="down">
							<div class="little">
								<div class="hz">西部C线</div>
								
							</div>
							<div class="little">
								<div class="hz">7</div>
							</div>
						</div>
						<div class="down">
							<div class="little">
								<div class="hz">合计</div>
								
							</div>
							<div class="little">
								<div class="hz"></div>
							</div>
						</div>
					</div>
					
				</div> 
				<!-- 质量结束 -->
				<!-- 底部盒子 -->
				
					<div class="btn">
						 <el-button  round>日期选择</el-button>
						  <el-button  round>查看</el-button>
						  <el-button  round>查看明细</el-button>
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

<style >
	@import "../../assets/css/pub.css";
	@import "../../assets/css/false.css";
	
	.btn{
		
		    position: relative;
		    display: flex;
		    justify-content: flex-end;
		    height: 2.25rem;
		    padding: 0 .1875rem;
		    margin-top: 1.1875rem;
		
	}	
	
</style>
