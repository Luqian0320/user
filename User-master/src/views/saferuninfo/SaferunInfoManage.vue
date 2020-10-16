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
							 <div class="up">
								 <button type="button" class="btn-cross">1</button>
								 <button type="button" class="btn-cross">2</button>
								 <button type="button" class="btn-cross">3</button>
								 <button type="button" class="btn-cross">4</button>
								 <button type="button" class="btn-cross">5</button>
								 <button type="button" class="btn-cross">6</button>
								 </div>
							  <div class="left">
								  <button type="button" class="btn-cross">7</button>
								  <button type="button" class="btn-cross">8</button>
								  <button type="button" class="btn-cross">14</button>
								  <button type="button" class="btn-cross">15</button>
								  <button type="button" class="btn-cross">21</button>
								  <button type="button" class="btn-cross">22</button>
								 
							  </div>
							  <div class="middle">
								<button type="button" class="btn-cross">9</button>
								<button type="button" class="btn-cross">10</button>
								<button type="button" class="btn-cross">11</button>
								<button type="button" class="btn-cross">16</button>
								<button type="button" class="btn-cross">17</button>
								<button type="button" class="btn-cross">18</button>
								<button type="button" class="btn-cross">23</button>
								  <button type="button" class="btn-cross">24</button>
								  <button type="button" class="btn-cross">25</button>
								 
							  </div>
							  <div class="right">
								  <button type="button" class="btn-cross">12</button>
								  <button type="button" class="btn-cross">13</button>
								  <button type="button" class="btn-cross">19</button>
								  <button type="button" class="btn-cross">20</button>
								  <button type="button" class="btn-cross">26</button>
								  <button type="button" class="btn-cross">27</button>
							  </div>
							  <div class="down">
								<button type="button" class="btn-cross">28</button>
								<button type="button" class="btn-cross">29</button>
								<button type="button" class="btn-cross">30</button>   
							  </div>
						   </div>
						   <!-- 安全绿十字end -->
							   <!-- 说明开始 -->
						   <div class="explain">
							   <div class="rem">说明Remark：</div>
							   <div class="rem"><button type="button" class="btn-ex1"></button>绿色Green：无事故No incident</div>   
							   <div class="rem"><button type="button" class="btn-ex2"></button>灰色Grey ：险肇事故Near miss case </div> 
							  <div class="rem"><button type="button" class="btn-ex3"></button>蓝色Blue ：急救事故 First aid case</div>
							  <div class="rem"><button type="button" class="btn-ex4"></button>黄色Yellow：可记录事故Recordable case   </div>
							  <div class="rem"><button type="button" class="btn-ex5"></button> 红色Red：损失工作日事故Lost work day case</div>

						   </div>
						   <!-- 说明结束 -->
					    </div>

								
				</div>
				<!-- 安全运行结束 -->
				<!-- 底部 -->
				
					<div class="btn">	
							<el-button type="primary" @click="jumpHxzz">返回首页</el-button>
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
