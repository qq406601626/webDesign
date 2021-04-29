import {reactive,ref} from 'vue'
import { AsideClass } from "@/scripts";
const originSelectModule = new AsideClass("", "", null);
const currentSelectModule = reactive({ asideModule: originSelectModule });
const show = ref(false)
export  {
    originSelectModule,
    currentSelectModule,
    show
}
