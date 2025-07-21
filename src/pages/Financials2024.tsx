import React from 'react';
import { TrendingUp, CircleDollarSign, PieChart, BarChart3, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Financials2024 = () => {
  const keyMetrics = [
    {
      title: 'Total Revenue',
      value: '£125.6M',
      change: '+12.3%',
      trend: 'up',
      icon: CircleDollarSign
    },
    {
      title: 'Net Profit',
      value: '£28.4M',
      change: '+8.7%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Property Value',
      value: '£2.1B',
      change: '+15.2%',
      trend: 'up',
      icon: PieChart
    },
    {
      title: 'Occupancy Rate',
      value: '94.8%',
      change: '+2.1%',
      trend: 'up',
      icon: BarChart3
    }
  ];

  const quarterlyResults = [
    { quarter: 'Q1 2024', revenue: '£28.2M', profit: '£6.1M', occupancy: '92.3%' },
    { quarter: 'Q2 2024', revenue: '£31.5M', profit: '£7.2M', occupancy: '93.8%' },
    { quarter: 'Q3 2024', revenue: '£33.1M', profit: '£7.8M', occupancy: '95.1%' },
    { quarter: 'Q4 2024', revenue: '£32.8M', profit: '£7.3M', occupancy: '94.8%' }
  ];

  const reports = [
    {
      title: 'Annual Report 2024',
      description: 'Comprehensive annual financial report and business review',
      size: '2.4 MB',
      type: 'PDF'
    },
    {
      title: 'Q4 2024 Results',
      description: 'Fourth quarter financial results and market analysis',
      size: '1.8 MB',
      type: 'PDF'
    },
    {
      title: 'Property Portfolio Valuation',
      description: 'Independent valuation of property portfolio as of Dec 2024',
      size: '3.1 MB',
      type: 'PDF'
    },
    {
      title: 'Sustainability Report 2024',
      description: 'Environmental and social governance report',
      size: '1.5 MB',
      type: 'PDF'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Financial Results 2024</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#FFFFFF' }}>
              Strong performance across all key metrics with continued growth and expansion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className={`text-sm font-medium px-2 py-1 rounded ${
                    metric.trend === 'up' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {metric.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {metric.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quarterly Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-16"
          >
            <div className="px-6 py-4 bg-emerald-50 dark:bg-emerald-900/20 border-b border-emerald-200 dark:border-emerald-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Quarterly Performance 2024
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Quarter
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Net Profit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Occupancy Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {quarterlyResults.map((result, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {result.quarter}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        {result.revenue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        {result.profit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        {result.occupancy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Financial Reports */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Financial Reports & Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {report.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {report.description}
                      </p>
                    </div>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded text-xs">
                      {report.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {report.size}
                    </span>
                    <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Financials2024;