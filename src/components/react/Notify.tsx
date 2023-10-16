import { Toaster } from "react-hot-toast";

export function Notify() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 3000,
        style: {
          color: "#fff",
          background: "#333",
        },
      }}
    />
  );
}
