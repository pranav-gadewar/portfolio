import React from "react";
import profilePic from "/Profile_Pic.jpg";
import {
    FaReact,
    FaCss3Alt,
    FaHtml5,
    FaJs,
    FaJava,
    FaPhp,
    FaNodeJs,
    FaDatabase,
    FaPython,
    FaCode,
    FaLinkedin,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";

const Home = () => {
    return (
        <div>

            {/* Hero */}
            <section
                id="home"
                className="min-h-screen bg-white dark:bg-black flex flex-col md:flex-row items-center justify-center px-6 md:gap-4 pb-10"
            >
                <div
                    className="md:w-[45%] space-y-4 text-center md:text-left 
               opacity-0 animate-slide-in-left"
                >
                    <h1 className="text-5xl hover:scale-105 font-bold transition-transform duration-300">
                        PRANAV GADEWAR
                    </h1>

                    <p className="text-xl text-blue-600 dark:text-blue-400 transition-colors duration-300">
                        Frontend Developer | React Enthusiast
                    </p>

                    <p
                        className="text-base hover:scale-105 leading-relaxed border border-gray-300 dark:border-gray-600 p-4 
                 transition-transform duration-500"
                    >
                        As a passionate and dedicated individual exploring the vast world
                        of IT and technology, I have a strong enthusiasm for web
                        development, particularly in front-end technologies. With a solid
                        foundation in front-end development languages, I enjoy bringing
                        ideas to life by designing and developing visually appealing,
                        user-friendly websites. I combine creativity with technical
                        expertise to craft engaging digital experiences that reflect both
                        aesthetic design and functional performance.
                    </p>

                    <div>
                        <a
                            href="/Pranav%20Gadewar%20(Resume).pdf"
                            download
                            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow 
                   hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                <div
                    className="md:w-[45%] mt-6 md:mt-0 flex justify-center 
               opacity-0 animate-slide-in-right delay-200"
                >
                    <img
                        src={profilePic}
                        alt="Pranav Gadewar"
                        className="w-80 h-80 object-cover rounded-full shadow-lg 
                 transition-transform duration-300 hover:scale-105 hover:rotate-1"
                    />
                </div>
            </section>

            {/* Education */}
            <section
                id="education"
                className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-20"
            >
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
                        Education
                    </h1>

                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold">
                                Master of Computer Applications (MCA)
                            </h2>
                            <p className="text-blue-600 dark:text-blue-400">
                                Modern College of Engineering, Pune
                            </p>
                            <p>2024 - Present (Pursuing)</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold">
                                Bachelor of Business Administration in Computer Application (BBA - CA)
                            </h2>
                            <p className="text-blue-600 dark:text-blue-400">
                                Sinhgad College of Commerce, Kondhwa
                            </p>
                            <p>2021 - 2024</p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold">
                                Higher Secondary Certificate (HSC)
                            </h2>
                            <p className="text-blue-600 dark:text-blue-400">
                                Gurunanak Public School & Jr. College
                            </p>
                            <p>2019 - 2021</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section
                id="projects"
                className="py-20 bg-gray-50 dark:bg-gray-800 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12 ">
                        Projects
                    </h1>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Algo Disc",
                                desc: "A responsive, web-based static application for visualizing Disk Scheduling Algorithms, leveraging native JavaScript capabilities for computation and interactivity. Built with React.js, Vite for fast bundling, and styled using Tailwind CSS for a modern and intuitive user interface.",
                                imgSrc: "/projects/algo_disk.png",
                                link: "https://algo-disc.vercel.app/",
                            },
                            {
                                title: "Budget Buddy",
                                desc: "Budget Buddy is a responsive and user-friendly web application that helps you calculate monthly EMI (Equated Monthly Installment) for various loan types, view a detailed repayment breakdown, and download a comprehensive Excel report.",
                                imgSrc: "/projects/budget-buddy.png",
                                link: "https://budget-buddy-wheat-phi.vercel.app/",
                            },
                            {
                                title: "Royal GYM",
                                desc: "A static GYM website template developed using pure HTML & CSS for development purpose (GitHub)",
                                imgSrc: "/projects/royal-gym.png",
                                link: "https://github.com/pranav-gadewar/royal-gym",
                            },
                        ].map((proj, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition overflow-hidden hover:scale-105 p-2"
                            >
                                {/* Project Image */}
                                <img
                                    src={proj.imgSrc}
                                    alt={proj.title}
                                    className="w-full h-52 object-cover"
                                />

                                <div className="p-4">
                                    {/* Project Name */}
                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {proj.title}
                                    </h2>

                                    {/* Project Description */}
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        {proj.desc}
                                    </p>

                                    {/* View Project Link */}
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Skills */}
            <section
                id="skills"
                className="py-20 bg-gray-100 dark:bg-gray-900 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
                        Technical Skills
                    </h1>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { name: "React JS", icon: <FaReact className="text-4xl text-blue-500" /> },
                            { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
                            { name: "CSS", icon: <FaCss3Alt className="text-4xl text-sky-400" /> },
                            { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
                            { name: "Tailwind CSS", icon: <FaCss3Alt className="text-4xl text-sky-400" /> },
                            { name: "Java", icon: <FaJava className="text-4xl text-red-600" /> },
                            { name: "C/C++", icon: <FaCode className="text-4xl text-gray-600" /> },
                            { name: "PHP", icon: <FaPhp className="text-4xl text-indigo-600" /> },
                            { name: "Node JS", icon: <FaNodeJs className="text-4xl text-green-600" /> },
                            { name: "DBMS – MySQL", icon: <FaDatabase className="text-4xl text-yellow-600" /> },
                            { name: "Python", icon: <FaPython className="text-4xl text-yellow-400" /> },
                        ].map((skill) => (
                            <div
                                key={skill.name}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center hover:shadow-lg transition hover:scale-105"
                            >
                                <div className="flex justify-center mb-4">{skill.icon}</div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {skill.name}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section
                id="certifications"
                className="py-20 bg-gray-50 dark:bg-gray-800 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
                        Certifications
                    </h1>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: "Programming in Java",
                                platform: "Swayam NPTEL",
                                imgSrc: "/certificates/NPTEL/Programming In Java.png",
                                pdfSrc: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS57S125520277004424223",
                            },
                            {
                                name: "Html 5",
                                platform: "Infosys Springboard",
                                imgSrc: "/certificates/Infosys Springboard/HTML5_Certificate_Infosys_Springboard.png",  // 👈 your preview image
                                pdfSrc: "/certificates/Infosys Springboard/HTML5_Certificate_Infosys_Springboard.pdf",  // 👈 corresponding PDF
                            },
                            {
                                name: "CSS3",
                                platform: "Infosys Springboard",
                                imgSrc: "/certificates/Infosys Springboard/CSS3_Certificate_Infosys_Springboard.png",
                                pdfSrc: "/certificates/Infosys Springboard/CSS3_Certificate_Infosys_Springboard.pdf",
                            },
                            {
                                name: "JavaScript",
                                platform: "Infosys Springboard",
                                imgSrc: "/certificates/Infosys Springboard/JavaScript_Certificate_Infosys_Springboard.png",
                                pdfSrc: "/certificates/Infosys Springboard/JavaScript_Certificate_Infosys_Springboard.pdf",
                            },
                            {
                                name: "Website Creation",
                                platform: "Infosys Springboard",
                                imgSrc: "/certificates/Infosys Springboard/Website_Creation_Certificate_Infosys_Springboard.png",
                                pdfSrc: "/certificates/Infosys Springboard/Website_Creation_Certificate_Infosys_Springboard.pdf",
                            },
                            {
                                name: "User Experience",
                                platform: "Infosys Springboard",
                                imgSrc: "/certificates/Infosys Springboard/User_Experience_Certificate_Infosys_Springboard.png",
                                pdfSrc: "/certificates/Infosys Springboard/User_Experience_Certificate_Infosys_Springboard.pdf",
                            },
                            {
                                name: "Twitter - Bootstrap",
                                platform: "Infosys Springboard",
                                imgSrc: "/certificates/Infosys Springboard/Twitter_Bootstrap_Certificate_Infosys_Springboard.png",
                                pdfSrc: "/certificates/Infosys Springboard/Twitter_Bootstrap_Certificate_Infosys_Springboard.pdf",
                            },
                            {
                                name: "Creating Responsive Web Pages using Bootstrap 4",
                                platform: "Infosys Springboard",
                                imgSrc: "/certificates/Infosys Springboard/Creating_Responsive_Web_Pages_using_Bootstrap_4_Certificate_Infosys_Springboard.png",
                                pdfSrc: "/certificates/Infosys Springboard/Creating_Responsive_Web_Pages_using_Bootstrap_4_Certificate_Infosys_Springboard.pdf",
                            },
                            {
                                name: "Email Writing",
                                platform: "Infosys Springboard",
                                imgSrc: "/certificates/Infosys Springboard/Email_Writing_Certificate_Infosys_Springboard.png",
                                pdfSrc: "/certificates/Infosys Springboard/Email_Writing_Certificate_Infosys_Springboard.pdf",
                            },
                            {
                                name: "High Impact Presentations",
                                platform: "Infosys Springboard",
                                imgSrc: "/certificates/Infosys Springboard/High_Impact_Presentations_Certificate_Infosys_Springboard.png",
                                pdfSrc: "/certificates/Infosys Springboard/High_Impact_Presentations_Certificate_Infosys_Springboard.pdf",
                            },
                            {
                                name: "Time Management",
                                platform: "Infosys Springboard",
                                imgSrc: "/certificates/Infosys Springboard/Time_Management_Certificate_Infosys_Springboard.png",
                                pdfSrc: "/certificates/Infosys Springboard/Time_Management_Certificate_Infosys_Springboard.pdf",
                            },
                            {
                                name: "Low Level Design of Payment Apps",
                                platform: "Scaler Topics",
                                imgSrc: "/certificates/Scalar Topics/Low-Level Design of Payment Apps.png",
                                pdfSrc: "/certificates/Scalar Topics/Low-Level Design of Payment Apps.png",
                            },
                            {
                                name: "Java Course - Mastering the Fundamentals",
                                platform: "Scaler Topics",
                                imgSrc: "/certificates/Scalar Topics/Scaler_Java_Online_Certificate.png",
                                pdfSrc: "/certificates/Scalar Topics/Scaler_Java_Online_Certificate.png",
                            },
                            {
                                name: "JavaScript",
                                platform: "Scaler Topics",
                                imgSrc: "/certificates/Scalar Topics/JavaScript_Certificate.png",
                                pdfSrc: "/certificates/Scalar Topics/JavaScript_Certificate.pdf",
                            },
                            {
                                name: "React JS",
                                platform: "Udemy",
                                imgSrc: "/certificates/Udemy/React JS - Online Course Certificate.png",
                                pdfSrc: "/certificates/Udemy/React JS - Online Course Certificate.pdf",
                            },
                            {
                                name: "Intelectual Property Awareness",
                                platform: "Modern College of Engineering, Pune",
                                imgSrc: "/certificates/PES/IPR_EVENT_PRANAV_GADEWAR.png",
                                pdfSrc: "/certificates/PES/IPR_EVENT_PRANAV_GADEWAR.pdf",
                            },
                            {
                                name: "Java Training",
                                platform: "Spoken Tutorial under Modern College of Engineering, Pune",
                                imgSrc: "/certificates/PES/Java_Training_Certificate.png",
                                pdfSrc: "/certificates/PES/Java_Training_Certificate.pdf",
                            },
                        ].map((cert) => (
                            <div
                                key={cert.name}
                                className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition overflow-hidden hover:scale-105"
                            >
                                <img
                                    src={cert.imgSrc}
                                    alt={cert.name}
                                    className="w-full h-42  object-cover p-2"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {cert.name}
                                    </h2>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        Platform: {cert.platform}
                                    </p>
                                    <a
                                        href={cert.pdfSrc}
                                        download
                                        className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                                    >
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Soft Skills */}
            <section
                id="softskills"
                className="py-20 bg-gray-100 dark:bg-gray-900 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
                        Soft Skills
                    </h1>

                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            "Fluent in Spoken English & Written Communication",
                            "Organization, Decision Making & Leadership Skills",
                            "Adaptive & Collaborative",
                            "Creative Thinking and Efficient Presentation Skills",
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-6"
                            >
                                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                                    {skill}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Extras */}
            <section
                id="extras"
                className="py-20 bg-gray-50 dark:bg-gray-800 px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
                        Extra Curricular
                    </h1>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Disk Scheduling Algorithms Visualizer",
                                description:
                                    "For Operating System and Computer Networks Project Competition (Group of 4 members).",
                            },
                            {
                                title: "Vehicle Safetylizer",
                                description:
                                    "For Alcohol Detection using IoT Components and C++ (Group of 3 members).",
                            },
                            {
                                title: "House Price Prediction Presentation",
                                description:
                                    "Using Python libraries (Numpy, pandas) via Jupyter Notebook and MS Power Point (Group of 2 members).",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition p-6"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <section
                id="contact"
                className="bg-gray-100 dark:bg-gray-900 px-6 pt-20 pb-10"
            >
                <div className="max-w-6xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                        Get in Touch
                    </h1>

                    <p className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
                        Feel free to reach out to me for collaborations, project discussions,
                        or just to say hello. I’m always open to exploring new opportunities
                        and connecting with like-minded people.
                    </p>

                    <div className="space-y-4">
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            📞 <span className="font-semibold">(+91) 96076 22072</span>
                        </p>
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            📧{" "}
                            <a
                                href="mailto:your-email@example.com"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                gadewar.pranav03@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://www.linkedin.com/in/pranav-gadewar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 text-3xl hover:scale-110 transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=405xnx5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 text-3xl hover:scale-110 transition"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://github.com/pranav-gadewar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-white text-3xl hover:scale-110 transition"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                    </div>

                    <button
                        onClick={() => window.location.href = "mailto:your-email@example.com"}
                        className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
                    >
                        Email Me
                    </button>
                </div>

                <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6">
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} Pranav Gadewar. All rights reserved.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default Home;
