import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar"
import {ArrowRight, ArrowUpRight, Clock, Layers} from "lucide-react";
import Button from "../../components/ui/Button";
// import Upload from "../../components/Upload";
// import {useNavigate} from "react-router";
// import {useEffect, useRef, useState} from "react";
// import {createProject, getProjects} from "../../lib/puter.action";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <div className="home">
        <Navbar/>

        <section className="hero">
            <h1>Transform 2D Rooms into Interactive 3D Experiences</h1>
            <p className="subtitle">Step Into Your Space with you oun workflow ideas using AI, which helps you to visualize your creativity faster than ever.</p>
            <div className="actions">
                <a href="#upload" className="cta">
                    Start Building <ArrowRight className="icon" />
                </a>

                <Button variant="outline" size="lg" className="demo">
                    Watch Demo
                </Button>
            </div>

            <div id="upload" className="upload-shell">
                <div className="grid-overlay" />

                <div className="upload-card">
                    <div className="upload-head">
                        <div className="upload-icon">
                            <Layers className="icon" />
                        </div>

                        <h3>Upload your 2D design</h3>
                        <p>Supports JPG, PNG, formats up to 10MB</p>
                    </div>

                    {/*<Upload onComplete={handleUploadComplete} />*/}
                </div>
            </div>
        </section>
      </div>
  )
}
