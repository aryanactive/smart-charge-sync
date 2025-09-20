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
      <div className="min-h-screen flex w-full bg-background relative overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-electric/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-energy/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col min-w-0 relative z-10">
          <DashboardHeader />
          
          {/* Main Content */}
          <main className="flex-1 p-8 space-y-8 overflow-auto">
            {/* Welcome Section */}
            <div className="mb-10 relative">
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <h2 className="text-4xl font-bold tracking-tight bg-gradient-hero bg-clip-text text-transparent animate-shimmer">
                    Welcome back, ARYAN Active 👋
                  </h2>
                  <p className="text-lg text-muted-foreground/90 max-w-2xl">
                    Here's what's happening with your EV charging network today. Monitor, manage, and optimize your sustainable energy infrastructure.
                  </p>
                </div>
                <div className="text-right glassmorphism p-4 rounded-xl border border-border/20">
                  <p className="text-sm text-muted-foreground/80">Last updated</p>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    {new Date().toLocaleString()}
                  </p>
                  <div className="w-8 h-0.5 bg-gradient-electric rounded-full mt-2 ml-auto"></div>
                </div>
              </div>
            </div>

            {/* Metrics Cards */}
            <MetricsCards />

            {/* Charts Grid */}
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="animate-float">
                <ChargerStatusChart />
              </div>
              <div className="animate-float" style={{ animationDelay: '1s' }}>
                <RevenueChart />
              </div>
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
