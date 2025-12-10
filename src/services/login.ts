import { request } from "@/api/apiConfig";
import { API } from "@/types/index";

// GET, POST, PUT, DELETE
const {
    Methods: { GET },
} = API;

export const loginUser = async (params: API.Params) => {
    console.log(params);

    try {
        const res = await request({
            url: "/loginUser/loginUser",
            data: params,
            method: GET,
        });
        return res;
    } catch (error) {
        console.error('请求失败:', error);
        throw error;
    }
};

export const logoutUser = async (params: API.Params) => {
    console.log(params);

    try {
        const res = await request({
            url: "/logoutUser/logoutUser",
            data: params,
            method: GET,
        });
        return res;
    } catch (error) {
        console.error('请求失败:', error);
        throw error;
    }
};

