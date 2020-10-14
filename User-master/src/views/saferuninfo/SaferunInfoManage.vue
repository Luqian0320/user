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
				
				<!-- 安全运行页面开始 -->
				<div class="panel-main-aq" >
					<div class="safe-con">
						<div class="con-lit">
							<div class="lit">
							损工事故：<button type="button" class="btn-style">0</button>起
							</div>
						</div>
						<div class="con-lit">
							<div class="lit">
							损工事故：<button type="button" class="btn-style">0</button>起
							</div>
						</div>
						<div class="con-lit">
							<div class="lit">
							损工事故：<button type="button" class="btn-style">0</button>起
							</div>
						</div>
						<div class="con-lit">
							<div class="lit">
							损工事故：<button type="button" class="btn-style">0</button>起
							</div>
						</div>
						<div class="con-lit">
							<div class="lit">
							损工事故：<button type="button" class="btn-style">0</button>起
							</div>
						</div>
						<div class="con-lit">
							<div class="lit">
							损工事故：<button type="button" class="btn-style">0</button>起
							</div>
						</div>
						<div class="con-lit">
							<div class="lit">
							损工事故：<button type="button" class="btn-style">0</button>起
							</div>
						</div>
					</div>
					
				<!-- 安全绿十字 -->
				
					    <div class="content">
					       <div class="cross">
							   <!-- <div class="before"></div>
							   <div class="after"></div> -->
							 <div class="up"></div>
							  <div class="left"></div>
							  <div class="icon"></div>
							  <div class="right"></div>
							  <div class="down"></div>
						   </div>
						   <div class="explain">
							   
						   </div>
					    </div>

									
				</div>
				<!-- 安全运行结束 -->
				<!-- 底部盒子 -->
				<div class="panel-main-footer">
					<div class="btn">	
							<el-button type="primary" @click="jumpHxzz">返回首页</el-button>
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
			},
			jumpHxzz() {
				 this.$router.push('/hxzz')
			}
		}
	}
</script>

<style >
		@import "../../assets/css/aqyx.css";
		@import "../../assets/css/pub.css";
		.btn{
			
			    position: relative;
			    display: flex;
			    justify-content: flex-end;
			    height: 2.25rem;
			    padding: 0 .1875rem;
			    margin-top: 1.1875rem;
			
		}	
</style>
