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
      <strong>To adjust the predicted sales figure of $14,703.35 for March 1, 2025, we need to consider real-time factors that could influence sales in Santa Monica. These factors include weather conditions, local events, and other situational elements.</strong><br/><br/>
      <strong>Weather Conditions:</strong><br/>
      In March 2025, Santa Monica experienced cooler-than-average temperatures and increased precipitation. The Climate Prediction Center anticipated wetter-than-average weather in northern California, with drier conditions in the southeast. March forecasts predicted cooler-than-average temperatures in Northern California, which could have influenced the overall weather patterns affecting Santa Monica. ​<br/><br/>
      <strong>Local Events:</strong><br/>
      God of War 20th Anniversary Event: On March 15, 2025, Santa Monica Studios hosted a 20th-anniversary celebration for the "God of War" series at the Gallery Nucleus in Alhambra, near Los Angeles. This event featured developer talks and autograph sessions. While not directly in Santa Monica, such events can influence local sales as fans may travel from various parts of the city. ​<br/><br/>
      Beach Closures Due to Rainstorm: A significant rainstorm in early March led to the closure of all Los Angeles County beaches, including those in Santa Monica, due to contamination concerns. The closures were expected to last until March 14, 2025, potentially deterring tourists and affecting sales in beach-adjacent businesses. ​<br/><br/>
      <strong>Adjusting the Sales Prediction:</strong><br/>
      Considering these factors:<br/><br/>
      <strong>Negative Impact:</strong> The beach closures and potential decrease in tourist activity likely had a negative impact on sales, especially for businesses reliant on beachgoers.<br/><br/>
      <strong>Neutral to Positive Impact:</strong> The God of War event, while not in Santa Monica, may have had a neutral to positive effect on sales, attracting visitors who could have engaged in additional local spending.​<br/><br/>
      Given the limited data on the specific impact of these events and weather conditions, a precise adjustment to the sales prediction is challenging. However, factoring in the negative impact of beach closures and the potential positive influence of the nearby gaming event, a conservative estimate would suggest a modest decrease in sales for March 1, 2025.<br/><br/>
      <strong>Revised Sales Estimate:</strong> Adjusting the original prediction by a 5% decrease accounts for the adverse effects of beach closures while acknowledging the mitigating factors.<br/><br/>
      <strong>New Sales Prediction:</strong> $14,703.35 * (1 - 0.05) = $13,968.18​<br/><br/>
      Therefore, the adjusted sales prediction for March 1, 2025, is approximately <strong>$13,968.18</strong>.
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
            <h3 className="text-lg font-semibold text-white">Today's Sales</h3>
            <p className="mt-3 text-xl text-white">$13,394.23</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white">Predicted Sales for Tomorrow</h3>
            <p className="mt-3 text-xl text-white">$14,703.35</p>
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
