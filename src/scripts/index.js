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
    static ShangWu = 5
    static XiaoYuan = 6
    static HunLiHunQing = 7
    static ShangYeCuXiao = 8
    static PaiDui = 9
    static DongManYouXi = 10

    constructor(label, value) {
        this.label = label
        this.value = value
    }
}

/** pc-主题-主题缩略图*/
class PcThemeThumbnailyClass {
    constructor(name, label, layout, classify = [], isNew = false, isFreeNow = false,) {
        this.name = name
        this.label = label
        // this.thumbnail = `${import.meta.env.VITE_STATIC}/theme/${name}/thumbnail.png`
        this.thumbnail = `/src/views/pc/asideComponents/img/${name}/thumbnail.png`
        this.layout = layout
        this.classify = classify
        this.isNew = isNew
        this.isFreeNow = isFreeNow
    }
}

/** mobile-主题-主题缩略图*/
class MobileThemeThumbnailyClass extends PcThemeThumbnailyClass {
    constructor(name, label, layout, classify = [], isNew = false, isFreeNow = false,) {
        super(name, label, layout, classify, isNew, isFreeNow,);
        this.thumbnail = `/src/views/mobile/asideComponents/img/${name}/thumbnail.png`
    }
}


/** pc-界面元素*/
class ElemetsSwitchClass {
    constructor(label, property) {
        this.label = label
        this.property = property
    }
}

/** mobile-content-component*/
class MobileModuleClass {
    constructor(componentName, children = []) {
        this.componentName = componentName
        this.children = children
    }
}
class MobileSwiperClass extends MobileModuleClass {
    constructor(imgList = [], title = '', time = '', showTime = true, fontColor = '') {
        super('swiper');
        this.imgList = imgList
        this.title = title
        this.time = time
        this.showTime = showTime
        this.fontColor = fontColor
    }
}
class MobileBroadcastClass extends MobileModuleClass {
    constructor(poster = '', isShowDanmu = false) {
        super('broadcast');
        this.poster = poster
        this.isShowDanmu = isShowDanmu
    }
}
class MobileTabClass extends MobileModuleClass {
    constructor(bgUrl = '', activeTitleColor = '', staticTitleColor = '', tabList = []) {
        super('tab');
        this.bgUrl = bgUrl
        this.activeTitleColor = activeTitleColor
        this.staticTitleColor = staticTitleColor
        this.tabList = tabList
    }
}
class MobileTabItemClass extends MobileModuleClass {
    constructor(label = '', name = '', type = '') {
        super('tabItem');
        this.label = label
        this.name = name
        this.type = type
    }
}


export {
    AsideClass,
    ThemeLayoutClass,
    ThemeClassifyClass,
    PcThemeThumbnailyClass,
    ElemetsSwitchClass,
    MobileThemeThumbnailyClass,
    MobileSwiperClass,
    MobileBroadcastClass,
    MobileTabClass,
    MobileTabItemClass
}