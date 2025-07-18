
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, LogOut } from 'lucide-react';

const UserProfile = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <span>Profile</span>
        </CardTitle>
        <CardDescription>Your account information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Email</p>
          <p className="text-sm">{user.email}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Full Name</p>
          <p className="text-sm">{user.user_metadata?.full_name || 'Not provided'}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">Member since</p>
          <p className="text-sm">{new Date(user.created_at).toLocaleDateString()}</p>
        </div>
        <Button onClick={signOut} variant="outline" className="w-full">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
