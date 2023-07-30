export const requestRoutes = (coord) => {
  return fetch(
    `https://router.project-osrm.org/route/v1/driving/${coord[0][1]},${coord[0][0]};${coord[1][1]},${coord[1][0]};${coord[2][1]},${coord[2][0]}?geometries=geojson&overview=full`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};
