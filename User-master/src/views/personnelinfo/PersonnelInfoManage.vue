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
			<div  class="column">
				
				<!-- 页面开始 -->
				<div class="panel-main-per" >
					<div class="per">
						<div class="per1">
                           SGMW
						</div>
					</div>
					<div class="per">
						<div class="per-panel-title">
							编制
						</div>
						<div class="per-panel">
							 11
						</div>
						<div class="per-panel-title">
							实际人数
						</div>
						<div class="per-panel">
							20
						</div>
						<div class="per-panel-title">
							可用人数
						</div>
						<div class="per-panel">
							16
						</div>
						<div class="per-panel-title">
							出勤率
						</div>
						<div class="per-panel">
							80%
						</div>
						<div class="per-panel-title">
							应到
						</div>
						<div class="per-panel">
							10
						</div>
						<div class="per-panel-title">
							实到
						</div>
						<div class="per-panel">
							10
						</div>
					</div>
					<div class="per">
						<hr size="4" color="yellow" width="80%" align="center">
						<div class="per2">
							外包
						</div>
					</div>
					<div class="per">
						<div class="per-panel-title">
							编制
						</div>
						<div class="per-panel">
							 11
						</div>
						<div class="per-panel-title">
							实际人数
						</div>
						<div class="per-panel">
							20
						</div>
						<div class="per-panel-title">
							可用人数
						</div>
						<div class="per-panel">
							16
						</div>
						<div class="per-panel-title">
							出勤率
						</div>
						<div class="per-panel">
							80%
						</div>
						<div class="per-panel-title">
							应到
						</div>
						<div class="per-panel">
							10
						</div>
						<div class="per-panel-title">
							实到
						</div>
						<div class="per-panel">
							10
						</div>
					</div>
					
				
					    

										
				</div>
				<!-- 结束 -->
				<!-- 底部盒子 -->
				<!-- <div class="panel-main-footer">
					
				</div> -->
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
			},
			jumpHxzz() {
				 this.$router.push('/hxzz')
			}
		}
	}
</script>

<style scoped>
		@import "../../assets/css/pub.css";
		@import "../../assets/css/person.css";
</style>
