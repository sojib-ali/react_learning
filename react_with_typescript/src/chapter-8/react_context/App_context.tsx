import { Con_header } from "./Con_header";
import { Con_main } from "./Con_main";
import { AppProvider } from "./App_provider";
export default function App_context() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <AppProvider>
        <Con_header />
        <Con_main />
      </AppProvider>
    </div>
  );
}
