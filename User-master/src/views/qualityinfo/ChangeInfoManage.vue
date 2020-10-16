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
				<div class="panel-main" >
					<div class="Table_style">
						<el-table
						    :data="tableData"
							border
						    style="width: 100%"
						    :row-class-name="tableRowClassName">
						    <el-table-column
						      prop="scx"
						      label="生产线">
						    </el-table-column>
						    <el-table-column
						      prop="dd"
						      label="断点">
						    </el-table-column>
						    <el-table-column
						      prop="PAA"
						      label="PAA">
						    </el-table-column>
							<el-table-column
							  prop="PTR"
							  label="PTR">
							</el-table-column>
							<el-table-column
							  prop="gy"
							  label="工艺">
							</el-table-column>
							<el-table-column
							  prop="gj"
							  label="工具">
							</el-table-column>
							<el-table-column
							  prop="hj"
							  label="合计">
							</el-table-column>
						  </el-table>
					</div>
										
				</div>
				<!-- 结束 -->
				<!-- 底部盒子 -->
				<div class="panel-main-footer">
					
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				tableData: [{
					scx:'东部C线',
					dd:'显示',
					PAA:'显示',
					PTR:'显示',
					gy:'显示',
					gj:'显示',
					hj:'显示'					
				},
				{
					scx:'东部C线',
					dd:'显示',
					PAA:'显示',
					PTR:'显示',
					gy:'显示',
					gj:'显示',
					hj:'显示'					
				},
				{
					scx:'东部C线',
					dd:'显示',
					PAA:'显示',
					PTR:'显示',
					gy:'显示',
					gj:'显示',
					hj:'显示'					
				},
				{
					scx:'东部C线',
					dd:'显示',
					PAA:'显示',
					PTR:'显示',
					gy:'显示',
					gj:'显示',
					hj:'显示'					
				},
				{
					scx:'合计',
					dd:'显示',
					PAA:'显示',
					PTR:'显示',
					gy:'显示',
					gj:'显示',
					hj:'显示'					
				}
				
					
					
				]
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
			tableRowClassName({row, rowIndex}) {
			        if (rowIndex === 1) {
			          return 'warning-row';
			        } else if (rowIndex === 3) {
			          return 'success-row';
			        }
			        return '';
			      }
			
		}
	}
</script>

<style >
		@import "../../assets/css/pub.css";
		@import "../../assets/css/quality.css";
</style>

