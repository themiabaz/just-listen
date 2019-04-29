import React, { useState } from "react";
import jiKeyCalc from "./jiKeyCalc";
import { Note } from "tonal";
import Table from "react-bootstrap/Table";
import keyData from "./Form";

export function Haps() {
  const [inputs] = useState({});

  // >> RENDER COMPONENT <<
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          key note: {inputs.mel} = {Note.freq(inputs.mel)}Hz
        </tr>
        <tr>
          <th>voice part</th>
          <th>original pitch (ET)</th>
          <th>new pitch (JI)</th>
          <th>adjustment required (ET-JI)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>tenor</td>
          <td>null</td>
          <td>null</td>
          <td>null</td>
          {/* <td>
            {inputs.tn} = {Note.freq(inputs.tn)}Hz
          </td>
          <td>{jiNotes.harmony[0]}Hz</td>
          <td>{Note.freq(inputs.tn) - jiNotes.harmony}Hz</td> */}
        </tr>
        <tr>
          <td>lead</td>
          <td>null</td>
          <td>null</td>
          <td>null</td>
        </tr>
        <tr>
          <td>bari</td>
          <td>null</td>
          <td>null</td>
          <td>null</td>
        </tr>
        <tr>
          <td>bass</td>
          <td>null</td>
          <td>null</td>
          <td>null</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Haps;
