import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import {
  Day,
  Inject,
  Month,
  ScheduleComponent,
  Week,
  ViewDirective,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";
import "./Scheduler.css";

const Scheduler = () => {
  const localData = {
    dataSource: [
      {
        EndTime: new Date(2019, 0, 11, 6, 30),
        StartTime: new Date(2019, 0, 11, 4, 0),
      },
    ],
  };

  const remoteData = new DataManager({
    url: "https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

  return (
    <ScheduleComponent
      currentView="Week"
      eventSettings={{ dataSource: remoteData }}
      selectedDate={new Date(2017, 5, 5)}
    >
      <ViewsDirective>
        <ViewDirective option="Day"></ViewDirective>
        <ViewDirective option="Week"></ViewDirective>
        <ViewDirective option="Month"></ViewDirective>
      </ViewsDirective>
      <Inject services={[Day, Week, Month]} />
    </ScheduleComponent>
  );
};

export default Scheduler;
