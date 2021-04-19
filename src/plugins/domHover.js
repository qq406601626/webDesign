import { createApp, createVNode, h } from 'vue'
import domHoverShade from '@/views/commonComponents/domHoverShade.vue'
class Handler {
    originStyle = {}
    mountComponent = createApp(domHoverShade)
    insertShadeDom(el, binding) {
        const style = this.originStyle = window.getComputedStyle(el)
        if (style.position !== 'absolute' && style.position !== 'fixed') {
            el.style.position = 'relative'
        }
        this.mountComponent.mount(el)
    }
    removeShadeDom(el, binding) {
        this.mountComponent.unmount()
    }
    handlerMouseEnter(el, binding) {
        this.insertShadeDom(el, binding)
    }
    onMouseEnter(el, binding) {
        el.addEventListener('mouseenter', () => {
            this.handlerMouseEnter(el, binding)
        })
    }
}
/**
 * 1、鼠标悬停：出现边框和删除按钮，并根据设置判断是否显示黑色遮罩。
 * 2、鼠标移出：如果选中，移除删除按钮，遮罩和边框保留。如果未选中，则全部移除。
 * 3、鼠标点击：右边出现相应的设置属性的组件。
 * 使用：
 * v-domHover:{}="setPropertyComponent"
 */

const handler = new Handler()
const hoverOptions = {
    mounted(el, binding) {
        handler.onMouseEnter(el, binding)
    },
    updated() {

    }
}
const install = (app) => {
    app.directive('domHover', hoverOptions)
}


export default install