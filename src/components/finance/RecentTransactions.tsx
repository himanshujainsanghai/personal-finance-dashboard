"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: 1,
    description: "Grocery Store",
    amount: 125.75,
    category: "Food",
    date: "2023-11-15",
    type: "expense",
  },
  {
    id: 2,
    description: "Paycheck",
    amount: 2500.0,
    category: "Income",
    date: "2023-11-10",
    type: "income",
  },
  {
    id: 3,
    description: "Electric Bill",
    amount: 85.2,
    category: "Utilities",
    date: "2023-11-05",
    type: "expense",
  },
  {
    id: 4,
    description: "Dinner Out",
    amount: 42.5,
    category: "Dining",
    date: "2023-11-03",
    type: "expense",
  },
  {
    id: 5,
    description: "Freelance Work",
    amount: 750.0,
    category: "Income",
    date: "2023-11-01",
    type: "income",
  },
];

export const RecentTransactions = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>
                <Badge variant="outline">{transaction.category}</Badge>
              </TableCell>
              <TableCell
                className={`text-right ${
                  transaction.type === "income" ? "text-green-500" : "text-red-500"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};