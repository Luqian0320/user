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
				<div id="" class="panel-main" >
					<div class="panel-main-column-small">
						<div class="panel-main-column-title"></div>
						<div class="panel-main-column-title"><h1>目标台量</h1></div>
						<div class="panel-main-column-title"><h1>实际台量</h1></div>
						<div class="panel-main-column-title"><h1>实际效率</h1></div>
					</div>
					<div class="panel-main-column-little">
						<div class="panel-main-column-title"><h1>东部C线</h1></div>
						<div class="panel-main-column-small-little"><h3>显示</h3></div>
						<div class="panel-main-column-small-little"></div>
						<div class="panel-main-column-small-little"></div>
						
					</div>
					<div class="panel-main-column-little">
						<div class="panel-main-column-title"><h1>东部D线</h1></div>
						<div class="panel-main-column-small-little"></div>
						<div class="panel-main-column-small-little"></div>
						<div class="panel-main-column-small-little"></div>
					</div>
					<div class="panel-main-column-little">
						<div class="panel-main-column-title"><h1>西部B线</h1></div>
						<div class="panel-main-column-small-little"></div>
						<div class="panel-main-column-small-little"></div>
						<div class="panel-main-column-small-little"></div>
					</div>
					<div class="panel-main-column-little">
						<div class="panel-main-column-title"><h1>西部C线</h1></div>
						<div class="panel-main-column-small-little"></div>
						<div class="panel-main-column-small-little"></div>
						<div class="panel-main-column-small-little"></div>
					</div>
					<div class="panel-main-column-little">
						<div class="panel-main-column-title"><h1>合计</h1></div>
						<div class="panel-main-column-small-little"></div>
						<div class="panel-main-column-small-little"></div>
						<div class="panel-main-column-small-little"></div>
					</div>
				</div>
				<!-- 结束 -->
				<!-- 底部盒子 -->
				<div class="panel-main-footer">
					<div class="show-button">
							
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
	  @import "../../assets/css/pub.css";
		@import "../../assets/css/produce.css";
</style>
