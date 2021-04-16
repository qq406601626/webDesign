/** 侧边栏模块*/
class AsideClass {
    constructor(label, iconName, component) {
        this.label = label
        this.iconName = iconName
        this.component = component
    }
}
/** pc-主题-布局*/
class ThemeLayoutClass {
    static FullContent = 1
    static RightContent = 2
    static LeftContent = 3
    static iconBaseUrl = '/src/views/pc/asideComponents/img/'
    constructor(value, icon) {
        this.value = value
        this.icon = `${ThemeLayoutClass.iconBaseUrl}/${icon}`
    }
}
/** pc-主题-分类*/
class ThemeClassifyClass {
    static All = 1
    static Default = 2
    static NianHui = 3
    static JieRi = 4
    static CaiWu = 5
    static XiaoYuan = 6
    static HunLiHunQing = 7
    static ShangWuCuXiao = 8
    static PaiDui = 9
    static DongManYouXi = 10
    constructor(label, value) {
        this.label = label
        this.value = value
    }
}
/** pc-主题-主题缩略图*/
class ThemeThumbnailyClass {
    constructor(name, label, layout, classify = [], isNew = false, isFreeNow = false,) {
        this.name = name
        this.label = label
        this.thumbnail = `${import.meta.env.VITE_STATIC}/theme/${name}/thumbnail.png`
        this.layout = layout
        this.classify = classify
        this.isNew = isNew
        this.isFreeNow = isFreeNow
    }
}

export { AsideClass, ThemeLayoutClass, ThemeClassifyClass, ThemeThumbnailyClass }