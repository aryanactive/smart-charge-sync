import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsCards } from "@/components/MetricsCards";
import { ChargerStatusChart } from "@/components/ChargerStatusChart";
import { RevenueChart } from "@/components/RevenueChart";
import { RecentSessions } from "@/components/RecentSessions";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          
          {/* Main Content */}
          <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    Welcome back, Hilton 👋
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Here's what's happening with your EV charging network today.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Last updated</p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date().toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Cards */}
            <MetricsCards />

            {/* Charts Grid */}
            <div className="grid gap-6 lg:grid-cols-2">
              <ChargerStatusChart />
              <RevenueChart />
            </div>

            {/* Recent Sessions */}
            <RecentSessions />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
