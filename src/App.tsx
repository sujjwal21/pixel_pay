import { ChakraProvider } from "@chakra-ui/react";
import { Workflow } from "./Workflow/Workflow";

function App() {

  return (
    <ChakraProvider>
      <Workflow />
    </ChakraProvider>
  );
}

export default App;
