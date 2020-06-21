<template>
  <view>
    <view class="button-demo">
      <u-button
        :ripple="true"
        @click="getToken"
      >获取token</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getToken() {
      uni.setStorageSync("token", +new Date());
    }
  }
};
</script>

<style lang="scss" scoped>
</style>