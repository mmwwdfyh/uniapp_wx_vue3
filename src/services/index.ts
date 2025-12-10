import { request } from "@/api/apiConfig";
import { API } from "@/types/index";

// GET, POST, PUT, DELETE
const {
  Methods: { GET },
} = API;

export const list = async (params: API.Params) => {
  console.log(params);

  try {
    const res = await request({
      url: "/list",
      data: params,
      method: GET,
    });
    return res;
  } catch (error) {
    console.error('请求失败:', error);
    throw error;
  }
};
