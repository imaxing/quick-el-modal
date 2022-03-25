<template>
  <div class="app">
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    test() {
      this.QuickElModalShow({
        title: '测试标题',
        component: 'test',
        componentIsTag: true,
        showCancelButton: true
      })
    }
  }
}
</script>
