<template>
  <view>
    <view class="button-demo">
      <u-button
        :ripple="true"
        @click="goCenter"
      >按钮组件演示</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    console.log(this.$Route);
    this.randomMusic();
  },
  methods: {
    goCenter() {
      this.$Router.pushTab({ name: "center" });
    },
    async randomMusic() {
      let { data: res } = await this.$api.random_music({
        params: {
          sort: "热歌榜",
          format: "json"
        }
      });
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>