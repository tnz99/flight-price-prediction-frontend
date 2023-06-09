import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../../components";
import yaml from 'js-yaml';

import './index.css';

const Info = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const loadYamlFile = async () => {
      try {
        const response = await fetch('airlines.yml'); 
        console.log(response)
        const data = await response.text();
        const parsedData = yaml.load(data);
        console.log(parsedData)
        setTableData(Object.entries(parsedData));
      } catch (error) {
        console.error('Error loading YAML file:', error);
      }
    };

    loadYamlFile();
  }, []);

  return (
    <div>
      <Navbar />
      <section>
        <table className="table">
          <thead>
            <tr>
              <th>Airline</th>
              <th>Source</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(([airline, routes], index) => (
              <tr key={index}>
                <td>{airline}</td>
                <td>
                  <ul>
                    {routes.source.map((source, idx) => (
                      <li key={idx}>{source}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {routes.destination.map((destination, idx) => (
                      <li key={idx}>{destination}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer />
    </div>
  );
};

export default Info;


