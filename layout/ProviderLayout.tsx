import store from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

export default function ProviderLayout({ children }: PropsWithChildren) {
  const queryClient: any = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
