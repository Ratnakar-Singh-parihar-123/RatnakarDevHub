import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [businessMetrics, setBusinessMetrics] = useState({
    monthlyRevenue: 50000,
    conversionRate: 2.5,
    averageOrderValue: 150,
    monthlyVisitors: 10000,
    currentWebsiteCost: 500
  });

  const [projectedImprovements, setProjectedImprovements] = useState({
    conversionIncrease: 40,
    trafficIncrease: 25,
    orderValueIncrease: 15,
    operationalEfficiency: 20
  });

  const [roiResults, setRoiResults] = useState({});

  useEffect(() => {
    calculateROI();
  }, [businessMetrics, projectedImprovements]);

  const calculateROI = () => {
    const currentMonthlyRevenue = businessMetrics?.monthlyRevenue;
    const currentAnnualRevenue = currentMonthlyRevenue * 12;
    
    // Calculate improved metrics
    const newConversionRate = businessMetrics?.conversionRate * (1 + projectedImprovements?.conversionIncrease / 100);
    const newTraffic = businessMetrics?.monthlyVisitors * (1 + projectedImprovements?.trafficIncrease / 100);
    const newOrderValue = businessMetrics?.averageOrderValue * (1 + projectedImprovements?.orderValueIncrease / 100);
    
    // Calculate new revenue
    const newMonthlyOrders = (newTraffic * newConversionRate) / 100;
    const newMonthlyRevenue = newMonthlyOrders * newOrderValue;
    const newAnnualRevenue = newMonthlyRevenue * 12;
    
    // Calculate savings from operational efficiency
    const monthlySavings = businessMetrics?.currentWebsiteCost * (projectedImprovements?.operationalEfficiency / 100);
    const annualSavings = monthlySavings * 12;
    
    // Total benefits
    const revenueIncrease = newAnnualRevenue - currentAnnualRevenue;
    const totalAnnualBenefit = revenueIncrease + annualSavings;
    
    // ROI calculation (assuming average project cost of $15,000)
    const projectCost = 15000;
    const roi = ((totalAnnualBenefit - projectCost) / projectCost) * 100;
    const paybackPeriod = projectCost / (totalAnnualBenefit / 12);

    setRoiResults({
      currentAnnualRevenue,
      newAnnualRevenue,
      revenueIncrease,
      annualSavings,
      totalAnnualBenefit,
      projectCost,
      roi,
      paybackPeriod,
      newConversionRate,
      newTraffic,
      newOrderValue
    });
  };

  const handleMetricChange = (key, value) => {
    setBusinessMetrics(prev => ({
      ...prev,
      [key]: parseFloat(value) || 0
    }));
  };

  const handleImprovementChange = (key, value) => {
    setProjectedImprovements(prev => ({
      ...prev,
      [key]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US')?.format(Math.round(num));
  };

  return (
    <div className="glassmorphism rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold holographic-text mb-2">
          ROI Calculator
        </h3>
        <p className="text-text-secondary">
          Calculate the potential return on investment for your new website
        </p>
      </div>
      {/* Current Business Metrics */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="BarChart3" size={18} className="text-primary mr-2" />
          Current Business Metrics
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Monthly Revenue ($)
            </label>
            <input
              type="number"
              value={businessMetrics?.monthlyRevenue}
              onChange={(e) => handleMetricChange('monthlyRevenue', e?.target?.value)}
              className="w-full px-4 py-2 bg-surface border border-surface rounded-lg text-text-primary focus:border-primary focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Conversion Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={businessMetrics?.conversionRate}
              onChange={(e) => handleMetricChange('conversionRate', e?.target?.value)}
              className="w-full px-4 py-2 bg-surface border border-surface rounded-lg text-text-primary focus:border-primary focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Average Order Value ($)
            </label>
            <input
              type="number"
              value={businessMetrics?.averageOrderValue}
              onChange={(e) => handleMetricChange('averageOrderValue', e?.target?.value)}
              className="w-full px-4 py-2 bg-surface border border-surface rounded-lg text-text-primary focus:border-primary focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Monthly Visitors
            </label>
            <input
              type="number"
              value={businessMetrics?.monthlyVisitors}
              onChange={(e) => handleMetricChange('monthlyVisitors', e?.target?.value)}
              className="w-full px-4 py-2 bg-surface border border-surface rounded-lg text-text-primary focus:border-primary focus:outline-none"
            />
          </div>
        </div>
      </div>
      {/* Projected Improvements */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="TrendingUp" size={18} className="text-primary mr-2" />
          Expected Improvements
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(projectedImprovements)?.map(([key, value]) => {
            const labels = {
              conversionIncrease: "Conversion Rate Increase (%)",
              trafficIncrease: "Traffic Increase (%)",
              orderValueIncrease: "Order Value Increase (%)",
              operationalEfficiency: "Operational Efficiency (%)"
            };
            
            return (
              <div key={key}>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  {labels?.[key]}
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => handleImprovementChange(key, e?.target?.value)}
                    className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #00ff88 0%, #00ff88 ${value}%, #333333 ${value}%, #333333 100%)`
                    }}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-text-secondary">0%</span>
                    <span className="text-sm font-medium text-primary">{value}%</span>
                    <span className="text-xs text-text-secondary">100%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ROI Results */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Calculator" size={18} className="text-primary mr-2" />
          ROI Analysis
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-primary/10 rounded-lg neon-border-subtle text-center">
            <Icon name="DollarSign" size={24} className="text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">
              {formatCurrency(roiResults?.revenueIncrease || 0)}
            </div>
            <div className="text-sm text-text-secondary">Annual Revenue Increase</div>
          </div>
          
          <div className="p-4 bg-success/10 rounded-lg border border-success/20 text-center">
            <Icon name="Percent" size={24} className="text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-success">
              {Math.round(roiResults?.roi || 0)}%
            </div>
            <div className="text-sm text-text-secondary">Return on Investment</div>
          </div>
          
          <div className="p-4 bg-warning/10 rounded-lg border border-warning/20 text-center">
            <Icon name="Clock" size={24} className="text-warning mx-auto mb-2" />
            <div className="text-2xl font-bold text-warning">
              {Math.round(roiResults?.paybackPeriod || 0)}
            </div>
            <div className="text-sm text-text-secondary">Months to Break Even</div>
          </div>
          
          <div className="p-4 bg-surface/30 rounded-lg text-center">
            <Icon name="Savings" size={24} className="text-text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-text-primary">
              {formatCurrency(roiResults?.totalAnnualBenefit || 0)}
            </div>
            <div className="text-sm text-text-secondary">Total Annual Benefit</div>
          </div>
        </div>
      </div>
      {/* Detailed Breakdown */}
      <div className="p-6 bg-surface/30 rounded-xl">
        <h5 className="font-semibold text-text-primary mb-4">Detailed Projection</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h6 className="font-medium text-text-primary mb-2">Current Performance</h6>
            <div className="space-y-1 text-text-secondary">
              <div>Annual Revenue: {formatCurrency(roiResults?.currentAnnualRevenue || 0)}</div>
              <div>Conversion Rate: {businessMetrics?.conversionRate}%</div>
              <div>Monthly Visitors: {formatNumber(businessMetrics?.monthlyVisitors)}</div>
            </div>
          </div>
          
          <div>
            <h6 className="font-medium text-text-primary mb-2">Projected Performance</h6>
            <div className="space-y-1 text-text-secondary">
              <div>Annual Revenue: {formatCurrency(roiResults?.newAnnualRevenue || 0)}</div>
              <div>Conversion Rate: {(roiResults?.newConversionRate || 0)?.toFixed(1)}%</div>
              <div>Monthly Visitors: {formatNumber(roiResults?.newTraffic || 0)}</div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="mt-8 text-center">
        <Button
          variant="default"
          className="neon-glow-hover"
        >
          <Icon name="MessageCircle" size={18} className="mr-2" />
          Discuss Your ROI Potential
        </Button>
      </div>
    </div>
  );
};

export default ROICalculator;