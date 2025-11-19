import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  onSortChange,
  totalProjects,
  filteredCount 
}) => {
  const filterCategories = [
    {
      key: 'industry',
      label: 'Industry',
      icon: 'Building2',
      options: filters?.industries
    },
    {
      key: 'technology',
      label: 'Technology',
      icon: 'Code2',
      options: filters?.technologies
    },
    {
      key: 'type',
      label: 'Project Type',
      icon: 'Layers',
      options: filters?.types
    },
    {
      key: 'complexity',
      label: 'Complexity',
      icon: 'Zap',
      options: filters?.complexity
    }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent', icon: 'Clock' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'alphabetical', label: 'A-Z', icon: 'ArrowUpDown' },
    { value: 'complexity', label: 'Complexity', icon: 'TrendingUp' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glassmorphism rounded-xl p-6 mb-8"
    >
      {/* Search and Sort Row */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 bg-surface/50 border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary smooth-transition"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="appearance-none bg-surface/50 border border-border rounded-lg px-4 py-3 pr-10 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary smooth-transition cursor-pointer"
          >
            {sortOptions?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
          <Icon 
            name="ChevronDown" 
            size={16} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" 
          />
        </div>

        {/* Results Count */}
        <div className="flex items-center px-4 py-3 bg-primary/10 rounded-lg">
          <span className="text-primary font-medium">
            {filteredCount} of {totalProjects} projects
          </span>
        </div>
      </div>
      {/* Filter Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filterCategories?.map((category) => (
          <div key={category?.key} className="space-y-3">
            <div className="flex items-center space-x-2">
              <Icon name={category?.icon} size={16} className="text-primary" />
              <h4 className="font-medium text-text-primary">{category?.label}</h4>
            </div>
            <div className="space-y-2 max-h-32 overflow-y-auto custom-scrollbar">
              {category?.options?.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters?.[category?.key]?.includes(option) || false}
                    onChange={(e) => {
                      const currentFilters = activeFilters?.[category?.key] || [];
                      const newFilters = e?.target?.checked
                        ? [...currentFilters, option]
                        : currentFilters?.filter(f => f !== option);
                      onFilterChange(category?.key, newFilters);
                    }}
                    className="w-4 h-4 rounded border-2 border-border bg-surface/50 checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/50 smooth-transition"
                  />
                  <span className="text-sm text-text-secondary group-hover:text-text-primary smooth-transition">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Active Filters */}
      {Object.values(activeFilters)?.some(filters => filters?.length > 0) && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-text-primary">Active Filters</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onFilterChange('clear', [])}
              iconName="X"
              iconPosition="left"
              iconSize={14}
            >
              Clear All
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters)?.map(([category, filters]) =>
              filters?.map((filter) => (
                <span
                  key={`${category}-${filter}`}
                  className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/20 text-primary text-sm rounded-full neon-border-subtle"
                >
                  <span>{filter}</span>
                  <button
                    onClick={() => {
                      const newFilters = activeFilters?.[category]?.filter(f => f !== filter);
                      onFilterChange(category, newFilters);
                    }}
                    className="hover:text-primary-foreground smooth-transition"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default FilterBar;