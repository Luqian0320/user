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
						<h1>
							<router-link :to="{name:'SaferunInfoManage'}">安全运行</router-link>
						</h1>
					</div>
					<div class="panel-left-small">
						<h1>
							<router-link :to="{name:'ProduceInfoManage'}">生产管理</router-link>
						</h1>
					</div>
					<div class="panel-left-small">
						<h1>
							<router-link :to="{name:'TransferInfoManage'}">流转车数据</router-link>
						</h1>
					</div>
					<div class="panel-left-small">
						<h1>
							<router-link :to="{name:'QualityInfoManage'}">质量管理</router-link>
						</h1>
					</div>
					<div class="panel-left-small">
						<h1>
							<router-link :to="{name:'PersonnelInfoManage'}">人员管理</router-link>
						</h1>
					</div>
					<div class="panel-left-small">
						<h1>
							<router-link :to="{name:'EnergyInfoManage'}">能耗管理</router-link>
						</h1>
					</div>

					<div class="panel-left-small">
						<h1>
							<router-link :to="{name:'EquipmentInfoManage'}">设备状态</router-link>
						</h1>
					</div>
				</div>
			</div>
			<!-- main -->
			<div class="column">

				<!-- 页面开始 -->
				<div class="panel-main-eqm">
					<div class="det">
						<div class="det-panel">

							<div class="panel-up">

								<!-- 2.为Echarts准备一个大小具有宽高的DOM -->
								<div class="up" id="main-up">

								</div>
							</div>
						</div>

						<div class="det-panel">
							<div class="panel-le">
								<div class="left" id="main-eastC">

								</div>
								<div class="left" id="main-eastD">

								</div>
							</div>
							<div class="panel-rg">
								<div class="right" id="main-westB">

								</div>
								<div class="right" id="main-westC">

								</div>
							</div>
						</div>

					</div>

				</div>
				<!-- 结束 -->

			</div>

		</div>
	</div>
</template>

<script>
	// 1.导入echarts
	import echarts from 'echarts'
	// import _ from 'lodash'
	export default {
		data() {
			return {}
		},
		created() {

		},
		// mounted测试版  //此时页面上的元素已经被渲染完毕了
		mounted() {

			// 3.基于准备好的dom，初始化echarts实例
			var upChart = echarts.init(document.getElementById('main-up'))
			var leftChart1 = echarts.init(document.getElementById('main-eastC'))
			var leftChart2 = echarts.init(document.getElementById('main-eastD'))
			var rightChart1 = echarts.init(document.getElementById('main-westB'))
			var rightChart2 = echarts.init(document.getElementById('main-westC'))
			// 4.指定图表的配置项和数据
			var option_up = {
				title: {
					text: '总装设备停线情况汇总'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: []
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					data: ["指标", "午累", "1月", "2月", "3月"]
				},

				yAxis: {
					type: 'value'
				},
				series: [{
					name: '指标停线率',
					type: 'bar',
					stack: '总量',
					data: [5, 20, 36, 10, 10, 20]
				}],
				color: ['pink']
			}
			var option_eastC = {
				title: {
					text: '东部C线设备停线'
				},
				tooltip: {
					trigger: 'axis'
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				grid: {
					left: '4%',
					right: '7%',
					bottom: '0',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					data: ["指标", "午累", "1月", "2月", "3月"]
				},
				yAxis: {
					type: 'value',
					show: false
				},
				series: [{
					name: '指标停线率',
					data: [5, 50, 36, 10, 10, 20],
					type: 'bar'
				}],
				color: ['red']
			}
			var option_eastD = {
				title: {
					text: '东部D线设备停线'
				},
				tooltip: {
					trigger: 'axis'
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				grid: {
					left: '4%',
					right: '7%',
					bottom: '0',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					data: ["指标", "午累", "1月", "2月", "3月"]
				},
				yAxis: {
					type: 'value',
					show: false
				},
				series: [{
					name: '指标停线率',
					data: [5, 50, 36, 10, 10, 20],
					type: 'bar'
				}],
				color: ['blue']
			}
			var option_westB = {
				title: {
					text: '西部B线设备停线'
				},
				tooltip: {
					trigger: 'axis'
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				grid: {
					left: '4%',
					right: '7%',
					bottom: '0',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					data: ["指标", "午累", "1月", "2月", "3月"]
				},
				yAxis: {
					type: 'value',
					show: false
				},
				series: [{
					name: '指标停线率',
					data: [5, 50, 36, 10, 10, 20],
					type: 'bar'
				}],
				color: ['yellow']
			}
			var option_westC = {
				title: {
					text: '西部C线设备停线'
				},
				tooltip: {
					trigger: 'axis'
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				grid: {
					left: '4%',
					right: '7%',
					bottom: '0',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					data: ["指标", "午累", "1月", "2月", "3月"]
				},
				yAxis: {
					type: 'value',
					show: false
				},
				series: [{
					name: '指标停线率',
					data: [5, 50, 36, 10, 10, 20],
					type: 'bar'
				}],
				color: ['green']
			}
			// 5.使用刚指定的配置项和数据显示图表。
			upChart.setOption(option_up);
			leftChart1.setOption(option_eastC);
			leftChart2.setOption(option_eastD);
			rightChart1.setOption(option_westB);
			rightChart2.setOption(option_westC);


		},
		// mounted正式版，根据实际情况改下//此时页面上的元素已经被渲染完毕了
		// async mounted(){
		// 	var myChart =echarts.init(document.getElementById('main-up'))
		// 	const {data:res}=await this.$http.get('#####')
		// 	if(res.meta.status!==200){
		// 		return this.$message.error('获取数据失败')
		// 	}
		// 	// 准备数据和配置项,data数据和数据option合并并返回新的对象
		// 	const result = _.merge(res.data,this.options)
		// 	//展示数据
		// 	myChart.setOption(result)

		// }

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
			},

			jumpHxzz() {
				this.$router.push('/hxzz')
			}

		}
	}
</script>


<style>
	@import "../../assets/css/pub.css";
	@import "../../assets/css/equipment.css";
</style>
