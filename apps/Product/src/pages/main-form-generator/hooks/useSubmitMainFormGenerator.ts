import { useSetRecoilState } from "recoil";

import { useMutation } from "@tanstack/react-query";
import { saveNewForm as saveFormService } from "services/main-form-generator/mainFormGeneratorSave.service";

import { message } from "antd";
import { submitLoadingState } from "recoil-store/general/submitLoading";
import { useNavigate } from "react-router-dom";

export const useSubmitMainFormGenerator = () => {
  const navigateToMainFormBuilder = useNavigate();
  const setLoading = useSetRecoilState(submitLoadingState);

  const { mutateAsync: saveNewForm } = useMutation(saveFormService);

  const onSubmit = (state: any) => {
    setLoading(true);
    debugger;
    saveNewForm(state, {
      onSuccess: () => {
        message.success("با موفقیت ثبت شد");
        setLoading(false);
        navigateToMainFormBuilder("/main-form-generator");
      },
      onError: () => {
        message.error("خطایی در ثبت رخ داده است .");
      },
    });
  };

  return {
    onSubmit,
  };
};
