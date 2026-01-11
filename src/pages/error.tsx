import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export function Error() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4 sm:space-y-6 px-4">
      <div className="space-y-4 relative">
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full"></div>
        <svg
          className="w-48 h-48 sm:w-64 sm:h-64 mx-auto text-muted-foreground relative z-10"
          fill="none"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
          <circle cx="100" cy="70" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            d="M 60 130 Q 100 110 140 130"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <line x1="75" y1="75" x2="85" y2="85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="115" y1="75" x2="125" y2="85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <text
            x="100"
            y="180"
            textAnchor="middle"
            className="text-3xl sm:text-4xl font-bold fill-current"
            fontSize="48"
          >
            404
          </text>
        </svg>
      </div>
      
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-md px-4">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
      </div>

      <Button onClick={() => navigate("/dashboard")} className="mt-4 shadow-lg w-full sm:w-auto">
        <Home className="mr-2 h-4 w-4" />
        Go to Dashboard
      </Button>
    </div>
  )
}