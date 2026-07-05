export interface RegisterRequest{
  username: string
  password: string 
}

export interface LoginRequest{
  username: string
  password: string
}

export interface TokenResponce{
    acces_token: string;
    token_type: string;
}

export interface UserResponce{
    id: number
    avatar: null | string;
    bio: null | string
    created_at: string 
}
