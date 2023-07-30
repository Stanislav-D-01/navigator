import styles from "./table.module.css";

const Table = ({ children }) => {
  return (
    <table className={styles.table}>
      <caption>Список маршрутов</caption>
      <tr className={styles.tr}>
        <th className={styles.th}>Маршруты</th>
        <th className={styles.th}>Точка 1(lat,lng)</th>
        <th className={styles.th}>Точка 2(lat,lng)</th>
        <th className={styles.th}>Точка 3(lat,lng)</th>
      </tr>
      {children}
    </table>
  );
};

export default Table;
