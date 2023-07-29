export const listName = {
  dtsgList: "GPI_PS_dtsgList",
};

export const dateFormat = "YYYY/MM/DD";
export const dateFormatMomment = "jYYYY/jM/jD";

export const maxSize = 3 * 1024 * 1024; // 3 MB in bytes

export const filePath =
  process.env.NODE_ENV == "development"
    ? `/dtsg/${listName.dtsgList}`
    : `/dtsg/${listName.dtsgList}`;
