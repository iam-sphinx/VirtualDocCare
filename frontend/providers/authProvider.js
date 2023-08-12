"use client";

import { SocketProvider } from "@/context/SocketContext";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export function AuthProvider({ children }) {
  return (
    <Provider store={store} r>
      <PersistGate loading={null} persistor={persistor}>
        <SocketProvider>{children}</SocketProvider>
      </PersistGate>
    </Provider>
  );
}
