import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { PayrollData } from "@/pages/Index";

interface PayrollFormProps {
  onSubmit: (data: PayrollData) => void;
}

const PayrollForm = ({ onSubmit }: PayrollFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PayrollData>({
    employeeName: "",
    employeeId: "",
    position: "",
    baseSalary: 0,
    taxRate: 15,
    bonus: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.employeeName || !formData.employeeId || !formData.position) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (formData.baseSalary <= 0) {
      toast({
        title: "Invalid Salary",
        description: "Base salary must be greater than 0",
        variant: "destructive",
      });
      return;
    }

    onSubmit(formData);
    toast({
      title: "Success",
      description: "Payroll information calculated successfully",
    });
  };

  const handleChange = (field: keyof PayrollData, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Employee Information</CardTitle>
        <CardDescription>Enter employee details to calculate payroll</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="employeeName">Full Name *</Label>
            <Input
              id="employeeName"
              placeholder="John Doe"
              value={formData.employeeName}
              onChange={(e) => handleChange("employeeName", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employeeId">Employee ID *</Label>
            <Input
              id="employeeId"
              placeholder="EMP-12345"
              value={formData.employeeId}
              onChange={(e) => handleChange("employeeId", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Position *</Label>
            <Input
              id="position"
              placeholder="Senior Officer"
              value={formData.position}
              onChange={(e) => handleChange("position", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="baseSalary">Base Salary ($) *</Label>
            <Input
              id="baseSalary"
              type="number"
              placeholder="50000"
              value={formData.baseSalary || ""}
              onChange={(e) => handleChange("baseSalary", parseFloat(e.target.value) || 0)}
              required
              min="0"
              step="0.01"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="taxRate">Tax Rate (%)</Label>
            <Input
              id="taxRate"
              type="number"
              placeholder="15"
              value={formData.taxRate}
              onChange={(e) => handleChange("taxRate", parseFloat(e.target.value) || 0)}
              min="0"
              max="100"
              step="0.1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bonus">Bonus Amount ($)</Label>
            <Input
              id="bonus"
              type="number"
              placeholder="5000"
              value={formData.bonus || ""}
              onChange={(e) => handleChange("bonus", parseFloat(e.target.value) || 0)}
              min="0"
              step="0.01"
            />
          </div>

          <Button type="submit" className="w-full">
            Calculate Payroll
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PayrollForm;
