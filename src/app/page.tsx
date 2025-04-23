// app/sales-dashboard/page.tsx
'use client';
import SalesPredictionChart from "@/app/components/ui/saleschart";
import { useState } from "react";

export default function SalesDashboard() {
  // State for handling real-time insights generation
  const [insights, setInsights] = useState<string | null>(null);

  // Function to generate real-time insights (this can be replaced with real data fetching logic)
  const generateInsights = () => {
    // Placeholder for generating real-time insights for tomorrow
    setInsights(`
      <h2>Adjusted Sales Forecast for Jonathan Club Santa Monica</h2>
      <p><strong>Based on the LSTM model's prediction of $13,635.22 in sales for Jonathan Club Santa Monica on Thursday, April 24, 2025,</strong> let's adjust this forecast by considering real-time factors that could influence the actual sales.</p>

      <h3>🌤 Weather Forecast</h3>
      <p>The weather in Santa Monica on April 24 is expected to be cloudy with a high of 64°F (18°C) and a low of 55°F (13°C). The average high temperature in April is around 69°F (20.8°C). Given that the forecasted temperature is slightly below average, this may result in fewer visitors to outdoor areas, potentially leading to a decrease in sales.</p>
      <ul>
          <li>Weather Atlas +1</li>
          <li>Weather U.S. +1</li>
      </ul>
      <p><strong>Adjustment Factor:</strong> -2%</p>

      <h3>🎉 Local Events</h3>
      <p>There are no major events or holidays in Santa Monica on April 24. The previous event, "Locals’ Night at Santa Monica Pier," occurred on April 17. With no significant events on the forecasted date, there may be a slight decrease in foot traffic, which could impact sales.</p>
      <p><em>Source: Visit Santa Monica</em></p>
      <p><strong>Adjustment Factor:</strong> -1%</p>

      <h3>🚗 Traffic Conditions</h3>
      <p>Traffic conditions in Santa Monica on weekdays can vary, but there are no specific disruptions or events reported for April 24. Normal weekday traffic is expected, which should not significantly affect sales.</p>
      <p><strong>Adjustment Factor:</strong> 0%</p>

      <h3>🧮 Adjusted Sales Forecast</h3>
      <table border="1" cellpadding="8" cellspacing="0">
          <thead>
              <tr>
                  <th>Factor</th>
                  <th>Adjustment</th>
                  <th>Adjusted Sales Forecast</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Weather (cooler than average)</td>
                  <td>-2%</td>
                  <td>$13,365.31</td>
              </tr>
              <tr>
                  <td>No major local events</td>
                  <td>-1%</td>
                  <td>$13,199.65</td>
              </tr>
              <tr>
                  <td>Normal traffic conditions</td>
                  <td>0%</td>
                  <td>$13,199.65</td>
              </tr>
          </tbody>
      </table>
      <p><strong>Final Adjusted Sales Forecast: $13,199.65</strong></p>

      <p>Considering these factors, the adjusted sales forecast for Jonathan Club Santa Monica on April 24, 2025, is approximately <strong>$13,199.65</strong>, a slight decrease from the LSTM model's prediction.</p>

      <p>If you need further analysis or adjustments based on additional factors, feel free to ask!</p>
    `);
  };

  return (
    <div className="bg-gray-900 py-2 sm:py-0">
      <div className="mx-auto max-w-full">
        <h2 className="text-4xl font-semibold tracking-tight text-white text-start p-4">AI Sales Analyst</h2>
        
        {/* Sales Prediction Chart */}
        <div className="w-full">
          <SalesPredictionChart />
        </div>

        {/* Today's Sales and Predicted Sales */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white">Today's Predicted Sales</h3>
            <p className="mt-3 text-xl text-white">$11,606.58</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white">Predicted Sales for Tomorrow</h3>
            <p className="mt-3 text-xl text-white">$13,635.22</p>
          </div>
        </div>

        {/* Button to generate real-time insights */}
        <div className="mt-6 space-y-4">
          <div className="w-full text-center">
            <button
              onClick={generateInsights}
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
            >
              Generate Real-time Insights for Tomorrow
            </button>
          </div>

          {/* Insights Section */}
          {insights && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Real-time Insights:</h3>
              {/* Using dangerouslySetInnerHTML to render formatted insights */}
              <p className="mt-3 text-lg text-white" dangerouslySetInnerHTML={{ __html: insights }}></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
