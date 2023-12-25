import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactId } from 'reactjs-id';

const StyledTable = styled.table`
border-collapse: collapse;
  border: 2px solid #6e8511;
    padding: 10px;
    width: 100%;
th,td {
    border: 1px solid #6e8511;
    padding: 8px;
  
}
`;
const StyledBody = styled.tbody`  border: 2px solid #6e8511;
  `;
export default function TableEmploye({ data }) {
  if (!data || data.length === 0) {
    return (
      <div>
        <h1>No employees found</h1>
      </div>
    );
  }

  const keysA = Object.keys(data[0]);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div id="employee-table" className="display">
        <StyledTable>
          <thead>
            <tr>
              {keysA.map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <StyledBody>
            {data.map((employee, id) => (
              <tr key={`employee-${ReactId()}`} className={`employee-${id}`}>
                {keysA.map((val) => (
                  <td key={`employe-${val}`} className={`${val}employe-${id}`}>{employee[val]}</td>
                ))}
              </tr>
            ))}
          </StyledBody>
        </StyledTable>
      </div>
    </div>
  );
}
TableEmploye.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
TableEmploye.defaultProps = {
  data: [],
};
