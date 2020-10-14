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

				<!-- 流转车数据页面开始 -->
				<div class="panel-main">
					<!-- <el-table :data="tableData.slice((currentPage4-1)*100,currentPage4*100)" style="width: 100%">
						根据当前页码和每页需要展示的条数来展示数据 -->
						
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="date" label="" width="180">
						</el-table-column>
						<el-table-column prop="drk" label="待入库" width="180">
						</el-table-column>
						<el-table-column prop="phl" label="待过线跑坏路">
						</el-table-column>
						<el-table-column prop="bhlz" label="BH流转">
						</el-table-column>
						<el-table-column prop="sjlz" label="实际流转">
						</el-table-column>
						<el-table-column prop="hj" label="合计">
						</el-table-column>
						
					</el-table>

				</div>
				<div class="pag">
				    <el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage4"
				      :page-sizes="[100, 200, 300, 400]"
				      :page-size="100"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="400">
				    </el-pagination>
				  </div>
				 
				<!-- 流转车数据结束 -->
				<!-- 底部盒子 -->
				<div class="panel-main-footer">
				</div>
				<div class="btn-next">
				     <el-date-picker
				       v-model="value1"
				       type="daterange"
				       range-separator="至"
				       start-placeholder="开始日期"
				       end-placeholder="结束日期">
				     </el-date-picker>
				   
				 <el-button round>查看</el-button>
				<el-button type="primary">返回首页</el-button>
				 					</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				 value1: '',
				tableData: [{
					date: 'CN120S',
					drk: '12',
					phl: '10',
					bhlz:'9',
					sjlz:'8',
					hj:'10'
				}, {
					date: 'CN180C',
					drk: '12',
					phl: '10',
					bhlz:'9',
					sjlz:'8',
					hj:'10'
				}, {
					date: 'CN180S',
					drk: '12',
					phl: '10',
					bhlz:'9',
					sjlz:'8',
					hj:'10'
				}, {
					date: 'CN185M',
					drk: '12',
					phl: '10',
					bhlz:'9',
					sjlz:'8',
					hj:'10'
				}]
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
	}
</script>

<style >
	@import "../../assets/css/pub.css";
	@import "../../assets/css/lzcsj.css";
</style>
