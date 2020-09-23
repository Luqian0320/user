<template>
	<div id="tem">
	<header>
		<h1>SGMW河西基地总装车间数字化管理系统</h1>
		<div class="show-head">匠心创造 装配可调</div>
		<!--时间显示-->
		<div class="show-time">{{getdate()}}</div>
	
	</header>
	<!--main盒子主体部分-->
	<div class="mainbox">
		<!--left box-->
		<div class="column">
	
		</div>
		<!--center box-->
		<div class="column">
			<div class="panel">
				<div class="panel-center">
					<div class="panel-column">
						<div class="panel-column-small">
							<div class="panel-column-small-title">				
							</div>
							<div class="panel-column-small-title"><h2>目标</h2>
								
							</div>
							<div class="panel-column-small-title"><h2>实际</h2></div>
						</div>
					</div>
					<div class="panel-column">
						<div class="panel-column-small">
							<div class="panel-column-small-title"><h1>安全</h1></div>
							<div class="panel-column-small-little"><h3>0</h3></div>
							<div class="panel-column-small-little"><h3>0</h3></div>
						</div>
					</div>
					<div class="panel-column">
						<div class="panel-column-small">
							<div class="panel-column-small-title"><h1>生产</h1></div>
							<div class="panel-column-small-little"><h3>1231</h3></div>
							<div class="panel-column-small-little"><h3>1011</h3></div>
						</div>
					</div>
					<div class="panel-column">
						<div class="panel-column-small">
							<div class="panel-column-small-title"><h1>流转车</h1></div>
							<div class="panel-column-small-little"><h3>345</h3></div>
							<div class="panel-column-small-little"><h3>223</h3></div>
						</div>
					</div>
					<div class="panel-column">
						<div class="panel-column-small">
							<div class="panel-column-small-title"><h1>质量</h1></div>
							<div class="panel-column-small-little"><h3>97%</h3></div>
							<div class="panel-column-small-little"><h3>78.5%</h3></div>
						</div>
					</div>
					<div class="panel-column">
						<div class="panel-column-small">
							<div class="panel-column-small-title"><h1>人员</h1></div>
							<div class="panel-column-small-little"><h3>1191</h3></div>
							<div class="panel-column-small-little"><h3>1191</h3></div>
						</div>
					</div>
					<div class="panel-column">
						<div class="panel-column-small">
							<div class="panel-column-small-title"><h1>能耗</h1></div>
							<div class="panel-column-small-little">
								 <template slot-scope="scope">
								        <i class="el-icon-warning-outline"></i>
								      </template>
							</div>
							<div class="panel-column-small-little">
								<template slot-scope="scope">
								       <i class="el-icon-warning"></i>
								     </template>
							</div>
						</div>
					</div>
					<div class="panel-column">
						<div class="panel-column-small">
							<div class="panel-column-small-title"><h1>设备</h1></div>
							<div class="panel-column-small-little"><h3>1.0%</h3></div>
							<div class="panel-column-small-little"><h3>1.5%</h3></div>
						</div>
					</div>s
				</div>
				<div class="panel-footer">
				</div>
			</div>
			<!--底部盒子-->
			<div class="panel-2">
				<!-- <div class="show-select-time">
					<div class="block">
					    <!-- <span class="demonstration">带快捷选项</span> 
					    <el-date-picker
					      v-model="value2"
					      type="daterange"
					      align="right"
					      unlink-panels
					      range-separator="至"
					      start-placeholder="开始日期"
					      end-placeholder="结束日期"
					      :picker-options="pickerOptions">
					    </el-date-picker>
					  </div>
				</div> -->
			<div class="show-button">
				 <el-button type="primary" @click="find">查看明细</el-button>				
				</div>				
			</div>
		</div>
		<!--right box-->
		<div class="column">3</div>
	</div>
	</div>
</template>
<script>
	
	export default{
	data(){
		return {}
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
			},
			find(){
			this.$router.push('/saferun')
			}
	},
	};
</script>

<style scoped>
	@import "../../assets/css/index.css";

</style>