import { LoginRequest, RegisterRequest, UserResponce } from "@/types"


interface AuthState {
    user: Response | null
    isLoading: boolean
    error: string | null
    login: (data: LoginRequest) => Promise<void>
    register: (data: RegisterRequest) => Promise<void>
    logout: ()=> void
    fetchMe: () => Promise<void>
    clearError: () => void
    setUser: (user: UserResponce) => void
}

export const useAuthStore = create<AuthState>(set => ({
    user: null, 
    set
}))