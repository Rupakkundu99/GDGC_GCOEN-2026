"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Sidebar } from "./Sidebar";
import problemStatements from "./problemStatements.json"


// Get unique themes from the problem statements
const allThemes = Array.from(
  new Set(problemStatements.flatMap((ps) => ps.themes))
);

export function FilterOptions({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [themes, setThemes] = useState([]);

  const handleCategoryChange = (category) => {
    const newCategories = categories.includes(category)
      ? categories.filter((c) => c !== category)
      : [...categories, category];
    setCategories(newCategories);
    onFilterChange({ categories: newCategories, themes });
  };

  const handleThemeChange = (theme) => {
    const newThemes = themes.includes(theme)
      ? themes.filter((t) => t !== theme)
      : [...themes, theme];
    setThemes(newThemes);
    onFilterChange({ categories, themes: newThemes });
  };

  const handleApplyFilters = () => {
    onFilterChange({ categories, themes });
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    setCategories([]);
    setThemes([]);
    onFilterChange({ categories: [], themes: [] });
  };

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Filter
      </Button>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">Categories</h3>
            <div className="space-y-2">
              {["Hardware", "Software"].map((category) => (
                <div key={category} className="flex items-center">
                  <Checkbox
                    id={`category-${category}`}
                    checked={categories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Themes</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {allThemes.map((theme) => (
                <div key={theme} className="flex items-center">
                  <Checkbox
                    id={`theme-${theme}`}
                    checked={themes.includes(theme)}
                    onCheckedChange={() => handleThemeChange(theme)}
                  />
                  <label
                    htmlFor={`theme-${theme}`}
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {theme}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={handleClearFilters}>
              Clear Filters
            </Button>
            <Button onClick={handleApplyFilters}>Apply Filters</Button>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
