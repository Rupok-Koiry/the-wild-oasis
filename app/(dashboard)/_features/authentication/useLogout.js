import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../_services/apiAuth";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.replace("/dashboard/login");
    },
  });

  return { logout, isLoading };
}
