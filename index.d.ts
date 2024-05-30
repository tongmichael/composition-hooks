import VueRouter, { Route } from 'vue-router';
import { Store } from 'vuex';

export const useRoute: () => Route;

export const useStore: <T = any>() => Store<T>;

export const useRouter: () => VueRouter;

