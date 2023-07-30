import styles from "./app.module.css";
import Map from "../map/map";
import Table from "../table/table";
import TableElement from "../table-element/table-element";
import { coordinates } from "../../utils/var";
import { useSelector } from "react-redux";

function App() {
  const selRoute = useSelector((store) => store.route.selRouter);

  const checkActive = (coord, selRoute) => {
    if (coord[0][0] === selRoute[0][0] && coord[1][0] === selRoute[1][0]) {
      return true;
    } else return false;
  };

  return (
    <div className={styles.app}>
      <Table>
        <TableElement
          name={"Маршрут №1"}
          route={coordinates[0]}
          active={checkActive(coordinates[0], selRoute)}
        />
        <TableElement
          name={"Маршрут №2"}
          route={coordinates[1]}
          active={checkActive(coordinates[1], selRoute)}
        />
        <TableElement
          name={"Маршрут №3"}
          route={coordinates[2]}
          active={checkActive(coordinates[2], selRoute)}
        />
        <TableElement
          name={"Маршрут №4"}
          route={coordinates[3]}
          active={checkActive(coordinates[3], selRoute)}
        />
      </Table>
      <Map />
    </div>
  );
}

export default App;
