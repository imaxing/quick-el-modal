<template>
  <div class="app">
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script>
import Test from './Test'
export default {
  name: 'App',
  methods: {
    test() {
      this.QuickElModalShow({
        title: '测试标题',
        component: Test,
        showCancelButton: true,
        // component: '123',
        // component: h => h('el-form', { props: { model: {} } }, [h('el-form-item', [h('el-input')])]),
        buttons: [
          { text: '测试', callback: 'handleSubmit', confirm: true },
          {
            text: '提交',
            callback: ({ modal, component }) => {
              modal.title = '哈哈哈'
              console.log(component)
            }
          }
        ]
      })
    }
  }
}
</script>
