import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import axios from "axios";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
import "./ProjectsPage.css";
import { useUser } from '../../context/userContext';

const ProjectsPage = () => {
    const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
    const { user } = useUser(); // Get the user data from the context

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    const [userRepos, setUserRepos] = useState([]);
    const [expanded, setExpanded] = useState(false);

    //handle import click

    const handleImport = async (repo) => {
        if (!user?.id) {
            console.error("no user is logged in to set ownerId.");
        }

        try {
            const response = await axios.post(`${API_URL}/create-project`, {
                name: repo.name,
                gitUrl: repo.html_url,
                description: repo.description || "No description provided",
                ownerId: user.id, // Use the user ID from the context// Dynamically passed owner ID
            });

            if (response.status === 200) {

                //redirect to the project lister page
                navigate("/projects");
            }
            else {
                console.error("Project creation failed");
            }

        }
        catch (e) {
            console.error('error while importing project: ' + e.message);
        }
    }



    // Fetch user's previous projects
    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/projects/${ownerId}`);
    //             if (response.data.success) {
    //                 setProjects(response.data.data);
    //             }
    //         } catch (e) {
    //             console.error("Error fetching projects:", e.message);
    //         }
    //     };
    //     fetchProjects();
    // }, [ownerId]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll(".modern-card");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


    // Fetch user info and repos if access token is available
    useEffect(() => {
        const accessToken = localStorage.getItem('github_token');
        if (accessToken) {
            const fetchUserInfo = async () => {
                try {
                    const userInfoResponse = await axios.get(`${API_URL}/api/github/user-info?accessToken=${accessToken}`);
                    if (userInfoResponse.data) {
                        setUserInfo(userInfoResponse.data);
                    }
                    const userReposResponse = await axios.get(`${API_URL}/api/github/user-repos?accessToken=${accessToken}`);
                    if (userReposResponse.data) {
                        setUserRepos(userReposResponse.data);
                    }
                } catch (err) {
                    console.error("Error fetching user info", err.message);
                }
            };
            fetchUserInfo();
        }
    }, []);

    //handle github authorization here
    useEffect(() => {
        const fetchAccessToken = async (code) => {
            try {
                const response = await axios.post(`${API_URL}/api/github/token?code=${code}`);
                if (response.data.success) {
                    const token = response.data.accessToken;
                    localStorage.setItem('github_token', token); // Store token in localStorage
                    alert("github authorization successful!");
                    //optionally save response,data to localstoragr or context
                }
                else {
                    alert("github authorization failed!");
                }
            }
            catch (e) {
                console.error("Error fetching access token: " + e.message);
            }
        }

        //check weather code is present in query parameter
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        if (code) {
            fetchAccessToken(code);
        }
    }, [location.search]);

    const handleAuthorizationWithGithub = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/github/auth-url`);
            if (response.data.success && response.data.authUrl) {
                window.location.href = response.data.authUrl;
            } else {
                alert("Failed to fetch authorization URL");
            }
        } catch (e) {
            console.error("Error initiating GitHub authorization", e.message);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
                <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full filter blur-3xl animate-orb-float" />
                <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full filter blur-3xl animate-orb-float-delayed" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Welcome to Your Projects
                </h2>

                {/* GitHub Authorization Button */}
                <button
                    onClick={handleAuthorizationWithGithub}
                    className="mx-auto mb-12 flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800/80 
                             border border-blue-500/20 text-gray-200 hover:border-blue-500/40 
                             hover:bg-slate-800/90 transition-all duration-300 group"
                >
                    <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                    Authorize with GitHub
                </button>

                {/* User Info Card */}
                {userInfo && (
                    <Card className="mb-12 backdrop-blur-md bg-slate-800/30 border border-blue-500/10 
                                   hover:border-blue-500/30 transition-all duration-500">
                        <CardHeader className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16 ring-2 ring-blue-500/20">
                                    <AvatarImage src={userInfo.avatar_url} alt={userInfo.name} />
                                </Avatar>
                                <div>
                                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        {userInfo.name}
                                    </h3>
                                    <p className="text-gray-400">@{userInfo.login}</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-gray-300">{userInfo.bio || "No bio available"}</p>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { label: 'Repositories', value: userInfo.public_repos },
                                    { label: 'Followers', value: userInfo.followers },
                                    { label: 'Following', value: userInfo.following }
                                ].map(stat => (
                                    <div key={stat.label} className="text-center p-4 rounded-xl bg-slate-800/50 border border-blue-500/10">
                                        <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                                        <p className="text-gray-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Repositories Grid */}
                {userRepos.length > 0 && (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Your GitHub Repositories
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {userRepos.slice(0, expanded ? userRepos.length : 4).map((repo, index) => (
                                <Card
                                    key={repo.id}
                                    className="group backdrop-blur-md bg-slate-800/30 border border-blue-500/10 
                                             hover:border-blue-500/30 transition-all duration-500"
                                >
                                    <CardHeader>
                                        <h3 className="text-xl font-semibold text-blue-400">{repo.name}</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300">{repo.description || "No description available"}</p>
                                    </CardContent>
                                    <CardFooter className="flex justify-between gap-4">
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-xl bg-slate-800/80 border border-blue-500/20 
                                                     text-gray-200 hover:border-blue-500/40 transition-all duration-300"
                                        >
                                            View on GitHub
                                        </a>
                                        <button
                                            onClick={() => handleImport(repo)}
                                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 
                                                     text-white font-medium hover:from-blue-500 hover:to-blue-400 
                                                     transition-all duration-300 shadow-lg shadow-blue-500/20"
                                        >
                                            Import
                                        </button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>

                        {userRepos.length > 4 && (
                            <div className="text-center mt-8">
                                <Button
                                    onClick={() => setExpanded(!expanded)}
                                    className="px-6 py-3 rounded-xl bg-slate-800/80 border border-blue-500/20 
                                             text-gray-200 hover:border-blue-500/40 transition-all duration-300"
                                >
                                    {expanded ? "View Less" : "View More Repositories"}
                                </Button>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProjectsPage;
