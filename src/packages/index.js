import QuickElModal from './quick-el-modal'
export default {
  install(Vue, opts = {}) {
    const { name = 'quickModal', prototype = {} } = opts
    Vue.prototype[name] = options => {
      const ModalInstance = Vue.extend(QuickElModal)
      for (const key in prototype) {
        if (key === '$store') {
          ModalInstance.prototype[key] = prototype[key]
        } else {
          Object.defineProperty(Vue.prototype, key, { value: prototype[key] })
        }
      }
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
