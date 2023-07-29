import { useQuery } from "@tanstack/react-query";
import {
  getMainFormGeneratorAll,
  getMainFormGeneratorById,
} from "services/main-form-generator/mainFormGeneratorGet.service";
import { message } from "antd";
import { queryKeys } from "~/constant/react-query-keys";

export const useGetMainFormGeneratorAll = () => {
  const queryKey = [queryKeys.getdtsag];
  const {
    data: formData,
    isLoading: isLoadingFormData,
    error: errorFormData,
  } = useQuery<any[] | null>(queryKey, () => getMainFormGeneratorAll(), {
    suspense: true,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {},
    onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
  });

  return {
    formData,
    isLoadingFormData,
    errorFormData,
  };
};

export const useGetMainFormGeneratorById = (id: number) => {
  const queryKey = [queryKeys.getdtsag, id];

  const {
    data: formData,
    isLoading: isLoadingFormData,
    error: errorFormData,
  } = useQuery<any[] | null>(queryKey, () => getMainFormGeneratorById(id), {
    suspense: true,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {},
    onError: () => message.error("خطایی در دریافت اطلاعات رخ داده است"),
  });

  return {
    formData,
    isLoadingFormData,
    errorFormData,
  };
};
