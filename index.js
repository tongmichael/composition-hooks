import {getCurrentInstance, reactive, computed} from 'vue-demi';

export const useRoute = () => {
    const vm = getCurrentInstance();
    if (!vm) {
        throw new Error('请在setup初始化的时候运行useRoute,在点击事件,生命周期中无法获取当前vue实例')
    }
    return reactive({
        path: computed(() => vm.proxy.$route.path),
        name: computed(() => vm.proxy.$route.name),
        hash: computed(() => vm.proxy.$route.hash),
        query: computed(() => vm.proxy.$route.query),
        params: computed(() => vm.proxy.$route.params),
        fullPath: computed(() => vm.proxy.$route.fullPath),
        matched: computed(() => vm.proxy.$route.matched),
        redirectedFrom: computed(() => vm.proxy.$route.redirectedFrom),
        meta: computed(() => vm.proxy.$route.meta),
    });
};

export const useStore = () => {
    const vm = getCurrentInstance();
    if (!vm) {
        throw new Error('请在setup初始化的时候运行useStore,在点击事件,生命周期中无法获取当前vue实例')
    }
    return vm.proxy.$store;
};

export const useRouter = () => {
    const vm = getCurrentInstance();
    if (!vm) {
        throw new Error('请在setup初始化的时候运行useRouter,在点击事件,生命周期中无法获取当前vue实例')
    }
    return vm.proxy.$router;
};
