# 快捷弹窗

### 使用方式

```vue
import Vue from 'vue'
import QuickElModal from '@iamgx/quick-el-modal'

// 基础调用
QuickElModal({
  title: '测试标题',
  width: 1000,
  component: '提交'
})


// 调用 h
QuickElModal({
  title: '测试标题',
  width: 1000,
  component: h => h('h1', '提交')
})


// 传入vue组件
QuickElModal({
  title: '测试标题',
  component: { render: h => h('h1', '哈哈哈') }
})


// 传入按钮
QuickElModal({
  title: '测试标题',
  component: {
    render: h => h('h1', '哈哈哈'),
    methods: {
      handleClose() {
        this.$emit('update:visible', false)
      }
    }
  },
  buttons: [{ text: '手动关闭', confirm: true, callback: 'handleClose' }]
})



QuickElModal({
  title: '测试标题',
  component: {
    render: h => h('h1', '哈哈哈'),
    methods: {
      handleClose() {
        // 支持修改数据, this.$emit('')
        // 'update:loading',
        // 'update:buttons',
        // 'update:visible',
        // 'update:fullscreen',
        // 'update:title',
        // 'update:disabled-keys', 禁用关闭按钮 ['handleClose']
        // 'update:loading-keys' loading关闭按钮 ['handleClose']
      }
    }
  },
  buttons: [{ text: '手动关闭', confirm: true, name: 'handleClose', callback: 'handleClose' }]
})

```


### live demo

[![Edit quickel-modal-example (forked)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/quickel-modal-example-forked-59h7kp?fontsize=14&hidenavigation=1&theme=dark)