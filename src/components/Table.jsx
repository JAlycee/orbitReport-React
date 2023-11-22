// Table = sat prop
const Table = ({ sat }) => {
  //Helper Function 'status' returns a string based on the boolean input
  //If True, return 'Active' otherwise 'Inactive'
  const status = (bool) => {
    if (bool) {
      return "Active";
    } else {
      return "Inactive";
    }
  };
  return ( // Renders Table **Issue I was having**
    <table>
    <thead>
     <tr>
      <th>Name</th>
      <th>Type of Satellite</th>
      <th>Launch Date</th>
      <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data, id) => { // Mapping each satellite object to a row in the table
        return (
        <tr key={id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{status(data.operational)}</td>
        </tr>  

        );
      })}
     </tbody>
   </table>
  );
};

export default Table;