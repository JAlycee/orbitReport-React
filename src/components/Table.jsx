
import React from 'react';
import satData from './satData';

function Table({ satellite }) {
  return (
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
        {satellite.map((satellite, id) => (
          <tr key={id}>
            <td>{satellite.name}</td>
            <td>{satellite.type}</td>
            <td>{satellite.launchDate}</td>
            <td>{satellite.status}</td>
            <td>{satellite.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
