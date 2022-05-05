<script>
export default {
  name: 'QuickElModal',
  data: () => ({
    title: null,
    width: '50%',
    showClose: true,
    fullscreen: false,
    closeOnClickModal: true,
    closeOnPressEscape: true,
    modalAppendToBody: false,
    animation: false,
    showCancelButton: false,
    appendToBody: true,
    modal: true,
    center: false,
    visible: false,
    beforeClose: null,
    customClass: '',
    component: null,
    componentIsTag: false,
    destroy: null,
    props: {},
    on: {},
    buttonLoadingKeys: [],
    buttonDisabledKeys: [],
    buttons: [],
    callback: null
  }),
  mounted() {
    window.onhashchange = () => {
      this.visible = false
    }
  },
  beforeDestroy() {
    window.onhashchange = null
  },
  methods: {
    onClose() {
      const destroyState = () => {
        this.visible = false
        this.on && this.on.close && this.on.close()
        const timer = setTimeout(() => {
          this.buttons = []
          this.buttonDisabledKeys = []
          this.buttonDisabledKeys = []
          this.loading = false
          this.customClass = ''
          this.title = ''
          this.component = null
          this.destroy && this.destroy()
          clearTimeout(timer)
        }, 400)
      }
      this.beforeClose ? this.beforeClose(destroyState) : destroyState()
    },
    async onButtonClicked(button) {
      if (!button.callback) return

      if (button.confirm) {
        const state = window.confirm(`是否确认${button.text}?`)
        if (!state) return
      }

      const child =
        (typeof this.component === 'function' ? this.$children[0].$children.slice(-1)[0] : this.$refs.modalChild) || {}

      if (typeof button.callback === 'string') {
        child && child[button.callback] && child[button.callback]({ modal: this })
        return
      }
      if (typeof button.callback === 'function') {
        button.callback && button.callback({ modal: this, component: child })
      }
    }
  },
  render(h) {
    let {
      visible,
      closeOnClickModal,
      closeOnPressEscape,
      customClass,
      buttonLoadingKeys,
      buttonDisabledKeys,
      modalAppendToBody,
      showCancelButton,
      appendToBody,
      buttons,
      loading,
      fullscreen,
      title,
      props,
      animation,
      width,
      center,
      showClose,
      callback,
      component,
      onButtonClicked,
      componentIsTag,
      onClose,
      on,
      modal
    } = this

    const renderHeader = () => [
      h('strong', { slot: 'title' }, title),
      h('span', { slot: 'title' }, [
        h('i', {
          class: `${this.fullscreen ? 'el-icon-news' : 'el-icon-full-screen'} fullscreen-icon`,
          on: { click: () => (this.fullscreen = !this.fullscreen) }
        }),
        showClose && h('i', { on: { click: () => (this.visible = false) }, class: 'el-icon-close' })
      ])
    ]

    const renderFooter = () => {
      const cancelButton = showCancelButton
        ? [{ text: '取消', type: 'default', callback: () => (this.visible = false) }]
        : []

      return [...buttons, ...cancelButton].map((button, index) =>
        h(
          'el-button',
          {
            slot: 'footer',
            key: button.name || index,
            props: {
              type: button.type || 'primary',
              icon: button.icon,
              size: button.size || 'medium',
              loading: loading || button.loading || buttonLoadingKeys.includes(button.name),
              disabled: button.disabled || buttonDisabledKeys.includes(button.name)
            },
            on: { click: () => onButtonClicked(button) }
          },
          button.text
        )
      )
    }

    const renderContent = () => {
      const events = {
        callback: params => callback && callback(params || this),
        'update:loading': v => (this.loading = v),
        'update:buttons': v => (this.buttons = v),
        'update:visible': v => (this.visible = v),
        'update:fullscreen': v => (this.fullscreen = v),
        'update:title': v => (this.title = v),
        'update:disabled-keys': v => (this.buttonDisabledKeys = v),
        'update:loading-keys': v => (this.buttonLoadingKeys = v),
        ...on
      }
      if (typeof component === 'function') return component(h, this)
      if (typeof component === 'string') {
        return componentIsTag ? h(component, { props, on: events }) : component
      }

      return h(component, { ref: 'modalChild', props, on: events })
    }

    return h(
      'el-dialog',
      {
        props: {
          title,
          width,
          center,
          visible,
          showClose: false,
          modal,
          customClass: [customClass, 'quick-el-modal', animation ? 'animation' : ''].join(' '),
          closeOnClickModal,
          closeOnPressEscape,
          modalAppendToBody,
          appendToBody,
          fullscreen,
          destroyOnClose: true
        },
        on: { ...on, close: onClose }
      },
      [renderHeader(), renderContent(), renderFooter()]
    )
  }
}
</script>

<style>
.quick-el-modal.animation {
  transition: width cubic-bezier(0, 0, 0.2, 1) 0.3s;
}
.quick-el-modal .el-dialog__header {
  padding: 0 20px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
}
.quick-el-modal .el-dialog__footer {
  padding: 0 20px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #f0f0f0;
}

.el-dialog.is-fullscreen {
  overflow: hidden;
}
.quick-el-modal.el-dialog.is-fullscreen .el-dialog__body {
  height: calc(100% - 170px);
  overflow-y: auto;
}
.quick-el-modal .el-dialog__header i {
  color: #909399;
  cursor: pointer;
}
.quick-el-modal .el-dialog__header i:hover {
  color: #000;
}
.quick-el-modal .el-dialog__header .el-icon-close {
  margin-left: 10px;
}
</style>
