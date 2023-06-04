import React, { useState, useEffect, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './home.css'
import Form from "./form";
import { Navbar, WhySection, Footer, HeroBanner } from "../../components";

const Chart = ({ data }) => {
    const chartRef = useRef(null);
    const [chartWidth, setChartWidth] = useState(0);
  
    useEffect(() => {
      const handleResize = () => {
        if (chartRef.current) {
          const containerWidth = chartRef.current.clientWidth;
          setChartWidth(containerWidth);
        }
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div ref={chartRef} className="chart-container">
        <LineChart
          className="graph"
          data={data}
          width={chartWidth}
          height={400}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    );
  };

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://flight-price-prediction-backend.onrender.com/api/v1/predictions')
            .then(response => response.json())
            .then(data => { setData(data) });
    }, []);

    return (
        <div className="flex flex-column align-flex-center">
            <Navbar />
            <HeroBanner>
                <h1 className="hero-main-text">Fly Smarter, Not Harder</h1>
                <p className="hero-sub-text">Get the best deals on flights with our advanced price prediction tool.</p>
                <Form />
            </HeroBanner>
            <WhySection title="Ready to save on airfare and travel smarter? Why settle for less when you can choose the best?"/>
            <div className="charts">
                <h1 className="charts-title">Flight Price Analysis</h1>
                <Chart data={data} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
