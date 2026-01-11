import { useNavigate, useLocation } from "react-router-dom"
import { Home, FileText, Settings, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
  onNavigate?: () => void
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Clients", path: "/clients" },
    { icon: FileText, label: "Documents", path: "/documents" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ]

  const handleNavigation = (path: string) => {
    navigate(path)
    onNavigate?.()
  }

  return (
    <div className={cn("flex h-screen w-64 flex-col border-r glass-card backdrop-blur-xl", className)}>
      <div className="flex h-16 items-center border-b border-white/10 px-4 sm:px-6">
        <h1 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          ClientVault
        </h1>
      </div>
      
      <nav className="flex-1 space-y-1 p-2 sm:p-4 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Button
              key={item.label}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start text-sm sm:text-base",
                isActive && "bg-secondary"
              )}
              onClick={() => handleNavigation(item.path)}
            >
              <Icon className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="truncate">{item.label}</span>
            </Button>
          )
        })}
      </nav>

      <Separator />

      <div className="p-2 sm:p-4">
        <div className="flex items-center space-x-2 sm:space-x-4 rounded-lg border p-2 sm:p-4">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
            <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          </div>
          <div className="flex-1 space-y-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium leading-none truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
