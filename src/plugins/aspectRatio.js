export default (app) => {
    app.directive('aspectRatio', (el, binding) => {
        console.log('xxxxxxxxx',el.scrollHeight)
        if (binding.modifiers.fixedHeight) {
            el.style.width = el.scrollHeight * binding.value +'px'
        } else {
            el.style.height = el.scrollWidth / binding.value +'px'
        }
    })
}