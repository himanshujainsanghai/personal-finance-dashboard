"use client";

import { Progress } from "@/components/ui/progress";

const budgets = [
  { category: "Food", spent: 450, budget: 600 },
  { category: "Entertainment", spent: 180, budget: 200 },
  { category: "Transportation", spent: 250, budget: 300 },
  { category: "Utilities", spent: 200, budget: 250 },
];

export const BudgetProgress = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Budget Progress</h3>
      {budgets.map((item) => {
        const percentage = (item.spent / item.budget) * 100;
        return (
          <div key={item.category} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{item.category}</span>
              <span>
                ${item.spent} / ${item.budget}
              </span>
            </div>
            <Progress
              value={percentage}
              className="h-2"
              indicatorColor={percentage > 90 ? "bg-red-500" : "bg-green-500"}
            />
          </div>
        );
      })}
    </div>
  );
};