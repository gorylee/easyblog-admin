<template>
  <div class="login-body">
    <div class="login-panel">
      <div class="login-title">用户登录</div>

      <el-form :model="formData" :rules="rules" ref="formDataRef">
        <el-form-item prop="userName">
          <el-input
            placeholder="请输入用户名"
            v-model="formData.userName"
            size="large"
          >
            <template #prefix>
              <span class="iconfont icon-account"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="formData.password"
            size="large"
          >
            <template #prefix>
              <span class="iconfont icon-password"></span>
            </template>
          </el-input>
        </el-form-item>
        <!-- <el-form-item prop="checkCode">
          <div class="check-code-panel">
            <el-input placeholder="请输入验证码" v-model="formData.checkCode" class="input-panel" size="large"/>
            <img :src="checkCodeUrl"  class="check-code" @click="changeCheckCode"/>
          </div>
        </el-form-item> -->
        <el-form-item label="">
          <el-checkbox v-model="formData.rememberMe" :label="true">
            记住我
          </el-checkbox>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" :style="{ width: '100%' }" @click="login">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive, ref } from "vue";
const { proxy } = getCurrentInstance();

const api = {
  checkCode: "/checkCode?",
  login: "/sys/login"
};
const checkCodeUrl = ref(api.checkCode);
const changeCheckCode = () => {
  checkCodeUrl.value = api.checkCode + "?" + new Date().getTime();
};

const formDataRef = ref();
const formData = reactive({
  userName: "",
  password: "",
  checkCode: "",
  rememberMe: "",
});
const rules = {
  userName: [
    {
      required: true,
      message: "请输入用户名",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
    },
  ],
};
const login = () => {
  formDataRef.value.validate(async (valid) => {
    if (!valid) {
      return;
    }
    console.log(proxy)
    let result = await proxy.Request(
      {
        url: api.login,
        params: {
          userName: formData.userName,
          password: formData.password
        }
      }
    )
  });
};
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
    background: rgba(255, 255, 255, 0.8);
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
