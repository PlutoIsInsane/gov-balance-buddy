import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, Lock, Key, UserCheck, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SecureAccess() {
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
              <h1 className="text-3xl font-bold text-foreground">Secure Access</h1>
              <p className="text-muted-foreground">Advanced security and data protection</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Authentication
              </CardTitle>
              <CardDescription>Multi-layer security protocols</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Secure login with encryption</li>
                <li>• Two-factor authentication (2FA)</li>
                <li>• Session management</li>
                <li>• Auto-logout for security</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5 text-primary" />
                Access Control
              </CardTitle>
              <CardDescription>Role-based permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Employee-level access rights</li>
                <li>• Manager approval workflows</li>
                <li>• Admin dashboard controls</li>
                <li>• Audit trail logging</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Data Protection
              </CardTitle>
              <CardDescription>Your information is secure</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• End-to-end encryption</li>
                <li>• Regular security backups</li>
                <li>• GDPR/compliance standards</li>
                <li>• Secure data transmission</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="gov-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                Account Security
              </CardTitle>
              <CardDescription>Manage your account safety</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Password strength requirements</li>
                <li>• Account activity monitoring</li>
                <li>• Security alerts and notifications</li>
                <li>• Recovery options</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="gov-card bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Security Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <p>• Never share your login credentials with anyone</p>
              <p>• Use strong, unique passwords for your account</p>
              <p>• Log out when using shared computers</p>
              <p>• Report any suspicious activity immediately</p>
              <p>• Keep your contact information up to date</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">Change Password</Button>
              <Button variant="outline">View Activity Log</Button>
              <Button variant="outline">Security Settings</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
