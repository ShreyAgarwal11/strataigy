'use client'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels' // Import the datalabels plugin
import { useState } from 'react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels)

interface User {
  name: string
  email: string
  imageUrl: string
}

interface NavigationItem {
  name: string
  href: string
  current: boolean
}

interface UserNavigationItem {
  name: string
  href: string
}

const user: User = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation: NavigationItem[] = [
  { name: 'Customers', href: '#', current: false },
  { name: 'Sales', href: '#', current: false },
  { name: 'Demand', href: '#', current: false },
]

const userNavigation: UserNavigationItem[] = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const chartData = {
  labels: ['Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28'], // Dates for the upcoming week
  datasets: [
    {
      label: 'Customer Footfall',
      data: [120, 150, 180, 170, 200, 220, 240], // Dummy data for customer footfall projections
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
}

export default function Example() {
  const [showInsights, setShowInsights] = useState(false)

  const handleGenerateInsights = () => {
    setShowInsights(true)
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        // Tooltip customizations (optional)
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.raw}`; // Customize tooltip label
          },
        },
      },
      datalabels: {
        // Display data point values on the chart
        align: 'top' as const,  // Ensure it's treated as a valid string literal type
        anchor: 'end',
        color: 'rgb(75, 192, 192)',
        font: {
          weight: 'bold',
          size: 12,
        },
        formatter: function (value: number) {
          return value.toString(); // Display value at data point
        },
      },
    },
  };
  
  

  return (
    <>
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="border-b border-gray-700">
                <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                  <div className="flex items-center">
                    <div className="shrink-0"></div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon aria-hidden="true" className="size-6" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                          </MenuButton>
                        </div>
                        <MenuItems
                          transition
                          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                          {userNavigation.map((item) => (
                            <MenuItem key={item.name}>
                              <a
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                              >
                                {item.name}
                              </a>
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                      <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="border-b border-gray-700 md:hidden">
              <div className="space-y-1 px-2 py-3 sm:px-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="shrink-0">
                    <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base/5 font-medium text-white">{user.name}</div>
                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">AI Demand Forecasting</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6">
              {/* Customer Footfall Projection Chart */}
              <Line data={chartData} options={chartOptions} />
            </div>

            {/* Button Outside Content Area */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleGenerateInsights}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Generate Real Time Insights
              </button>
            </div>

            {/* Content Section Below Chart */}
            <div className="mt-6 bg-white p-6 shadow-lg rounded-lg">
              {!showInsights ? (
                <p className="text-center text-gray-500">Click below to generate real-time insights</p>
              ) : (
                <div className="text-gray-500 space-y-4">
                  <p className="text-lg font-medium">
                    Okay, so your time series model has predicted that around 50 people will attend the club tomorrow. Now, let’s refine this prediction using real-time external factors like weather, events, and social sentiment.
                  </p>
                  <h3 className="font-semibold">Step 1: Adjusting the Forecast with External Factors</h3>
                  <div className="space-y-4">
                    <p>Your model likely used historical attendance patterns, but let’s apply real-time adjustments:</p>
                    <ol className="list-decimal pl-5">
                      <li>
                        <strong>Weather Impact (Sunny, 66°F)</strong>
                        <ul className="list-disc pl-5">
                          <li>Effect: Good weather encourages outdoor activities. Members may prefer the Beach Club location.</li>
                          <li>Adjustment: +10% attendance (More members might visit due to favorable weather).</li>
                          <li>Revised Estimate: 55 attendees</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Local Events Impact (Concerts & Sports)</strong>
                        <ul className="list-disc pl-5">
                          <li>Effect: Some members may attend concerts or post-game celebrations instead of the club.</li>
                          <li>Adjustment: -5% attendance (Events could pull some members away).</li>
                          <li>Revised Estimate: 52 attendees</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Social Media & News Sentiment (Trending Topics, Club Mentions)</strong>
                        <ul className="list-disc pl-5">
                          <li>If news/social media shows an increase in club discussions, attendance might rise.</li>
                          <li>If there are negative reviews or controversies, attendance might drop.</li>
                          <li>Hypothetical Adjustment: No major trends → No change.</li>
                        </ul>
                      </li>
                    </ol>
                  </div>

                  <h3 className="font-semibold">Step 2: Confidence Interval</h3>
                  <p>Even with adjustments, there’s always uncertainty in forecasting. A good approach is to provide a confidence range:</p>
                  <ul className="list-disc pl-5">
                    <li><strong>Lower Bound (Underestimation scenario)</strong> → 45 attendees (if external factors don’t contribute as expected).</li>
                    <li><strong>Upper Bound (Overestimation scenario)</strong> → 60 attendees (if more people decide to show up spontaneously).</li>
                  </ul>

                  <h3 className="font-semibold">Final Prediction:</h3>
                  <p><strong>Expected Attendance:</strong> 50-55 people</p>
                  <p><strong>Confidence Interval:</strong> 45-60 people</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
