import Vue from 'vue';
import { GlobalStore } from '../store';

declare module 'vue/types/vue' {
  interface Vue {
    readonly $store: Readonly<GlobalStore>;
  }
}
