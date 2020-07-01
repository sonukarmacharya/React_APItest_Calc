import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/history.scss";

export default function History() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://data.nepalcorona.info/api/v1/covid/timeline")
      .then((res) => {
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
            <th>date</th>
            <th>total cases</th>
            <th>new cases</th>
            <th>total Recoveries</th>
            <th>new Recoveries</th>
            <th>total Deaths</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {data.map((data) => (
                <p>{data.date}</p>
              ))}
            </td>
            <td>
              {data.map((data) => (
                <p>{data.totalCases}</p>
              ))}
            </td>
            <td>
              {data.map((data) => (
                <p>{data.newCases}</p>
              ))}
            </td>
            <td>
              {data.map((data) => (
                <p>{data.totalRecoveries}</p>
              ))}
            </td>
            <td>
              {data.map((data) => (
                <p>{data.newRecoveries}</p>
              ))}
            </td>
            <td>
              {data.map((data) => (
                <p>{data.totalDeaths}</p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
