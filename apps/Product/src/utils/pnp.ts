import { sp } from "@pnp/sp/presets/all";
export const dtsgUrl =
  process.env.NODE_ENV == "development"
    ? "http://localhost:8081/dtsg"
    : "https://portal.golrang.com/dtsg";

sp.setup({
  sp: {
    baseUrl: dtsgUrl,
  },
});
export default sp;
