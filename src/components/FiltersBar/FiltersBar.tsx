import React from 'react';
import type { Category, SortOption } from '../../types';
import { Select } from '../ui/Select';
import './FiltersBar.css';

interface FiltersBarProps {
  maxPrice: number;
  category: Category;
  sort: SortOption;
  onMaxPriceChange: (price: number) => void;
  onCategoryChange: (category: Category) => void;
  onSortChange: (sort: SortOption) => void;
}

export const FiltersBar: React.FC<FiltersBarProps> = ({
  maxPrice,
  category,
  sort,
  onMaxPriceChange,
  onCategoryChange,
  onSortChange,
}) => {
  const categoryOptions = [
    { value: 'All', label: 'All Categories' },
    { value: 'Jackets', label: 'Jackets' },
    { value: 'Hoodies', label: 'Hoodies' },
    { value: 'Trousers', label: 'Trousers' },
    { value: 'Trainers', label: 'Trainers' },
    { value: 'Boots', label: 'Boots' },
  ];

  const sortOptions = [
    { value: 'similarity', label: 'Most Similar' },
    { value: 'price-low', label: 'Lowest Price' },
    { value: 'price-high', label: 'Highest Price' },
  ];

  return (
    <div className="filters-bar">
      <div className="filters-bar__item">
        <label className="filters-bar__label">
          Max Price: £{maxPrice}
        </label>
        <input
          type="range"
          min="20"
          max="200"
          step="10"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="filters-bar__slider"
        />
      </div>
      <div className="filters-bar__item">
        <Select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value as Category)}
          options={categoryOptions}
        />
      </div>
      <div className="filters-bar__item">
        <Select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          options={sortOptions}
        />
      </div>
    </div>
  );
};
