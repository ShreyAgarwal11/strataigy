'use client';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import * as XLSX from 'xlsx';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface SalesData {
  Date: string | number; // Allow both string or number for date format
  Predicted_Sales: number;
}

export default function SalesPredictionChart() {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/future_sales_predictions.csv');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]]; // Get the first sheet
        const jsonData = XLSX.utils.sheet_to_json<SalesData>(sheet);

        // Format the date to remove time and handle serial numbers correctly
        const dates = jsonData.map(d => {
          const dateValue = d.Date;
          let dateString = '';
          if (typeof dateValue === 'number') {
            // For numeric Excel dates, convert to JavaScript Date object
            const excelEpoch = 25569; // Excel date base
            const date = new Date((dateValue - excelEpoch) * 86400 * 1000);
            date.setDate(date.getDate() + 1); // Adjust by adding 1 to get the correct date
            dateString = date.toLocaleDateString(); // Format the date
          } else {
            // For string date, just extract the date portion
            const dateObj = new Date(dateValue);
            dateString = dateObj.toLocaleDateString(); // Format the date
          }
          return dateString;
        });

        const predictedSales = jsonData.map(d => d.Predicted_Sales);

        setChartData({
          labels: dates,
          datasets: [
            {
              label: 'Predicted Sales',
              data: predictedSales,
              borderColor: '#e53e3e',
              borderWidth: 2,
              fill: false,
              tension: 0
            },
          ],
        });
      } catch (error) {
        console.error('Error loading or parsing Excel file:', error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="w-full h-[500px] p-2 border-2 border-gray-600 rounded-lg"> {/* Add border and rounded corners */}
      {chartData && <Line data={chartData} options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              color: 'white', // Set X-axis labels to white
            },
          },
          y: {
            ticks: {
              color: 'white', // Set Y-axis labels to white
            },
          },
        },
      }} />}
    </div>
  );
}
