import { useDispatch } from "react-redux";
import { ADD_ROUTES_IN_STATE } from "../../actions/action-get-route";
import styles from "./table-element.module.css";

const TableElement = ({ name, route, active }) => {
  const dispatch = useDispatch();

  const selectRoute = () => {
    dispatch({
      type: ADD_ROUTES_IN_STATE,
      data: [
        [route[0][0], route[0][1]],
        [route[1][0], route[1][1]],
        [route[2][0], route[2][1]],
      ],
    });
  };

  return (
    <tr
      onClick={selectRoute}
      className={(styles.tr, active === true ? styles.tr_active : styles.tr)}
    >
      <th className={styles.th}>{name}</th>
      <th className={styles.th}>
        {route[0][0]},<br />
        {route[0][1]}
      </th>
      <th className={styles.th}>
        {route[1][0]},<br />
        {route[1][1]}
      </th>
      <th className={styles.th}>
        {route[2][0]},<br />
        {route[2][1]}
      </th>
    </tr>
  );
};
export default TableElement;
