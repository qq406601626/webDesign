import { render, createVNode, nextTick } from 'vue'
import CreateHoverShadeInstance from './domHoverShade.vue'

class Handler {
    static activedHandlerInstance = null
    constructor(el, binding) {
        this.el = el
        this.binding = binding
        this.originStyle = {}
        this.instance = null
        this.props = {}
        this.isActive = false
        this.refShade = null
        this.handlerDelete = () => {
            this.onDelete()
        }
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
            const { instance, props, refShade } = CreateHoverShadeInstance(this.handlerDelete)
            this.props = props
            this.refShade = refShade
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
        if (Handler.activedHandlerInstance) {
            Handler.activedHandlerInstance.isActive = false
        }
    }

    handlerMouseEnter() {
        this.insertShadeDom()
    }

    handlerMouseLeave() {
        if (this.isActive) {

        } else {
            this.removeShadeDom()
        }
    }

    handlerMouseClick() {
        if (Handler.activedHandlerInstance && Handler.activedHandlerInstance !== this) {
            Handler.activedHandlerInstance.removeShadeDom()
        }
        this.isActive = true
        Handler.activedHandlerInstance = this
        // todo
    }

    async handlerBlur(event) {
        await nextTick()
        if (this.refShade && event.target !== this.refShade.value && Handler.activedHandlerInstance) {
            Handler.activedHandlerInstance.removeShadeDom()
        }
    }
    
    onDelete() {
        // todo
        this.el.parentNode.removeChild((this.el))
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

    onMouseClick() {
        this.el.addEventListener('click', () => {
            this.handlerMouseClick()
        })
    }

    onBlur() {
        if (!Handler.blurHandler) {
            Handler.blurHandler = this.handlerBlur.bind(this)
            document.body.addEventListener('click', Handler.blurHandler, true)
        }
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
        handler.onMouseEnter()
        handler.onMouseLeave()
        handler.onMouseClick()
        handler.onBlur()
    },
    updated() {

    }
}
const install = (app) => {
    app.directive('domHover', hoverOptions)
}


export default install