import createRequest from "./requestFactory/createRequest";
import createGetBaseUrl from "./requestFactory/createBaseUrl";

// 接口地址
const hosts = {
  DEV: "...",   // 开发环境地址
  UAT: "...",   // 测试环境地址
  PRO: "...",   // 生产环境地址
};

const getBaseUrl = createGetBaseUrl(hosts);
const request = createRequest(getBaseUrl);

export { getBaseUrl, request };
