"use client";

import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const newTerm = e.target.value;
    setSearch(newTerm);
    onSearch(newTerm);
  };

  return (
    <div className="relative flex-1">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search problem statements..."
        value={search}
        onChange={handleSearch}
        className="pl-8"
      />
    </div>
  );
}
