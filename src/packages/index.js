import Vue from 'vue'
import QuickElModal from './quick-el-modal'

export default (options = {}) => {
  const QuickElModalConstructor = Vue.extend(QuickElModal)
  const instance = new QuickElModalConstructor({
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
