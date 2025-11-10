import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, FileText, Calculator, PieChart, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TaxCalculations() {
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
              <h1 className="text-3xl font-bold text-foreground">Tax Calculations</h1>
              <p className="text-muted-foreground">Automated tax computation and compliance</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Tax Calculator
              </CardTitle>
              <CardDescription>Accurate tax computation tools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Income tax calculation</li>
                <li>• PAYE (Pay As You Earn) deductions</li>
                <li>• Tax bracket analysis</li>
                <li>• Real-time tax estimates</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Tax Returns
              </CardTitle>
              <CardDescription>Annual tax filing made easy</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Automatic return generation</li>
                <li>• Tax relief applications</li>
                <li>• Rebate calculations</li>
                <li>• Filing status tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-primary" />
                Tax Breakdown
              </CardTitle>
              <CardDescription>Detailed tax component analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Federal tax breakdown</li>
                <li>• State/provincial taxes</li>
                <li>• Social security contributions</li>
                <li>• Other statutory deductions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Tax Documents
              </CardTitle>
              <CardDescription>Access your tax records</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Tax certificates (P60, W-2, etc.)</li>
                <li>• Annual tax summaries</li>
                <li>• Payment receipts</li>
                <li>• Historical tax records</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="gov-card bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Tax Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Tax rates are automatically updated based on current government regulations</p>
              <p>• All calculations comply with national tax authority guidelines</p>
              <p>• Contact payroll support for tax-related queries</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button onClick={() => navigate("/")}>Calculate Taxes</Button>
              <Button variant="outline">View Tax History</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
