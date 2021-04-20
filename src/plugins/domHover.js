import { reactive, withDirectives, render, h, createVNode, vShow } from 'vue'
const CreateHoverShadeInstance = () => {
    const props = reactive({
        showShade: true,
        showBorder: true,
        showDeleteButton: true
    })
    const instance = {
        setup() {
            return props
        },
        render() {
            const $shade = withDirectives(h('div', { class: ['shade'] }), [[vShow, this.showShade]])
            const $border = withDirectives(h('div', { class: ['border'] }), [[vShow, this.showBorder]])
            const $deleteButton = withDirectives(h('div', { class: ['delete-button', 'el-icon-error'] }), [[vShow, this.showDeleteButton]])
            const containerChildren = [$shade, $border, $deleteButton]
            const $container = h('div', { class: ['hover-shade-container'] }, containerChildren)
            return $container
        }
    }
    return {
        props,
        instance
    }
}


class Handler {
    constructor(el, binding) {
        this.el = el
        this.binding = binding
        this.originStyle = {}
        this.instance = null
    }
    insertShadeDom() {
        if (this.instance) {
            return
        }
        const style = this.originStyle = window.getComputedStyle(this.el)
        if (style.position !== 'absolute' && style.position !== 'fixed') {
            this.el.style.position = 'relative'
        }
        const { instance, props } = CreateHoverShadeInstance()
        const vm = createVNode(instance)
        render(vm, document.createElement('div'))
        this.el.appendChild(vm.el)
        setTimeout(() => {
            props.showDeleteButton = false
        }, 1000);
    }
    removeShadeDom() {
    }
    handlerMouseEnter() {
        this.insertShadeDom()
    }
    onMouseEnter() {
        this.el.addEventListener('mouseenter', () => {
            this.handlerMouseEnter()
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
    },
    updated() {

    }
}
const install = (app) => {
    app.directive('domHover', hoverOptions)
}


export default install