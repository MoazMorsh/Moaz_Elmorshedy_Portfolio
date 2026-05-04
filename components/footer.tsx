import Link from "next/link"
import { Github, Linkedin, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 bg-black text-center">
      <div className="container mx-auto">
        <div className="flex justify-center gap-6 mb-8">
          <Link
            href="http://linkedin.com/in/moaz-el-morshdy"
            target="_blank"
            className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-black hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/MoazMorsh"
            target="_blank"
            className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-black hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/moaz_morsh?igsh=MWo0ZWE3NGNtNHltZg=="
            target="_blank"
            className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-black hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.facebook.com/moaz.elmorshdy?mibextid=ZbWKwL"
            target="_blank"
            className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-black hover:scale-110"
          >
            <Facebook className="w-5 h-5" />
          </Link>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-lg">
          <li>
            <Link
              href="#"
              className="text-white hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-white hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-white hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-white hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>

        <p className="text-sm">@ Moaz Elmorshedy | All Rights Reserved</p>
      </div>
    </footer>
  )
}
