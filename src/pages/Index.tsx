import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, DollarSign, FileText, Shield } from "lucide-react";
import PayrollForm from "@/components/PayrollForm";
import PayrollStatus from "@/components/PayrollStatus";

export interface PayrollData {
  employeeName: string;
  employeeId: string;
  position: string;
  baseSalary: number;
  taxRate: number;
  bonus: number;
}

const Index = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [payrollData, setPayrollData] = useState<PayrollData | null>(null);

  const handlePayrollSubmit = (data: PayrollData) => {
    setPayrollData(data);
  };

  if (showCalculator) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Government PayRoll System</h1>
                  <p className="text-sm text-muted-foreground">Official Employee Portal</p>
                </div>
              </div>
              <Button variant="outline" onClick={() => setShowCalculator(false)}>
                Back to Home
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <PayrollForm onSubmit={handlePayrollSubmit} />
            {payrollData && <PayrollStatus data={payrollData} />}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gov-light">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Government PayRoll System</h1>
              <p className="text-sm text-muted-foreground">Secure Employee Management Portal</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">
            Professional Payroll Management
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Access your salary information, tax deductions, and bonuses in one secure location.
            Our system ensures accuracy and transparency in government employee compensation.
          </p>
          <Button size="lg" onClick={() => setShowCalculator(true)} className="gap-2">
            <Calculator className="h-5 w-5" />
            Access Payroll Calculator
          </Button>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Salary Management</CardTitle>
              <CardDescription>
                View your current salary status, including base pay and all applicable bonuses
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Tax Calculations</CardTitle>
              <CardDescription>
                Automatic calculation of tax deductions based on current government rates
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>Secure Access</CardTitle>
              <CardDescription>
                Your financial information is protected with government-grade security protocols
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="mt-16">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">System Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-success/20 p-1">
                    <div className="h-full w-full rounded-full bg-success" />
                  </div>
                  <span className="text-sm text-foreground">Real-time salary calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-success/20 p-1">
                    <div className="h-full w-full rounded-full bg-success" />
                  </div>
                  <span className="text-sm text-foreground">Automatic tax computation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-success/20 p-1">
                    <div className="h-full w-full rounded-full bg-success" />
                  </div>
                  <span className="text-sm text-foreground">Bonus tracking and display</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-success/20 p-1">
                    <div className="h-full w-full rounded-full bg-success" />
                  </div>
                  <span className="text-sm text-foreground">Comprehensive financial breakdown</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mt-16 border-t border-border bg-card py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Government PayRoll System. All rights reserved.</p>
          <p className="mt-1">Official Government Employee Portal</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
