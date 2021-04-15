class AsideClass {
    constructor(label, iconName, component) {
        this.label = label
        this.iconName = iconName
        this.component = component
    }
}

class ThemeLayoutClass {
    static fullContent = 1
    static rightContent = 2
    static leftContent = 3
    iconBaseUrl = '/src/views/pc/asideComponents/img/'
    constructor(value, icon) {
        this.value = value
        this.icon = `${this.iconBaseUrl}/${icon}`
    }
}

export {AsideClass, ThemeLayoutClass}