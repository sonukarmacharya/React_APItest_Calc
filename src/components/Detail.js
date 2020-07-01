import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/history.scss";

export default function Detail() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://nepalcorona.info/api/v1/data/nepal").then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <p>This is history page.</p>
      <table>
        <thead>
          <tr>
            <th>tested_positive</th>
            <th>tested_negative</th>
            <th>tested_total</th>
            <th>in_isolation</th>
            <th>quarantined</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>{data.tested_positive}</p>
            </td>
            <td>
              <p>{data.tested_negative}</p>
            </td>
            <td>
              <p>{data.tested_total}</p>
            </td>
            <td>
              <p>{data.in_isolation}</p>
            </td>
            <td>
              <p>{data.quarantined}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
