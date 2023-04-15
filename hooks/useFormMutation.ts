import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

import useToast from "@/hooks/useToast";
import type { movieDetailType } from "@/types";

type mutationType = { movie: movieDetailType; email: string };

async function sendEmail({ movie, email }: mutationType) {
  return await axios.post("/api/send-email", { movie, email });
}

export default function useFormMutation(setEmail: any) {
  const { loadingToast, updateToast } = useToast();
  const toastID = useRef(null);

  return useMutation(
    ({ movie, email }: mutationType) => sendEmail({ movie, email }),
    {
      mutationKey: ["useFormMutation"],
      onMutate: () => loadingToast(toastID),
      onSettled: () => setEmail(""),
      onSuccess: () => updateToast(toastID, "success", "email sent"),
      onError: () => updateToast(toastID, "error", "error sending email"),
    }
  );
}
