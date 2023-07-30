import React, { useEffect, useRef } from "react";
import jalaliDatepicker from "jalalidatepicker";
import moment from "moment";
import { DatePicker } from "antd";

interface JalaliDatePickerProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const JalaliDatePicker: React.FC<JalaliDatePickerProps> = ({
  name,
  value,
  onChange,
  onBlur,
  disabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const $input = inputRef.current;

    jalaliDatepicker($input, {
      altField: "",
      altFormat: "YYYY/MM/DD",
      format: "YYYY/MM/DD",
      observer: false,
      initialValue: value || moment().format("jYYYY/jMM/jDD"),
      timePicker: { enabled: false },
      formatter: (inputValue:any) => {
        if (inputValue) {
          return moment(inputValue, "YYYY/MM/DD").format("jYYYY/jMM/jDD");
        }
        return "";
      },
      onSelect: (unixDate:any) => {
        const date = moment(unixDate).format("YYYY/MM/DD");
        onChange({
          target: {
            name,
            value: date,
          },
        });
      },
    });
  }, [name, value, onChange]);

  return (
    <DatePicker
      ref={inputRef}
      format="jYYYY/jMM/jDD"
      name={name}
      value={moment(value, "YYYY/MM/DD")}
      onChange={(date, dateString) =>
        onChange({ target: { name, value: dateString } })
      }
      onBlur={onBlur}
      disabled={disabled}
    />
  );
};

export default JalaliDatePicker;
