"use client";

import { FilterOptions } from "@/components/Hackthon/ProblemStatment/FilterOptions";
import { ProblemStatementList } from "@/components/Hackthon/ProblemStatment/ProblemStatementList";
import { SearchBar } from "@/components/Hackthon/ProblemStatment/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ categories: [], themes: [] });
  const router = useRouter();

  return (
    <main className="container flex-col flex gap-5 mt-20 mx-auto py-5 md:mt-0 px-5 ">
      <h1 className="text-3xl font-bold ">Problem Statements</h1>
      <div className="flex flex-row gap-4 ">
        <SearchBar onSearch={setSearchTerm} />
        <FilterOptions onFilterChange={setFilters} />
      </div>
      <ProblemStatementList searchTerm={searchTerm} filters={filters} />
      <button
        onClick={() => {
          router.push("https://forms.gle/QPhMrjtSuQNWgBn8A");
        }}
        className="fixed bottom-0 border p-3 py-4 w-full left-0 bg-white font-semibold"
      >
        Submit Problem Statement
      </button>
    </main>
  );
}
