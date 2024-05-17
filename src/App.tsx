import BodyContainer from "./components/BodyContainer";
import SideBar from "./components/SideBar";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/api-clients";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex bg-[#FAFAFA]">
        <SideBar />
        <BodyContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
