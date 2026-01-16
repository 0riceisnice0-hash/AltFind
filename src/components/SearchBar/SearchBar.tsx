import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { isUrl } from '../../utils/search';
import './SearchBar.css';

interface SearchBarProps {
  initialValue?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  initialValue = '', 
  placeholder = 'Search for clothes or paste a product link...',
  onSearch
}) => {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();
  const isUrlDetected = isUrl(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/results?q=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__input-wrapper">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="search-bar__input"
        />
        {isUrlDetected && (
          <Badge variant="info">
            Link detected
          </Badge>
        )}
      </div>
      <Button type="submit" size="large">
        Search
      </Button>
    </form>
  );
};
