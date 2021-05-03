export default (app) => {
    app.directive('aspectRatio', (el, binding) => {
        if (binding.modifiers.fixedHeight) {
            el.style.width = el.scrollHeight * binding.value +'px'
        } else {
            el.style.height = el.scrollWidth / binding.value +'px'
        }
    })
}