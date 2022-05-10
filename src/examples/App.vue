<template>
  <div class="app">
    {{ $store.state }}
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    test() {
      this.quickModal({
        title: '测试标题',
        component: h => h('test'),
        buttons: [{ text: 'log', callback: 'handleSubmit' }]
      })
    }
  }
}
</script>
