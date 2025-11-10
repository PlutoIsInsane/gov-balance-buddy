import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Wallet } from "lucide-react";
import { PayrollData } from "@/pages/Index";

interface PayrollStatusProps {
  data: PayrollData;
}

const PayrollStatus = ({ data }: PayrollStatusProps) => {
  const taxAmount = (data.baseSalary * data.taxRate) / 100;
  const netSalary = data.baseSalary - taxAmount + data.bonus;
  const totalGross = data.baseSalary + data.bonus;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Payroll Status
          <Badge variant="outline" className="bg-success/10 text-success">
            Active
          </Badge>
        </CardTitle>
        <CardDescription>Current financial summary for {data.employeeName}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Employee ID:</span>
            <span className="font-medium">{data.employeeId}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Position:</span>
            <span className="font-medium">{data.position}</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="rounded-lg bg-primary/5 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Bank Balance</h3>
            </div>
            <p className="text-3xl font-bold text-primary">{formatCurrency(netSalary)}</p>
            <p className="mt-1 text-sm text-muted-foreground">Net salary after deductions</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-muted p-4">
              <div className="mb-2 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <h4 className="text-sm font-medium text-muted-foreground">Gross Salary</h4>
              </div>
              <p className="text-xl font-bold text-foreground">{formatCurrency(totalGross)}</p>
            </div>

            <div className="rounded-lg bg-destructive/10 p-4">
              <div className="mb-2 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-destructive" />
                <h4 className="text-sm font-medium text-destructive">Tax Deducted</h4>
              </div>
              <p className="text-xl font-bold text-foreground">-{formatCurrency(taxAmount)}</p>
              <p className="mt-1 text-xs text-muted-foreground">{data.taxRate}% rate</p>
            </div>
          </div>

          <div className="rounded-lg bg-accent/10 p-4">
            <div className="mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <h4 className="text-sm font-medium text-accent">Bonus Amount</h4>
            </div>
            <p className="text-xl font-bold text-foreground">+{formatCurrency(data.bonus)}</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-2 rounded-lg bg-gov-light p-4">
          <h4 className="font-semibold text-foreground">Breakdown Summary</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Base Salary:</span>
              <span className="font-medium">{formatCurrency(data.baseSalary)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bonuses:</span>
              <span className="font-medium text-accent">+{formatCurrency(data.bonus)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax ({data.taxRate}%):</span>
              <span className="font-medium text-destructive">-{formatCurrency(taxAmount)}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between text-base">
              <span className="font-semibold">Net Amount:</span>
              <span className="font-bold text-primary">{formatCurrency(netSalary)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PayrollStatus;
