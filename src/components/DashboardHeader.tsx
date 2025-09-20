import { Bell, Search, Settings, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/20 glassmorphism shadow-electric">
      <div className="flex h-20 items-center justify-between px-8">
        {/* Left side - Sidebar trigger and title */}
        <div className="flex items-center gap-6">
          <SidebarTrigger className="hover:bg-primary/10 transition-electric" />
          <div className="relative">
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Dashboard Overview
            </h1>
            <p className="text-sm text-muted-foreground/80 mt-1">
              Manage your EV charging network efficiently
            </p>
            <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-electric rounded-full animate-shimmer"></div>
          </div>
        </div>

        {/* Right side - Search and user menu */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-electric" />
            <Input
              placeholder="Search stations, sessions..."
              className="w-72 pl-12 pr-4 py-3 bg-muted/30 border-border/30 rounded-xl focus:border-primary/50 focus:bg-muted/50 focus:shadow-glow transition-electric"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative h-12 w-12 rounded-xl hover:bg-primary/10 transition-electric group">
            <Bell className="h-5 w-5 group-hover:animate-pulse" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-electric text-xs text-white flex items-center justify-center animate-pulse-glow shadow-electric">
              3
            </span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-12 w-12 rounded-full p-0 hover:scale-105 transition-electric group">
                <div className="h-12 w-12 rounded-full bg-gradient-electric flex items-center justify-center shadow-electric group-hover:shadow-glow transition-electric">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-electric opacity-0 group-hover:opacity-20 transition-electric animate-pulse"></div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Hilton Kennedy</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admin@chargemaster.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}