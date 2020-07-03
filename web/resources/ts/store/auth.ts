import axios from 'axios'
import { reactive } from '@vue/composition-api';

export default function authStore() {
  const state = reactive({
    user: null as UserState,
  });

  return {
    get check() {
        return !!state.user;
    },

    get username() {
        return state.user ? state.user.name : '';
    },

    async register (data: RegisterForm) {
        const response = await axios.post('/api/register', data)
        this.setUser(response.data)
    },

    async login (data: LoginForm) {
        const response = await axios.post('/api/login', data)
        this.setUser(response.data)
    },

    async logout () {
        const response = await axios.post('/api/logout')
        this.setUser(null)
    },

    async currentUser () {
        const response = await axios.get('/api/user')
        const user = response.data || null
        this.setUser(user)
    },

    setUser (user: UserState) {
        state.user = user
    }
  };
}

export type AuthStore = ReturnType<typeof authStore>;

// ----------------------------------------
//
class User {
    created_at = null as string | null
    email = ''
    email_verified_at = null as string | null
    id = 0
    name = ''
    updated_at = null as string | null
}
type UserState = User | null

class LoginForm {
    email = ''
    password = ''
}

class RegisterForm {
    name = ''
    email = ''
    password = ''
    password_confirmation = ''
}
