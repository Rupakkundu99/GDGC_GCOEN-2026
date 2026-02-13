"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ProblemStatementCard({ problem }) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const toggleExpanded = () => setExpanded(!expanded);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/MF_India_AI.csv'; // Adjust the path to your file
    link.download = 'MF_India_AI.csv'; // The name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{problem.statement}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm mb-5 text-muted-foreground ">
          {expanded || problem.description.length <= 100
            ? problem.description
            : `${problem.description.substring(0, 100)}...`}
          <br />
          {problem.description.length > 100 && (
            <button
              className="text-xs   font-semibold"
              onClick={toggleExpanded}
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
          {problem.id === "PS053" && (
            <>
              <p>Download Files</p>
              <div className="flex gap-2 mt-3  ">
                <button
                  className="p-1 rounded-full px-3 text-xs bg-gray-100"
                  onClick={() => {
                    router.push(
                      "https://cloud.appwrite.io/v1/storage/buckets/6773765e0004f634a5e5/files/67b7e323001dd812fe5c/view?project=677365e100183b7a1198"
                    );
                  }}
                >
                  MF_funds_para
                </button>
                <button
                  className="p-1 rounded-full px-3 text-xs bg-gray-100"
                // /MF_India_AI.csv
                onClick={handleDownload}
                >
                  MF_India_AI
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold">Category:</span>
          <Badge
            variant={problem.category === "Hardware" ? "default" : "secondary"}
          >
            {problem.category}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-semibold">Themes:</span>
          {problem.themes.map((theme) => (
            <Badge key={theme} variant="outline">
              {theme}
            </Badge>
          ))}
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          ID: {problem.id}
        </div>
      </CardContent>
    </Card>
  );
}
