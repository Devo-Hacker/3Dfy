import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar"
import {ArrowRight, ArrowUpRight, Clock, Layers} from "lucide-react";
import Button from "../../components/ui/Button";
import Upload from "../../components/ui/Upload";
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

                    <Upload />
                </div>
            </div>
        </section>
        <section className="projects">
            <div className="section-inner">
                <div className="section-head">
                    <div className="copy">
                        <h2>Projects</h2>
                        <p>Your latest work and shared community projects, all in one place.</p>
                    </div>
                </div>

                <div className="projects-grid">
                    <div className="project-card group">
                        <div className="preview">
                            <img src="https://img.freepik.com/premium-photo/picture-city-with-large-number-buildings_1247965-23957.jpg?semt=ais_hybrid&w=740&q=80" alt="projects"/>

                            <div className="badge">
                                <span>Community</span>
                            </div>
                        </div>

                        <div className="card-body">
                            <div>
                                <h3>Project Agent</h3>

                                <div className="meta">
                                    <Clock size={12} />
                                    <span>{new Date('01.01.2026').toLocaleDateString()}</span>
                                    <span>By Niladree</span>
                                </div>
                            </div>

                            <div className="arrow">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
      </div>
  )
}
