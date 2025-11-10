import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, DollarSign, TrendingUp, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalaryManagement() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-foreground">Salary Management</h1>
              <p className="text-muted-foreground">Comprehensive salary and compensation tools</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Salary Structure
              </CardTitle>
              <CardDescription>View your complete salary breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Base salary and grade level</li>
                <li>• Allowances and benefits</li>
                <li>• Deductions and contributions</li>
                <li>• Net take-home calculation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Salary History
              </CardTitle>
              <CardDescription>Track your salary progression</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Annual increment records</li>
                <li>• Promotion history</li>
                <li>• Bonus and awards received</li>
                <li>• Yearly compensation trends</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Payment Schedule
              </CardTitle>
              <CardDescription>Your payment timeline</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Monthly payment dates</li>
                <li>• Advance payment options</li>
                <li>• Holiday payment schedules</li>
                <li>• Special disbursement notifications</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Overtime & Extra Pay
              </CardTitle>
              <CardDescription>Additional compensation tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Overtime hours logging</li>
                <li>• Special duty allowances</li>
                <li>• Weekend and holiday pay</li>
                <li>• Compensation rate calculations</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="gov-card bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button onClick={() => navigate("/")}>View Payroll Calculator</Button>
            <Button variant="outline">Download Payslip</Button>
            <Button variant="outline">Request Salary Certificate</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
