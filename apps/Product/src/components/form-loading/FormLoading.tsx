import { Skeleton, Divider } from "antd";

export const FormLoading = () => {
  return (
    <div className="border-[#0000000f] border-[1px] rounded-sm p-5 !bg-white block h-screen	">
      <Skeleton.Button active block size="default" />
      <Divider className="!mb-3 !mt-3" />
      <Skeleton
        active
        paragraph={{
          rows: 12,
          width: [
            "100%",
            "100%",
            "70%",
            "100%",
            "100%",
            "100%",
            "30%",
            "100%",
            "100%",
            "100%",
            "100%",
            "80%",
          ],
        }}
      />
      <Divider className="!mb-3 !mt-3" />
      <Skeleton.Input active size="default" block />
      <Skeleton.Input active size="small" block className="!mb-3 !mt-3" />
    </div>
  );
};
