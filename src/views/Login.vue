<template>
  <div class="login-body">
    <div class="login-panel">
      <div class="login-title">用户登录</div>

      <el-form :model="formData">
        <el-form-item label="">
          <el-input placeholder="请输入用户名" v-model="formData.userName" />
        </el-form-item>
        <el-form-item label="">
          <el-input placeholder="请输入密码" v-model="formData.password" />
        </el-form-item>
        <!-- <el-form-item label="">
          <div class="check-code-panel">
            <el-input placeholder="请输入验证码" v-model="formData.checkCode" class="input-panel"/>
            <img :src="checkCodeUrl"  class="check-code" @click="changeCheckCode"/>
          </div>
        </el-form-item> -->
        <el-form-item label="">
          <el-checkbox v-model="formData.rememberMe" :label="true">
            记住我
          </el-checkbox>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" :style="{ width: '100%' }">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive , ref } from "vue";

const formData = reactive({
  userName: "",
  password: "",
  checkCode: "",
  rememberMe: "",
});

const checkCodeUrl = ref("/checkCode?"+ new Date().getTime());
const changeCheckCode = () => {
  checkCodeUrl.value = "/checkCode?"+ new Date().getTime();
}
</script>

<style lang="scss" scoped>
.login-body {
  position: relative;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover; //让图片完整展示
  background-image: url(../assets/login-bg.jpg);

  .login-panel {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    width: 350px;
    height: 300px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    box-shadow: 2px 2px 10px #ddd;

    .login-title {
      font-size: 20px;
      text-align: center;
      margin-bottom: 10px;
    }

    .check-code-panel {
      width: 100%;
      display: flex;
      align-items: center;
      .input-panel {
        flex: 1;
        margin-right: 7px;
      }
      .check-code {
        cursor: pointer;
      }
    }
  }
}
</style>
