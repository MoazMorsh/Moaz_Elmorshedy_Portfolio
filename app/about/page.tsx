import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Mail, MapPin, Phone } from "lucide-react"

export default function AboutPage() {
  const workExperience = [
    {
      company: "Rawmart",
      position: "Data Analyst Intern",
      period: "07/2024 - 09/2024",
      responsibilities: [
        "Gained understanding of Rawmart's business operations.",
        "Optimized data sheets for each team, improving efficiency by 10%.",
        "Demonstrated teamwork and communication skills in meetings and email correspondence with teams.",
        "Created interactive charts using pivot tables in Google Sheets.",
        "Developed operational dashboards in Looker Studio, reducing report generation time by 15%.",
        "Built analytical dashboards to track performance, delivering insights that resolved 5 key issues.",
      ],
    },
    {
      company: "National Bank of Egypt",
      position: "Summer Internship",
      period: "06/2024 - 07/2024",
      responsibilities: [
        "Department: Banking Operations (Accounts Opening).",
        "Processed account openings with 98% accuracy under tight deadlines.",
        "Showed adaptability in learning banking systems quickly.",
      ],
    },
    {
      company: "InfoTech, Remote",
      position: "Data Scientist Internship",
      period: "05/2024 - 06/2024",
      responsibilities: [
        "Developed SQL queries, enhancing data retrieval speed by 20%.",
        "Improved database performance and accessibility.",
        "Applied machine learning techniques to business data, increasing forecast accuracy by 12%.",
        "Conducted predictive analytics to support business forecasting.",
        "Exhibited problem-solving skills in resolving data inconsistencies.",
      ],
    },
    {
      company: "Financial Regulatory Authority, Cairo",
      position: "Summer Internship",
      period: "07/2023 - 08/2023",
      responsibilities: [
        "Department: Information Technology as a Business Analyst",
        "Analyzed business processes, reducing documentation errors by 8%.",
        "Collaborated with IT teams, showcasing strong teamwork.",
      ],
    },
  ]

  const education = [
    {
      institution: "Helwan University",
      degree: "Bachelor's Degree in Business Information System",
      year: "2025",
      details: "Excellent with Honor, GPA 3.9",
    },
    {
      institution: "Cleopatra Language School",
      degree: "High school",
      year: "2021",
      details: "",
    },
  ]

  const languages = [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Intermediate" },
    { language: "German", level: "A1" },
    { language: "Russian", level: "A1" },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        About <span className="text-primary">Me</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image src="https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777823017/profile_f0yx5k.jpg" alt="About Moaz" width={400} height={400} className="rounded-lg shadow-md" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Data Analyst & BI Developer</h2>

          <p className="text-muted-foreground mb-4">
            I&apos;m a dedicated data analyst with a passion for transforming raw data into meaningful insights. My
            expertise lies in Excel, SQL, Python scripting, web scraping, and creating interactive dashboards using
            tools like PowerBI, Looker and Apache Superset.
          </p>

          <p className="text-muted-foreground mb-6">
            I enjoy building automated solutions to streamline workflows and support informed decision-making. Over
            time, I&apos;ve worked on various projects such as developing web scraping scripts to extract product data,
            building dashboards to track business performance, and automating reports to uncover trends and issues
            quickly.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">Business Information Systems, Helwan University</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Experience</h3>
              <p className="text-sm text-muted-foreground">Data Analyst Intern at Rawmart</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">moaz.elmorsheedy@gmail.com</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Egypt</p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          Work Experience
        </h2>

        <div className="space-y-6">
          {workExperience.map((job, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <span className="text-sm text-primary font-medium">{job.period}</span>
                </div>
                <p className="text-muted-foreground mb-4">{job.company}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-sm">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <span className="text-sm text-primary font-medium">{edu.year}</span>
                </div>
                <p className="text-muted-foreground mb-2">{edu.degree}</p>
                {edu.details && <p className="text-sm">{edu.details}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Languages</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {languages.map((lang, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium">{lang.language}</h3>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
