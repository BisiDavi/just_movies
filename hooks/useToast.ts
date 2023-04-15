/* eslint-disable no-param-reassign */
import { toast } from "react-toastify";
import type { MutableRefObject } from "react";

export default function useToast() {
  const loadingToast = (toastId: MutableRefObject<any>) => {
    toastId.current = toast("Processing ...", {
      isLoading: true,
      autoClose: false,
    });
  };
  const updateToast = (
    toastId: MutableRefObject<any>,
    toastType?: any,
    message?: string
  ) => {
    return toast.update(toastId.current, {
      type: toastType,
      autoClose: 1000,
      render: message,
      isLoading: false,
    });
  };

  return {
    loadingToast,
    updateToast,
  };
}
