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
    setInsights(`Based on the weather forecast for Santa Monica on Friday, April 25, 2025, the day is expected to be cloudy with a high of 63°F and a low of 52°F. While there is no significant rainfall expected, the overcast conditions may slightly reduce foot traffic and outdoor activities. However, the moderate temperatures are conducive to indoor dining and events, which could help maintain steady patronage.​

Regarding local events, while there are no major events scheduled in Santa Monica for April 25, 2025, nearby areas like Culver City are hosting fundraisers, which might influence local traffic patterns and customer behavior. It's advisable to monitor any last-minute events or changes that could impact the area.​

Given these factors, the predicted sales of $17,538.40 for tomorrow are reasonable. Unless there are significant changes in weather conditions or unexpected events, no adjustments to the forecast are necessary at this time.​
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
            <p className="mt-3 text-xl text-white">$13,635.22</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white">Predicted Sales for Tomorrow</h3>
            <p className="mt-3 text-xl text-white">$17,538.40</p>
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
