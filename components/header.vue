<template>
  <!-- 公共头部组件 -->
  <div class="header-wrap">
      <el-row type="flex" class="header" justify="space-between">
        <!-- logo  -->
        <div class="logo">
          <nuxt-link to="/">
            <img src="/logo.jpg" alt="">
          </nuxt-link>
        </div>
        <!-- 菜单栏 -->
        <el-row class="navs" type="flex">
          <nuxt-link to="/"> 首页 </nuxt-link>
          <nuxt-link to="/post"> 旅游攻略 </nuxt-link>
          <nuxt-link to="/hotel"> 酒店 </nuxt-link>
          <nuxt-link to="/air"> 国内机票 </nuxt-link>
        </el-row>
        <!-- 登录/注册 -->
        <div class="login">
          <nuxt-link to="/user/login" v-if="!$store.state.user.userInfo.user"> 登录 / 注册 </nuxt-link>
          <el-dropdown v-if="$store.state.user.userInfo.user">
            <span class="el-dropdown-link">
              <img :src=" $axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" alt="">
              {{ $store.state.user.userInfo.user.nickname }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  .header-wrap {
    min-width: 1000px;
    height: 60px;
    border-bottom: 1px solid #eee;
    box-shadow: 0 2px 2px #eee;
    // box-sizing: border-box;
  }
  .header {
    width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
    line-height: 60px;
    .logo {
      img {
        display: block;
        height: 60px;
      }
    }
    .navs {
      flex: 1;
      height: 60px;
      a {
          display: block;
          height: 60px;
          box-sizing: border-box;
          padding: 0 20px;
          &.nuxt-link-exact-active {
            background-color: #409eff;
            color: #fff;
            &:hover {
              color: #fff;
            }
          }
          &:hover {
            border-bottom: 3px solid #409eff;
            color: #409eff;
          }
      }
    }
    .login {
      a {
        &:hover {
          color: #409eff;
        }
      }
    }
  }

  .el-dropdown-link {
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
</style>