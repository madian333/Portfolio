import { Metadata } from "next";
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
    title: "Projects | Ali Madian",
    description: "My data science and machine learning projects",
};

function GitHubIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}

function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
    );
}

export default function Projects() {
    const projects = [
        {
            title: "Fraud Detection AI",
            description: "Built an AI-driven fraud detection model to identify suspicious transactions in financial datasets using Python and Scikit-learn.",
            tools: ["Python", "Scikit-learn", "Pandas"],
            links: [
                { type: "github", url: "https://github.com/madian333" }
            ]
        },
        {
            title: "Water Quality Prediction",
            description: "Created a predictive model to assess water quality using deep learning with TensorFlow and NumPy.",
            tools: ["Python", "TensorFlow", "NumPy"],
            links: [
                { type: "github", url: "https://github.com/madian333" }
            ]
        },
        {
            title: "Loan Protection AI",
            description: "Designed a machine learning system to evaluate loan repayment risks using XGBoost and SQL.",
            tools: ["Python", "XGBoost", "SQL", "Matplotlib"],
            links: [
                { type: "github", url: "https://github.com/madian333" }
            ]
        },
        {
            title: "Digital Wallet System",
            description: "Developed a digital wallet system implementing core functionalities like account balance tracking and transaction processing.",
            tools: ["C++", "SFML", "Data Structures"],
            links: [
                { type: "github", url: "https://github.com/madian333" },
                { type: "linkedin", url: "https://www.linkedin.com/posts/youssof-othman-113095279_introducing-our-newest-project-digital-ugcPost-7202459012460634112-C8Zm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKzmAQBh9ITvEY2R4keLk_3yw5m7DrPz4M" }
            ]
        },
        {
            title: "GYM Management System",
            description: "Java application with JavaFX GUI for gym management, implementing OOP principles.",
            tools: ["Java", "OOP", "JavaFX"],
            links: [
                { type: "github", url: "https://github.com/madian333" }
            ]
        }
    ];

    return (
        <div className="max-w-3xl mx-auto py-8">
            <Navigation />
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">My Projects</h1>

            <div className="grid gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border p-6 rounded-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:scale-95 hover:shadow-2xl">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 ">{project.title}</h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tools.map((tool, i) => (
                                <span key={i} className="bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded text-sm text-gray-800 dark:text-gray-200">
                                    {tool}
                                </span>
                            ))}
                        </div>
                        {project.links && (
                            <div className="flex gap-3">
                                {project.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                                    >
                                        {link.type === 'github' ? (
                                            <>
                                                <GitHubIcon className="w-4 h-4" />
                                                GitHub
                                            </>
                                        ) : (
                                            <>
                                                <LinkedInIcon className="w-4 h-4" />
                                                LinkedIn
                                            </>
                                        )}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}