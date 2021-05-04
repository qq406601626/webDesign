import {reactive,ref} from "vue";
import {AsideClass} from "@/scripts";

const asideOriginSelectModule = new AsideClass("", "", null);
const asideCurrentSelectModule = reactive({asideModule: asideOriginSelectModule});
const mainCurrentSelectModule = ref(null)
const mainCurrentSettingComponentName = ref('')
const asideState={
    originSelectModule:asideOriginSelectModule,
    currentSelectModule:asideCurrentSelectModule
}
const mainState = {
    currentSelectModule:mainCurrentSelectModule,
    currentSettingComponentName:mainCurrentSettingComponentName,
}
export {
    asideState,
    mainState
}