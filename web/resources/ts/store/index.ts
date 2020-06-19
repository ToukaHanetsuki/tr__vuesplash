import authStore from './auth';

export default function globalStore() {
  return {
    auth: authStore(),
  };
}

export type GlobalStore = ReturnType<typeof globalStore>;
