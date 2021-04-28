import {reactive} from 'vue'
import { AsideClass } from "@/scripts";
const originSelectModule = new AsideClass("", "", null);
const currentSelectModule = reactive({ asideModule: originSelectModule });
export  {
    originSelectModule,
    currentSelectModule
}
