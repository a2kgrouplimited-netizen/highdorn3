import React from 'react';
import { Shield, Calculator, ScrollText, Users2, Clock, Award, Download, PhoneCall, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Pensions = () => {
  const pensionBenefits = [
    {
      icon: Shield,
      title: 'Defined Benefit Scheme',
      description: 'Guaranteed pension income based on your salary and years of service',
      details: ['Final salary calculation', 'Inflation protection', 'Spouse benefits']
    },
    {
      icon: Calculator,
      title: 'Competitive Contributions',
      description: 'Generous employer contributions to secure your financial future',
      details: ['Up to 15% employer contribution', 'Employee matching', 'Additional voluntary contributions']
    },
    {
      icon: Clock,
      title: 'Early Retirement Options',
      description: 'Flexible retirement planning with early access provisions',
      details: ['Early retirement from age 55', 'Actuarial reductions apply', 'Phased retirement available']
    },
    {
      icon: Award,
      title: 'Death Benefits',
      description: 'Comprehensive protection for your loved ones',
      details: ['Lump sum death benefit', 'Spouse pension', 'Dependent children benefits']
    }
  ];

  const keyFeatures = [
    {
      title: 'Pension Calculation',
      description: 'Your pension is calculated as 1/60th of your final pensionable salary for each year of pensionable service.',
      example: 'Example: 30 years service × £60,000 salary ÷ 60 = £30,000 annual pension'
    },
    {
      title: 'Normal Retirement Age',
      description: 'The normal retirement age is 65, with options for early or late retirement.',
      example: 'Early retirement available from age 55 with actuarial reduction'
    },
    {
      title: 'Pension Increases',
      description: 'Pensions in payment increase annually in line with inflation (RPI) up to a maximum of 5% per year.',
      example: 'Your pension maintains its purchasing power throughout retirement'
    },
    {
      title: 'Transfer Values',
      description: 'Transfer your pension to another scheme if you leave before retirement.',
      example: 'Cash Equivalent Transfer Value (CETV) available on request'
    }
  ];

  const documents = [
    {
      title: 'Scheme Booklet 2024',
      description: 'Complete guide to the Highdorn Pension Scheme benefits and rules',
      size: '2.8 MB',
      type: 'PDF'
    },
    {
      title: 'Annual Report 2023',
      description: 'Trustee report and financial statements for the pension scheme',
      size: '1.9 MB',
      type: 'PDF'
    },
    {
      title: 'Investment Report',
      description: 'Details of pension fund investments and performance',
      size: '1.4 MB',
      type: 'PDF'
    },
    {
      title: 'Pension Calculator',
      description: 'Interactive tool to estimate your pension benefits',
      size: '0.5 MB',
      type: 'Excel'
    }
  ];

  const contactInfo = [
    {
      icon: PhoneCall,
      title: 'Pension Helpline',
      details: ['020 7123 9999', 'Mon-Fri: 9:00-17:00']
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: ['pensions@highdorn.co.uk', 'Response within 2 working days']
    },
    {
      icon: ScrollText,
      title: 'Pension Administrator',
      details: ['Hymans Robertson', 'Professional pension administration']
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
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Pension Scheme</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#FFFFFF' }}>
              Secure your financial future with our comprehensive defined benefit pension scheme
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pension Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pension Benefits
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our defined benefit pension scheme provides security and peace of mind for your retirement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {pensionBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {benefit.description}
                </p>
                <ul className="space-y-1">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1 h-1 bg-violet-600 rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Key Scheme Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-6 border border-violet-200 dark:border-violet-800"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {feature.description}
                  </p>
                  <p className="text-sm text-violet-700 dark:text-violet-300 italic">
                    {feature.example}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Documents and Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Documents & Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((document, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {document.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {document.description}
                      </p>
                    </div>
                    <span className="bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 px-2 py-1 rounded text-xs">
                      {document.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {document.size}
                    </span>
                    <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Pension Support & Contact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {contact.title}
                  </h4>
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pensions;