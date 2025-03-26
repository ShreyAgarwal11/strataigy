'use client';

import { useEffect } from 'react';
import * as d3 from 'd3';

interface SalesData {
  month: string;
  sales: number;
}

export default function SalesPredictionChart() {
  useEffect(() => {
    // Sample sales data (past and predicted)
    const data: SalesData[] = [
      { month: 'January', sales: 120 },
      { month: 'February', sales: 150 },
      { month: 'March', sales: 170 },
      { month: 'April', sales: 210 },
      { month: 'May', sales: 250 },
      { month: 'June', sales: 300 },
      { month: 'July', sales: 350 }, // Prediction start
      { month: 'August', sales: 380 },
      { month: 'September', sales: 410 },
      { month: 'October', sales: 450 },
      { month: 'November', sales: 500 },
      { month: 'December', sales: 550 },
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3
      .select('#sales-chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Set up scales
    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    x.domain(data.map(d => d.month)); // Set x domain based on months
    y.domain([0, d3.max(data, d => d.sales) || 0]); // Safe fallback for undefined values

    // Add x-axis
    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('.tick text')
      .style('text-anchor', 'middle')
      .style('fill', '#e5e7eb'); // Tailwind gray

    // Add y-axis
    svg
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y))
      .selectAll('.tick text')
      .style('fill', '#e5e7eb'); // Tailwind gray

    // Add the line for the actual sales
    const line = d3
      .line<SalesData>() // Explicitly set the type of the data used in the line function
      .x(d => x(d.month) + x.bandwidth() / 2) // Position the line correctly for each month
      .y(d => y(d.sales));

    svg
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('stroke', '#4c51bf') // Tailwind indigo
      .attr('stroke-width', 2)
      .attr('d', line);

    // Optional: Add predictions as a dashed line
    const predictedData = data.slice(6); // Slice to get predicted months
    svg
      .append('path')
      .data([predictedData])
      .attr('class', 'predicted-line')
      .attr('fill', 'none')
      .attr('stroke', '#e53e3e') // Tailwind red
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '4')
      .attr('d', line);
  }, []);

  return (
    <div className="bg-gray-900 py-2 sm:py-2">
      <div className="mx-auto max-w-2xl px-2 lg:max-w-7xl lg:px-2 text-center">
        <div id="sales-chart" className="mt-10"></div>
      </div>
    </div>
  );
}
