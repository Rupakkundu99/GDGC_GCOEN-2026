"use client";
import { ProblemStatementCard } from "./ProblemStatementCard";
import problemStatements from "./problemStatements.json"

export function ProblemStatementList({ searchTerm, filters }) {
  const filteredProblems = problemStatements.filter((problem) => {
    const matchesSearch =
      problem.statement.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(problem.category);
    const matchesTheme =
      filters.themes.length === 0 ||
      problem.themes.some((theme) => filters.themes.includes(theme));

    return matchesSearch && matchesCategory && matchesTheme;
  });

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredProblems.map((problem) => (
        <ProblemStatementCard key={problem.id} problem={problem} />
      ))}
    </div>
  );
}



