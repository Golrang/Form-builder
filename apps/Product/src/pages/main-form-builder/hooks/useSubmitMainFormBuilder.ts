import { useSetRecoilState } from "recoil";

import { useMutation } from "@tanstack/react-query";
import { addNewForm as addNewFormService } from "services/main-for-builder/mainFormBuilderSave.service";

import { message } from "antd";
import { submitLoadingState } from "recoil-store/general/submitLoading";
import { useNavigate } from "react-router-dom";

export const useSubmitMainFormBuilder = () => {
  const navigateToMainFormBuilder = useNavigate();
  const setLoading = useSetRecoilState(submitLoadingState);

  const { mutateAsync: addNewForm } = useMutation(addNewFormService);

  const onSubmit = (state: any) => {
    setLoading(true);
    debugger;
    addNewForm(state, {
      onSuccess: () => {
        message.success("با موفقیت ثبت شد");
        setLoading(false);
        navigateToMainFormBuilder("/main-for-builder");
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
