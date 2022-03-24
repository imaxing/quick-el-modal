# quick el modal

> 在vuejs后台系统中, 经常使用到弹窗打开指定组件的操作, 每次要写一堆标签, 一堆状态控制, template显得非常臃肿, 我认为弹窗和弹窗内的业务逻辑应该是解耦的, 作为弹窗只负责展示组件, 业务都应该拆分出来
> 为了解决我开发中的这个痛点, 开发了快速创建弹窗的一个工具函数, 方便后台业务开发

## 安装
```
npm i @iamgx/quick-el-modal
```

## 使用
```javascript
import ElQuickModal from '@iamgx/quick-el-modal'

// 简单用法
ElQuickModal({ title: '这是标题', component: '这是内容' })
```

## 弹窗内容
```javascript

// 使用render函数渲染自定义组件
ElQuickModal({  title: '这是标题', component: h => h('h1', '这是内容') })

// 渲染import组件
import Example from 'path/to/example.vue'
ElQuickModal({  title: '这是标题', component: Example })

ElQuickModal({  title: '这是标题', component: require( 'path/to/example.vue').default })

// 渲染vue组件对象
const CusomComponent = { name: 'CustomCom', render: h => h('el-button', 'el button!') }
ElQuickModal({ title: '这是标题',  component: CusomComponent })

```


## 配置
- 参数传递时使用驼峰写法

|  参数 | 说明  | 类型 |  默认值
|  ----  | ----  | ----  | ----  |
| title  | Modal 的标题 | string | - |
| component  | Dialog显示的内容 | string/VNode/h函数 | Null |
| props  | component渲染组件的时候透传给组件的参数 | object | {} |
| on  | 渲染组件内部派发的事件, 通过on接收 | object | {} |
| width  | Modal 的宽度 | string | 50% |
| fullscreen  | 是否为全屏 Dialog | boolean | false |
| modal  | 是否需要遮罩层 | boolean | true |
| modal-append-to-body  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean | true |
| append-to-body  | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean | false |
| custom-class  | Dialog 的自定义类名 | string | - |
| center  | 是否对头部和底部采用居中布局 | boolean | false |
| show-close  | 是否显示关闭图标 | boolean | true |
| animation  | 切换全屏的时候是否需要动画 | boolean | false |
| buttons  | Dialog的按钮, 为空时不显示footer | array: [{text, callback, name, confirm}] | [] |
| buttonLoadingKeys  | 需要loading的按钮的name值 | array | [] |
| buttonDisabledKeys  | 需要禁用的按钮的name值 | array | [] |
| showCancelButton | 是否显示取消按钮 | boolean| false |


## live demo(结合一个打开表单并提交到后台然后关闭弹窗的一个业务场景)
[![Edit quickel-modal-example (forked)](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/quickel-modal-example-forked-59h7kp?fontsize=14&hidenavigation=1&theme=dark)


## 其他工具
- [quick-el-drawer](https://github.com/imaxing/quick-el-drawer)
- [quick-drawer(an-design-vue版本)](https://github.com/imaxing/quick-drawer)
- [quick-modal(an-design-vue版本)](https://github.com/imaxing/quick-modal)
- [element-pro-layout](https://github.com/imaxing/element-pro-layout)