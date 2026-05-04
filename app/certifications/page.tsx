"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export default function CertificationsPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)

  const certifications = [
    {
      title: "Bachelor's Degree in BIS",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1769516103/pm_1768373737699_cmp_zqv8jm.jpg",
      description:
        "Bachelor's Degree in Business Information Systems for the period from  October 2021 to May 2025.",
      issuer: "BIS Helwan University",
      date: "May 2025",
    },
     {
      title: "Data Analyst Role Internship at Rawmart",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1769516095/pm_1768373716477_cmp_eatl0q.jpg",
      description:
        "Successfully completed Rawmart Data Analyst role Internship Program 2024 for the period from  July 2024 to September 2024.",
      issuer: "Rawmart",
      date: "September 2024",
    },
    {
      title: "National Bank of Egypt Internship",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777826679/NBE_bclvjk.jpg",
      description:
        "Successfully completed NBE Internship Program 2024 for the period from 7th July 2024 to 1st August 2024.",
      issuer: "National Bank of Egypt",
      date: "August 2024",
    },
    {
      title: "Financial Regulatory Authority",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777826679/FRA_k94x3a.jpg",
      description:
        "Completed summer internship at Financial Regulatory Authority to learn about non-banking financial activities.",
      issuer: "Financial Regulatory Authority",
      date: "July 2023",
    },
    {
      title: "Mentorness Data Analyst Internship",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777826679/Mentorness_rfksfj.jpg",
      description: "Successfully completed the 1 month Virtual Internship Program at MENTORNESS as a Data Analyst.",
      issuer: "Mentorness",
      date: "March 2024",
    },
    {
      title: "Youth Skills Gate - Soft Skills",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777826678/Soft-skills_y2f5et.jpg",
      description: "Successfully completed the training of Youth Skills Gate - Soft Skills program.",
      issuer: "Youth Learning & Emirates NBD",
      date: "2024",
    },
    {
      title: "NBE Cybersecurity Game",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777826679/Cyber_Security_zbtv3k.jpg",
      description:
        "Successfully completed the NBE Cybersecurity Game with exemplary dedication and achievement, covering Phishing, OTP Security, Social Engineering, and Vishing.",
      issuer: "National Bank of Egypt",
      date: "July 2024",
    },
    {
      title: "Foundations of Digital Marketing and E-commerce",
      image: "https://res.cloudinary.com/dzj5xj6sq/image/upload/v1777826679/Digital-marketing_onz1jl.jpg",
      description:
        "Successfully completed the Google course on Foundations of Digital Marketing and E-commerce offered through Coursera.",
      issuer: "Google & Coursera",
      date: "May 2023",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
        My <span className="text-primary">Certifications</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="overflow-hidden border border-border hover:border-primary/50 transition-colors">
            <div
              className="relative h-64 w-full cursor-pointer group"
              onClick={() => setSelectedImage({ src: cert.image, title: cert.title })}
            >
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                fill
                className="object-contain bg-white dark:bg-gray-900 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition-opacity">
                  Click to Enlarge
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <Badge variant="outline" className="text-xs">
                  {cert.date}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
              <p className="text-sm">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

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
