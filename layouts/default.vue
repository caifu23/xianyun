<template>
  <div>
    <!-- 公共头部 -->
    <Header />
    <!-- 内容占位组件 -->
    <nuxt />
    <!-- 公共页脚 -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
ul,ol {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
  }
}
</style>
