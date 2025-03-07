import { useScreenMode } from "@/stores/useScreenMode";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function HomeScreen() {
  const { setScreenMode } = useScreenMode();
  return (
    <WebView
      source={{ uri: "https://transfer-yp.vercel.app" }}
      style={{ flex: 1 }}
      onMessage={async (event) => {
        const data = event.nativeEvent.data as "light" | "dark" | "system";
        setScreenMode(data);
      }}
    />
  );
}
