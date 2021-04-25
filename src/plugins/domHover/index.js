import { render, createVNode, reactive } from 'vue'
import CreateHoverShadeInstance from './domHoverShade.vue'

class Handler {
    static activedHandlerInstance = null
    static blurHandler = function (event) {
        const domHover = event.target.closest('.domHover')
        if (!domHover && Handler.activedHandlerInstance) {
            Handler.activedHandlerInstance.hideShadeDom()
            Handler.activedHandlerInstance.isActive = false
            Handler.activedHandlerInstance = null
        }
    }
    constructor(el, binding) {
        this.el = el
        this.binding = binding
        this.originStyle = {}
        this.instance = null
        this.props = reactive({
            showShade: el.handlerInstance?.props.showShade || false,
            showBorder: el.handlerInstance?.props.showBorder || false,
            showDeleteButton: el.handlerInstance?.props.showDeleteButton || false,
        })
        this.isActive = (el.handlerInstance && el.handlerInstance.isActive) || false
        this.refShade = null
    }

    insertShadeDom() {
        const style = this.originStyle = window.getComputedStyle(this.el)
        this.el.classList.add('domHover')
        if (style.position !== 'absolute' && style.position !== 'fixed') {
            this.el.style.position = 'relative'
        }
        if (style.zIndex === 'auto') {
            this.el.style.zIndex = 1
        }
        const { instance, refShade } = CreateHoverShadeInstance(this)
        this.refShade = refShade
        const vInstance = createVNode(instance)
        render(vInstance, document.createElement('div'))
        this.el.appendChild(vInstance.el)
        this.instance = vInstance
        this.el.handlerInstance = this
        return this
    }

    hideShadeDom() {
        this.props.showShade = false
        this.props.showBorder = false
        this.props.showDeleteButton = false
    }

    removeShadeDom() {
        this.el.removeChild(this.instance.el)
    }
    registerEvent() {
        this.onMouseEnter()
        this.onMouseLeave()
        this.onMouseClick()
        this.onBlur()
        return this
    }

    handlerMouseEnter() {
        this.props.showShade = !this.binding.modifiers.noShade
        this.props.showBorder = true
        this.props.showDeleteButton = true
    }

    handlerMouseLeave(event) {
        if (Handler.activedHandlerInstance) {
            const nodePosition = event.target.compareDocumentPosition(Handler.activedHandlerInstance.el)
            if ((nodePosition & Node.DOCUMENT_POSITION_PRECEDING) || (nodePosition & Node.DOCUMENT_POSITION_FOLLOWING)) {
                this.hideShadeDom()
            } else if ((nodePosition & Node.DOCUMENT_POSITION_CONTAINS) || (nodePosition & Node.DOCUMENT_POSITION_CONTAINED_BY) && (Handler.activedHandlerInstance && Handler.activedHandlerInstance !== this)) {
                this.hideShadeDom()
            }
        } else {
            this.hideShadeDom()
        }
    }

    handlerMouseClick(event) {
        if (Handler.activedHandlerInstance && Handler.activedHandlerInstance !== this) {
            Handler.activedHandlerInstance.hideShadeDom()
            Handler.activedHandlerInstance.isActive = false

        }
        this.isActive = true
        Handler.activedHandlerInstance = this
        if (this.binding.arg && typeof this.binding.arg.afterHoverClick === 'function') {
            this.binding.arg.afterHoverClick(this.binding.value)
        }
        event.stopPropagation()

    }
    handlerDelete() {
        this.removeShadeDom()
        if (this.binding.arg && typeof this.binding.arg.afterHoverDelete === 'function') {
            this.binding.arg.afterHoverDelete()
        }
    }

    onMouseEnter() {
        this.el.addEventListener('mouseenter', () => {
            this.handlerMouseEnter()
        })
    }
    // 如果存在嵌套：鼠标移动到外层元素是，外层元素可点击。鼠标移到内层元素时，外层元素不可点击，同时内层元素可点击。
    onMouseLeave() {
        this.el.addEventListener('mouseleave', (event) => {
            this.handlerMouseLeave(event)
        })
    }

    onMouseClick() {
        this.el.addEventListener('click', (event) => {
            this.handlerMouseClick(event)
        })
    }

    onBlur() {
        document.body.addEventListener('click', Handler.blurHandler, false)
    }
}

/**
 * 1、鼠标悬停：出现边框和删除按钮，并根据设置判断是否显示黑色遮罩。
 * 2、鼠标移出：如果选中，移除删除按钮，遮罩和边框保留。如果未选中，则全部移除。
 * 3、鼠标点击：右边出现相应的设置属性的组件;之前选中的要移除遮罩和边框以及删除按钮。
 * 4、点击删除按钮：移除dom；收缩右边对应的设置属性的组件。
 * 使用：
 * v-domHover.noShade="setPropertyComponent"
 */


const hoverOptions = {
    mounted(el, binding) {
        const handler = new Handler(el, binding)
        handler.insertShadeDom().registerEvent()
    },
    updated(el) {
        if (!el.contains(el.handlerInstance.instance.el)) {
            el.handlerInstance.insertShadeDom()
        }
    },
    unmounted(el, binding) {
        // todo
        // if (binding.handlerInstance) {
        //     binding.handlerInstance.hideShadeDom()
        //     binding.handlerInstance.removeShadeDom()
        // }
    }
}
const install = (app) => {
    app.directive('domHover', hoverOptions)
}


export default install