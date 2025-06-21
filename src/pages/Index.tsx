"use client";

import { SummaryCards } from "@/components/finance/SummaryCards";
import { RecentTransactions } from "@/components/finance/RecentTransactions";
import { SpendingChart } from "@/components/finance/SpendingChart";
import { BudgetProgress } from "@/components/finance/BudgetProgress";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const Index = () => {
  return (
    <div className="container py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Personal Finance Dashboard</h1>
        <div className="w-full md:w-64">
          <Image
            src="/images/Trip-pana.png"
            alt="Financial planning illustration"
            width={256}
            height={256}
            className="object-contain"
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