import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart3,
  Code,
  Database,
  FileSpreadsheet,
  PenTool,
  LayoutDashboard,
  Table,
  Globe,
  Languages,
} from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming & Querying",
      icon: <Code className="h-8 w-8 mb-4 text-primary" />,
      skills: ["Python", "SQL", "R"],
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="h-8 w-8 mb-4 text-primary" />,
      skills: ["Power BI", "Tableau", "Looker", "Excel Charts"],
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8 mb-4 text-primary" />,
      skills: ["PostgreSQL", "MySQL", "SQL Server", "Google BigQuery"],
    },
    {
      title: "Spreadsheet Skills",
      icon: <FileSpreadsheet className="h-8 w-8 mb-4 text-primary" />,
      skills: ["Excel", "Pivot Tables", "Macros", "VBA", "Google Sheets"],
    },
    {
      title: "Data Analysis",
      icon: <Table className="h-8 w-8 mb-4 text-primary" />,
      skills: ["DAX", "Statistical Analysis", "Forecasting", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      title: "Data Preparation",
      icon: <PenTool className="h-8 w-8 mb-4 text-primary" />,
      skills: ["Data Cleaning", "ETL", "Data Validation", "Data Transformation"],
    },
    {
      title: "Dashboard Creation",
      icon: <LayoutDashboard className="h-8 w-8 mb-4 text-primary" />,
      skills: ["Interactive Reports", "KPI Tracking", "Automated Dashboards", "Reporting Automation"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "Git", "Docker"],
    },
    {
      title: "Languages",
      icon: <Languages className="h-8 w-8 mb-4 text-primary" />,
      skills: ["Arabic (Native)", "English (Intermediate)", "German (A1)", "Russian (A1)"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
        My <span className="text-primary">Skills</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              {category.icon}
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
