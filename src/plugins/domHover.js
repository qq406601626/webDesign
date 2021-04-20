import {render, createVNode,} from 'vue'
import CreateHoverShadeInstance from '@/views/commonComponents/domHoverShade.vue'
import fa from "element-plus/packages/locale/lang/fa";

class Handler {
    constructor(el, binding) {
        this.el = el
        this.binding = binding
        this.originStyle = {}
        this.instance = null
        this.props = {}
    }

    insertShadeDom() {
        if (this.instance) {
            this.props.showShade = true
            this.props.showBorder = true
            this.props.showDeleteButton = true
        } else {
            const style = this.originStyle = window.getComputedStyle(this.el)
            if (style.position !== 'absolute' && style.position !== 'fixed') {
                this.el.style.position = 'relative'
            }
            const {instance, props} = CreateHoverShadeInstance()
            this.props = props
            const vInstance = createVNode(instance)
            render(vInstance, document.createElement('div'))
            this.el.appendChild(vInstance.el)
            this.instance = vInstance
        }

    }

    removeShadeDom() {
        this.props.showShade = false
        this.props.showBorder = false
        this.props.showDeleteButton = false
    }

    handlerMouseEnter() {
        this.insertShadeDom()
    }

    handlerMouseLeave() {
        this.removeShadeDom()
    }

    onMouseEnter() {
        this.el.addEventListener('mouseenter', () => {
            this.handlerMouseEnter()
        })
    }

    onMouseLeave() {
        this.el.addEventListener('mouseleave', () => {
            this.handlerMouseLeave()
        })
    }
}

/**
 * 1、鼠标悬停：出现边框和删除按钮，并根据设置判断是否显示黑色遮罩。
 * 2、鼠标移出：如果选中，移除删除按钮，遮罩和边框保留。如果未选中，则全部移除。
 * 3、鼠标点击：右边出现相应的设置属性的组件;之前选中的要移除遮罩和边框以及删除按钮。
 * 使用：
 * v-domHover.noShade="setPropertyComponent"
 */


const hoverOptions = {
    mounted(el, binding) {
        const handler = new Handler(el, binding)
        handler.onMouseEnter()
        handler.onMouseLeave()
    },
    updated() {

    }
}
const install = (app) => {
    app.directive('domHover', hoverOptions)
}


export default install