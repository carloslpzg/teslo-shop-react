import { tesloApi } from "@/api/testoApi"
import type { AuthResponse } from "../interfaces/auth.response";

export const loginAction = async (email: string, password: string): Promise<AuthResponse> => {

    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
            email,
            password
        })

        // console.log(data);0

        return data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }

}