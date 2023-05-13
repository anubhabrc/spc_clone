import { Divider } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Scheduler from "../../components/Scheduler/Scheduler";

function Home() {
  return (
    <div>
      <div
        style={{ display: "grid", gridTemplateColumns: "0.13fr 0.01fr 0.86fr" }}
      >
        <Sidebar />
        <Divider orientation="vertical" />
        <div style={{ height: "100vh", overflow: "scroll" }}>
          <Scheduler />
        </div>
        <div />
      </div>
    </div>
  );
}

export default Home;
