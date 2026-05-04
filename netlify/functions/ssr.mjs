import server from "../../dist/server/server.js";

export default async (request, context) => {
  return await server.fetch(request);
};

export const config = {
  path: "/*",
  excludedPath: ["/assets/*", "/favicon.ico"],
};
