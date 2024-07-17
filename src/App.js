
import { useEffect, useState, } from 'react';
import axios from "axios"
import './App.css';
import BasicSelect from "./dropdown"



function App() {

  const [data, setData] = useState([]);
  const [selectStock, setSelectStock] = useState(null);


  useEffect(() => {

    const headers = {
      "content-type": "application/json",
      "accept": "application/json",
    }

    const fetchData = async () => {

      try {

        console.log("try to fetching the data from api...")

        const result = await axios.get(`http://localhost:3000/api/fetch-data?code=${selectStock}`, { headers });

        setData(result.data.data);


      } catch (err) {

        console.error("error while fetching the data", err)
      }
    }
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [selectStock]);

  return (
    <>
      <div className='App'>

        <h1 style={{ color: "green" }}>Live Coin Watch</h1>
        <BasicSelect setSelectStock={setSelectStock} />

        <table>
          <thead>
            <tr>
              <th style={{ color: "red", background: "yellow" }}>Code</th>

              <th style={{ color: "red", background: "yellow" }}>Rate</th>

              <th style={{ color: "red", background: "yellow" }}>Volume</th>

              <th style={{ color: "red", background: "yellow" }}>Cap</th>

            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (data.map((item, index) => (
              <tr>

                <td>{item.code}</td>

                <td>{item.rate}</td>

                <td>{item.volume}</td>

                <td>{item.cap}</td>

              </tr>

            ))) : (
              <tr>
                <td colSpan="5" style={{ color: "red" }}> Select the stock from above dropdown to load data...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;