<template>
	<view class="body">
		<view class="navbar_wrapper">
			<view class="navbar_status"></view>
			<view class="navbar">
				<view class="navbar_tab">
					<scroll-view scroll-x="true" class="navbar_tab_scroll">
						<template v-for="(item, index) in tabList">
							<view class="navbar_tab_item" :class="{'navbar_tab_item_selected': index === tabIndex}"
								@click="bindTabChange(index)">
								{{ item }}
							</view>
						</template>
					</scroll-view>
				</view>
				<view class="navbar_operate">
					<view class="operate_icon_panel"><i class="iconfont icon-jiahao operate_icon"></i></view>
					<view class="operate_icon_panel"><i class="iconfont icon-sousuo operate_icon"></i></view>
				</view>
			</view>
		</view>
		<view class="template_list">
			<swiper class="swiper" :current="tabIndex" @change="bindSwiperChange">
				<template v-for="(item,index) in tabList">
					<swiper-item>
						<scroll-view scroll-y="true" class="swiper_item_scroll">
							<template v-for="item in 10">
								<view class="swiper_item" @click="$dlhc.route('/pages/index/current')">
									<view class="swiper_item_header">
										<view class="swiper_item_header_title">加速器登录</view>
										<view class="swiper_item_header_time">2021-12-4</view>
									</view>
									<view class="swiper_item_tag">
										<view class="swiper_item_tag_item">
											
										</view>
									</view>
								</view>
							</template>
						</scroll-view>
					</swiper-item>
				</template>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				tabList: ["全部", "注册登录", "消息", "个人中心", "设置", "首页", "分类", "其他"]
			}
		},
		onLoad() {
			this.$api.fetchMenu({}).then(res => {
				console.log(res)
			})
		},
		methods: {
			navigateTo() {
				this.$dlhc.route('/pages/index/current')
			},

			/**
			 * 点击顶部tab
			 * @param {Object} e
			 */
			bindTabChange(e) {
				this.tabIndex = Number(e)
			},

			/**
			 * 滑动滑块
			 * @param {Object} e
			 */
			bindSwiperChange(e) {
				this.tabIndex = e.detail.current
			}

		}
	}
</script>
<style lang="scss" scoped>

	.navbar_wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: $uni-color-primary;

		.navbar_status {
			height: var(--status-bar-height);
		}

		.navbar {
			color: #FFFFFF;
			height: 44px;
			display: flex;
			align-items: center;
			background-color: $uni-color-primary;

			.navbar_tab {
				flex: 1;
				height: 100%;
				font-weight: bold;

				.navbar_tab_scroll {
					height: 100%;
					position: relative;
					white-space: nowrap;
					width: calc(100vw - 200rpx);

					&:before {
						bottom: 0;
						content: "";
						width: 100%;
						z-index: 100;
						height: 10px;
						position: absolute;
						background-color: $uni-color-primary;
					}
				}

				.navbar_tab_item {
					height: 100%;
					font-size: 34rpx;
					line-height: 40px;
					margin-left: 40rpx;
					display: inline-block;
					transition: all .6s ease;
					color: rgba($color: #ffffff, $alpha: .7);

					&.navbar_tab_item_selected {
						color: #FFFFFF;
						font-size: 32rpx;
					}
				}
			}

			.navbar_operate {
				display: flex;
				margin-right: 10rpx;

				.operate_icon_panel {
					padding: 0 30rpx;
					position: relative;

					&:before {
						top: 50%;
						right: 0;
						content: "";
						width: 2rpx;
						height: 65%;
						opacity: .5;
						position: absolute;
						background-color: #FFFFFF;
						transform: translateY(-50%);
					}

					&:last-child:before {
						display: none;
					}

					.operate_icon {
						font-size: 34rpx;
						font-weight: bold;
					}
				}
			}
		}
	}

	.template_list {
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
		height: calc(100vh - (var(--status-bar-height) + 44px));

		.swiper {
			height: 100%;
			
			.swiper_item_scroll {
				background-color: $uni-bg-color-grey;
				height: calc(100vh - (var(--status-bar-height) + 44px));
				
				.swiper_item {
					padding: 40rpx;
					margin-bottom: 10rpx;
					background-color: #FFFFFF;
					
					.swiper_item_header {
						display: flex;
						margin-bottom: 10rpx;
						align-items: center;
						justify-content: space-between;
						
						.swiper_item_header_title {
							font-size: 32rpx;
						}
						
						.swiper_item_header_time {
							font-size: 30rpx;
							color: $uni-color-primary;
						}
					}
				}
			}
		}
	}

	.list_scroll {
		height: calc(100vh - (var(--status-bar-height) + 44px));
	}
</style>
