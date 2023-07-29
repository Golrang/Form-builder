export const getUserInfo = () => {
  const userInfo =
    process.env.NODE_ENV == "development"
      ? {
          companyID: "445" ?? "",
          workPlaceId: "4" ?? "",
          userEmail: "Safavi.Somaye@Golrang.com" ?? "",
          userFarsiName: "سیده سمیه صفوی" ?? "",
          userNameId: "1278" ?? "",
          employeeId: "9866" ?? "",
          userPersonelCode: "10801" ?? "",
          nCode: "0310502861" ?? "",
          displayName: "Safavi, Somaye (GIG)" ?? "",
          companyName: "گلرنگ سیستم" ?? "",
          departman: "توسعه شیرپوینت" ?? "",
          position: "کارشناس توسعه" ?? "",
        }
      : {
          companyID: sessionStorage.getItem("CompanyID") ?? "",
          workPlaceId: sessionStorage.getItem("WPID") ?? "",
          userEmail: sessionStorage.getItem("PEmail") ?? "",
          userFarsiName: sessionStorage.getItem("PFName") ?? "",
          userNameId: sessionStorage.getItem("USID") ?? "",
          employeeId: sessionStorage.getItem("EID") ?? "",
          companyName: sessionStorage.getItem("CName") ?? "",
          engName: sessionStorage.getItem("PDisplayName") ?? "",
          userPersonelCode: sessionStorage.getItem("PID") ?? "",
          nCode: sessionStorage.getItem("NCode") ?? "",
          displayName: sessionStorage.getItem("PDisplayName") ?? "",
          departman: sessionStorage.getItem("DName") ?? "",
          position: sessionStorage.getItem("PRole") ?? "",
        };

  return { userInfo };
};

// {
//   companyID: "445" ?? "",
//   workPlaceId: "4" ?? "",
//   userEmail: "Safavi.Somaye@Golrang.com" ?? "",
//   userFarsiName: "سیده سمیه صفوی" ?? "",
//   userNameId: "1278" ?? "",
//   employeeId: "9866" ?? "",
//   userPersonelCode: "10801" ?? "",
//   nCode: "0310502861" ?? "",
//   displayName: "Safavi, Somaye (GIG)" ?? "",
//   companyName: "گلرنگ سیستم" ?? "",
//   departman: "توسعه شیرپوینت" ?? "",
//   position: "کارشناس توسعه" ?? "",
// }

// {
//   companyID: "445" ?? "",
//   workPlaceId: "4" ?? "",
//   userEmail: "Khademi.Niloufar@Golrang.com" ?? "",
//   userFarsiName: "نیلوفر خادمی" ?? "",
//   userNameId: "1278" ?? "",
//   employeeId: "9477" ?? "",
//   userPersonelCode: "10741" ?? "",
//   nCode: "0310502861" ?? "",
//   displayName: "Khademi, Niloufar (GIG)" ?? "",
//   companyName: "گلرنگ سیستم" ?? "",
//   departman: "توسعه شیرپوینت" ?? "",
//   position: "کارشناس توسعه" ?? "",
// }

// {
//   companyID: "445" ?? "",
//   workPlaceId: "4" ?? "",
//   userEmail: "Ranaei.Farshad@Golrang.com" ?? "",
//   userFarsiName: "فرشاد رعنایی" ?? "",
//   userNameId: "1278" ?? "",
//   employeeId: "4130" ?? "",
//   userPersonelCode: "10371" ?? "",
//   nCode: "0310502861" ?? "",
//   displayName: "Ranaei,Farshad (GIG)" ?? "",
//   companyName: "گلرنگ سیستم" ?? "",
//   departman: "توسعه شیرپوینت" ?? "",
//   position: "کارشناس توسعه" ?? "",
// }
