// app/sales-dashboard/page.tsx

import SalesPredictionChart from "@/app/components/ui/saleschart";

export default function SalesDashboard() {
  return (
    <div className="bg-gray-1000 py-2 sm:py-0">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-0">
      <h2 className="text-4xl font-semibold tracking-tight text-white">Sales Prediction</h2>
        <div className="mt-1 grid grid-cols-1 gap-4 sm:mt-1 lg:grid-cols-6 lg:grid-rows-2">
          {/* Releases Card */}
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <SalesPredictionChart />
              
            </div>
          </div>

          {/* Integrations Card */}
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
              <img
                alt="Integrations"
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-400">Integrations</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">Connect your favorite tools</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa.
                </p>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
              <img
                alt="Security"
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-security.png"
                className="h-80 object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-400">Security</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">Advanced access control</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Card */}
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <img
                alt="Performance"
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-gray-400">Performance</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-white">Lightning-fast builds</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at
                  augue sed elit dictum vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
