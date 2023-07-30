import React from "react";
import { DatePicker } from "antd";
import moment from "jalali-moment";

const JalaliDatePickerAntd = (props: any) => {
  // Convert the value to a moment object in jalali format
  const value = props.value ? moment(props.value, "YYYY-MM-DD") : null;

  // Handle date change and pass the selected date in jalali format
  const handleDateChange = (date: any, dateString: any) => {
    const jalaliDate = moment(dateString, "jYYYY-jMM-jDD").format("YYYY-MM-DD");
    props.onChange(jalaliDate);
  };

  return <DatePicker {...props} value={value} onChange={handleDateChange} />;
};

export default JalaliDatePickerAntd;
