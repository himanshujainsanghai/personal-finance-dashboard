"use client";

import { SummaryCards } from "@/components/finance/SummaryCards";
import { RecentTransactions } from "@/components/finance/RecentTransactions";
import { SpendingChart } from "@/components/finance/SpendingChart";
import { BudgetProgress } from "@/components/finance/BudgetProgress";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Personal Finance Dashboard</h1>
        <div className="w-full md:w-64">
          <img
            src="/images/Trip-pana.png"
            alt="Financial planning illustration"
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
      
      <SummaryCards />
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Spending Breakdown</h2>
          <SpendingChart />
        </Card>
        
        <Card className="p-6">
          <BudgetProgress />
        </Card>
      </div>
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <RecentTransactions />
      </Card>
    </div>
  );
};

export default Index;