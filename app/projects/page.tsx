"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, Code, LayoutDashboard, Presentation, Globe, X } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = "all" | "programming" | "dashboards" | "presentations" | "webdev"

interface Project {
  title: string
  image: string
  description: string
  tags: string[]
  category: Category
  github?: string
  demo?: string
  data?: string
  tool?: string
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  const handleImageClick = (project: Project) => {
    if (project.demo) {
      window.open(project.demo, "_blank")
    } else {
      setSelectedImage({ src: project.image, title: project.title })
    }
  }

  const categories = [
    { id: "all" as Category, name: "All Projects", icon: null },
    { id: "programming" as Category, name: "Programming", icon: Code },
    { id: "dashboards" as Category, name: "Dashboards", icon: LayoutDashboard },
    { id: "presentations" as Category, name: "Presentations", icon: Presentation },
    { id: "webdev" as Category, name: "Web Development", icon: Globe },
  ]

  const projects: Project[] = [
    // Programming Projects

    {
      title: "Fitness Class Prediction",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823013/fitness_xnjhxc.png",
      description:
        "small classification project recently around predicting gym class attendance (no-show vs attended).The goal was simple: can we predict if a booked member will actually show up, so the business can better manage capacity?.",
      tags: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
      category: "programming",
      github: "https://github.com/MoazMorsh/Fitness-Class-Attendance-ML-Classification-Models.git",
    },
    {
      title: "Brazilian E-commerce Analysis",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823007/brazillian-20ecommerce_ejl3hh.png",
      description:
        "End-to-end e-commerce analytics project analyzing 100K+ orders to understand customer behavior, cancellations, and revenue drivers. Delivered actionable business insights using Python, SQL, Excel, and BI dashboards.",
      tags: ["SQL", "Python", "Pandas", "Matplotlib", "Colab Notebook", "Looker BI", "Excel"],
      category: "programming",
      github: "https://github.com/MoazMorsh/Brazillian_E-comece_Store_Analysis_Full_Project.git",
    },
    {
      title: "Car Price Prediction ML",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823008/car-20price_vyhvsq.jpg",
      description:
        "Developed a predictive model for car prices using historical sales data. Conducted EDA to identify key price factors and implemented linear regression models, achieving 85% prediction accuracy.",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Machine Learning"],
      category: "programming",
      github: "https://github.com/MoazMorsh/Car_Price_Prediction-ML-.git",
    },
    {
      title: "Customers Churn Prediction",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823008/customers-20churn-20ml_jkrefx.jpg",
      description:
        "Predictive model for customer churn using telecommunications data. Identifies customers likely to leave, allowing proactive retention measures.",
      tags: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
      category: "programming",
      github: "https://github.com/MoazMorsh/Customer_churn-ML-.git",
    },
    {
      title: "Sales Data Analysis",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823017/sales-20python_wofcrg.jpg",
      description:
        "In-depth analysis of sales data using Python, answering key business questions like best month for sales and optimal advertisement timing.",
      tags: ["Python", "Pandas", "Data Analysis"],
      category: "programming",
      github: "https://github.com/MoazMorsh/Sales_Analysis_Using_Python.git",
    },
    
    {
      title: "App Store Data Analysis",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823007/app-20store_te1xxr.jpg",
      description:
        "Analysis of Google App Store data to gain insights into app market and user preferences including categories, ratings, and installs.",
      tags: ["Python", "Pandas", "EDA"],
      category: "programming",
      github: "https://github.com/MoazMorsh/Google-AppStore-Analysis.git",
    },
    {
      title: "Pricing Data Analysis",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823014/pricing_yarm8b.jpg",
      description:
        "Deep dive into pricing strategies using advanced data analysis techniques to uncover pricing trends and patterns.",
      tags: ["Python", "Pandas", "Scikit-learn"],
      category: "programming",
      github: "https://github.com/MoazMorsh/Pricing_Data_Analysis.git",
    },
    


    // Dashboards

    {
      title: "Brazilian E-Commerce Store by Olist Dashboard",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1769513455/Dashboard_1_rngbtu.png",
      description:
        "Interactive dashboard providing a high-level view of revenue trends (18.06M), order status, and customer insights. Features slicers for year, month, state, city, and payment type analysis.",
      tags: ["Looker Studio", "Data Visualization"],
      category: "dashboards",
      data: "Total Revenue: 18.06M | Customers: 99.4K | Orders: 99.4K | Cancellation Rate: 0.62%",
      tool: "Looker Studio",
      demo: "https://lookerstudio.google.com/reporting/df606d0d-3889-4293-8931-b19eafd998b9"
    },
    {
      title: "YouTube Songs Data Analysis",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823012/d1_eeiyjd.jpg",
      description:
        "Dashboard analyzing YouTube songs data with metrics like likes, comments, and views. Includes monthly trends and engagement rates.",
      tags: ["PowerBI", "Data Visualization"],
      category: "dashboards",
      data: "2010-2023, 83M Likes, 2M Comments, 15bn Views",
      tool: "PowerBI",
    },
    {
      title: "Sales Analysis Dashboard",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823013/d2_mhlvsy.jpg",
      description:
        "Insightful breakdown of sales, profits, product performance, and sales channels across the year.",
      tags: ["PowerBI", "Data Visualization"],
      category: "dashboards",
      data: "Total Sales: 401K, Profit: 69K, Top Product: 23K",
      tool: "PowerBI",
    },
    {
      title: "Google Apps Store Dashboard",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823013/d3_abbt8q.jpg",
      description:
        "Comprehensive overview of the Google Play Store's app landscape with KPIs for apps and categories.",
      tags: ["PowerBI", "Data Visualization"],
      category: "dashboards",
      data: "Total Apps: 2.31M, Free: 2.27M, Paid: 45.07K",
      tool: "PowerBI",
    },
    
    // Presentations
    
    {
      title: "Brazillian Ecommerce Analysis Presentation",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1769513642/PowerPoint_njzdg9.png",
      description:
        "Professional presentation showcasing data analytics insights and business intelligence findings.",
      tags: ["PowerPoint", "Data Storytelling"],
      category: "presentations",
      demo: "https://res.cloudinary.com/dzj5xj6sq/raw/upload/v1769513737/Brazillian_ecommerce_powerpoint_b3qq2m.pptx"
    },
    {
      title: "Graduation Project BIS 2025 Presentation",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1769517947/Meditrack_qait1b.png",
      description:
        "Professional presentation showcasing graduation project details (Problem, Solution, Imapact & Furture Vision).",
      tags: ["PowerPoint"],
      category: "presentations",
      demo: "https://github.com/MoazMorsh/Meditrack_pharmacy/blob/7b98025f0b77f447ac349fb3f8aac23b9abbe850/Presentation/MediTrack%202025%20Graduation%20project%20gp119%20presentation.pptx"
    },
    // Web Development
    {
      title: "Coffee Shop Website",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777824531/coffee_qxbshj.png",
      description:
        "Full stack responsive website for a coffee shop with menu display, order handling, and user authentication.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "webdev",
      github: "https://github.com/MoazMorsh/Coffee_Project.git",
    },

  {
      title: "Graduation Project BIS 2025 Presentation",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1769516733/Photo_from_Moaz_Morsh_hey4ou.jpg",
      description:
        "Professional presentation showcasing graduation project details (Problem, Solution, Imapact & Furture Vision).",
      tags: ["TypeScript", "JavaScript", "CSS"],
      category: "webdev",
      demo: "https://github.com/MoazMorsh/Meditrack_pharmacy.git"
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My <span className="text-primary">Projects</span>
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "flex items-center gap-2 transition-all",
              activeCategory === cat.id && "shadow-md"
            )}
          >
            {cat.icon && <cat.icon className="h-4 w-4" />}
            {cat.name}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg"
          >
            <div
              className="h-48 relative cursor-pointer group"
              onClick={() => handleImageClick(project)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition-opacity">
                  {project.demo ? "Open Link" : "Click to Enlarge"}
                </span>
              </div>
              {/* Category Badge */}
              <div className="absolute top-3 right-3">
                <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full capitalize">
                  {project.category === "webdev" ? "Web Dev" : project.category}
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {project.data && (
                <p className="text-xs text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground">Data:</span> {project.data}
                </p>
              )}

              {project.tool && (
                <p className="text-xs text-primary font-semibold mb-3">Tool: {project.tool}</p>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <h3 className="text-white text-xl font-semibold mb-4 text-center">
              {selectedImage.title}
            </h3>
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
