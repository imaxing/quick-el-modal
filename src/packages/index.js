import QuickElModal from './quick-el-modal'
export default {
  install(Vue, opts = {}) {
    const { name = 'quickModal', prototype = {} } = opts

    for (const key in prototype) {
      Vue.prototype[key] = prototype[key]
    }

    Vue.prototype[name] = options => {
      const ModalInstance = Vue.extend(QuickElModal)

      const instance = new ModalInstance({
        data: {
          ...options,
          destroy: () => instance.$el.remove()
        }
      })

      instance.$mount()
      document.body.appendChild(instance.$el)
      instance.$nextTick(() => {
        instance.visible = true
      })

      return instance
    }
  }
}
