import { Github, Linkedin, Codepen, Instagram, MessageSquare } from "lucide-react"
import ScrollLink from "@/components/scroll-link"
import Link from "next/link"
import Head from "next/head";
import Script from "next/script";

const projects = [
  {
    id: 1,
    title: "DrTalks",
    description: "A platform for accessing expert-led health summits and wellness resources.",
    technologies: ["wordpress", "woocommerce", "everflow"],
    githubLink: "#",
    externalLink: "http://drtalks.com",
    icon: "MessageSquare",
  },
  {
    id: 2,
    title: "DrTalks Affiliate Portal",
    description: "A portal for affiliates to track commissions, performance metrics, and promotional tools.",
    technologies: ["wordpress", "everflow", "react.js", "mysql"],
    githubLink: "#",
    externalLink: "https://affiliates.drtalks.com",
    icon: "MessageSquare",
  },
  {
    id: 3,
    title: "Advice Analytics Dashboard",
    description: "Advice Analytics Dashboard: A financial analytics platform providing insights for retirement planning, helping users make informed investment decisions.",
    technologies: ["express.js", "react.js", "PostgreSQL"],
    githubLink: "#",
    externalLink: "https://adviceanalytics.com",
    icon: "MessageSquare",
  },
  {
    id: 4,
    title: "DTupas Portfolio",
    description: "A sleek portfolio site showcasing DTupas' projects, experience, and contact details.",
    technologies: ["next.js", "typescript", "tailwind"],
    githubLink: "https://github.com/denis0826/dtupas.me",
    externalLink: "http://dtupas.me",
    // icon: "MessageSquare",
  },
  {
    id: 5,
    title: "Vote In or Out",
    description: "A civic engagement platform enabling users to participate in voting and advocacy efforts.",
    technologies: ["python", "django", "tailwind"],
    githubLink: "#",
    externalLink: "https://www.voteinorout.com",
    icon: "MessageSquare",
  },
  {
    id: 6,
    title: "Kuroshio Delivery Tracker",
    description: "A logistics tracking system for monitoring vehicle routes and delivery statuses in real time.",
    technologies: ["react.js", "hasura", "PostgreSQL", "docker"],
    githubLink: "#",
    name:"kuroshio",
    externalLink: "https://krsion.kuroshio9640.co.jp/login",
    icon: "MessageSquare",
  },
];



export default function Home() {
  return (
      <>
      <Head>
        <title>Dennis Tupas | Software Developer</title>
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BYLDSZHJ1V"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BYLDSZHJ1V', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    <div className="min-h-screen bg-[#0a192f] text-slate-300 flex">
      {/* Sidebar Navigation */}
      <aside className="fixed left-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <nav className="flex flex-col items-center space-y-6">
          <div className="w-px h-24 bg-slate-600"></div>
          <ScrollLink
            href="#about"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            About
          </ScrollLink>
          <ScrollLink
            href="#experience"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            href="#projects"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            href="#contact"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            Contact
          </ScrollLink>
          <div className="w-px h-24 bg-slate-600"></div>
        </nav>
      </aside>

      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 lg:hidden bg-[#0a192f]/90 backdrop-blur-sm">
        <nav className="flex space-x-6">
          <ScrollLink
            href="#about"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            About
          </ScrollLink>
          <ScrollLink
            href="#experience"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            href="#projects"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            href="#contact"
            className="text-xs tracking-widest uppercase text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            Contact
          </ScrollLink>
        </nav>
      </div>

      {/* Social Links */}
      <div className="fixed bottom-0 left-10 hidden lg:block">
        <div className="flex flex-col items-center space-y-6 pb-8">
          <Link
            href="https://github.com/denis0826"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/dennis-tupas-97765455/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://www.instagram.com/denshouu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </Link>
          <div className="w-px h-24 bg-slate-600"></div>
        </div>
      </div>

      {/* Email Link */}
      <div className="fixed bottom-0 right-10 hidden lg:block">
        <div className="flex flex-col items-center space-y-6 pb-8">
          <Link
            href="mailto:denis0826@gmail.com"
            className="text-slate-400 hover:text-[#64ffda] transition-colors text-xs tracking-widest uppercase rotate-90 translate-y-20 origin-bottom-left"
          >
            denis0826@gmail.com
          </Link>
          <div className="w-px h-24 bg-slate-600"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-5xl mx-auto px-6 py-24 lg:py-32">
        <div className="space-y-24">
          {/* Hero Section */}
          <section className="space-y-6">
            <p className="text-[#64ffda] font-mono">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100">Dennis Tupas</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400">Software Developer</h2>
            <p className="max-w-xl text-slate-400 leading-relaxed">
              I build robust, scalable software solutions that solve real-world problems. From system architecture to implementation, I focus on writing clean, efficient code and delivering high-quality digital experiences.
            </p>
          </section>

          {/* About Section */}
          <section id="about" className="space-y-6 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center">
              <span className="text-[#64ffda] font-mono mr-2">01.</span> About Me
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4 text-slate-400">
                <p>
                I'm a software developer passionate about building performant, scalable digital experiences that power modern  
                <span className="text-[#64ffda]"> eCommerce</span> , 
                <span className="text-[#64ffda]"> affiliate platforms</span>, and 
                <span className="text-[#64ffda]"> health-focused video applications</span>. 
                I specialize in creating solutions that are not only technically sound but also user-focused and accessible.
                </p>
                <p>
                  Currently, I'm a Senior Lead Developer at <span className="text-[#64ffda]">DrTalks.com</span>, 
                  where I work across the stack with a focus on video delivery, affiliate systems, and platform performance. 
                </p>
                <p>Here are a few technologies I've been working with recently:</p>
                <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                  <li className="flex items-center">
                    <span className="text-[#64ffda] mr-2">▹</span> JavaScript (ES6+)
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#64ffda] mr-2">▹</span> TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#64ffda] mr-2">▹</span> React
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#64ffda] mr-2">▹</span> Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#64ffda] mr-2">▹</span> Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#64ffda] mr-2">▹</span> WordPress
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#64ffda] mr-2">▹</span> PHP
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#64ffda] mr-2">▹</span> Node.js
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 rounded border border-[#64ffda] group-hover:opacity-100 opacity-50 transition-opacity"></div>
                <div className="relative aspect-square bg-[#64ffda]/10 rounded overflow-hidden">
                  <div className="absolute inset-0 bg-[#64ffda] mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
                  <img
                    src="/me5.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="space-y-6 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-100 flex items-center">
              <span className="text-[#64ffda] font-mono mr-2">02.</span> Where I've Worked
            </h2>
            <div className="space-y-12">
              {/* DrTalks.com */}
              <div className="space-y-4">
                <div className="flex items-center text-slate-200">
                  <span className="text-sm font-mono text-slate-400">2022 — Present</span>
                  <span className="mx-4">→</span>
                  <h3 className="text-lg font-semibold">
                    Senior Lead Developer <span className="text-[#64ffda]">@ DrTalks.com</span>
                  </h3>
                </div>
                <div className="pl-24 space-y-3 text-slate-400">
                  <p> 
                  Owned the development and enhancement of critical features across the stack, contributing to both user-facing interfaces and backend services. 
                  Focused on improving performance, code quality, and system reliability while actively collaborating with product and design teams. 
                  Took initiative in debugging complex issues, refining workflows, and continuously optimizing the development process.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Building responsive interfaces for video content delivery and user engagement</span>
                    </li>
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Implementing membership and subscription functionality</span>
                    </li>
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Leveraging Everflow for affiliate tracking, lead capture, and sales conversion optimization</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">Next.js</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">Headless CMS</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">Faust.js</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">WordPress</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">Woocommerce</span>
                  </div>
                </div>
              </div>

              {/* Lanex.us */}
              <div className="space-y-4">
                <div className="flex items-center text-slate-200">
                  <span className="text-sm font-mono text-slate-400">2018 — 2022</span>
                  <span className="mx-4">→</span>
                  <h3 className="text-lg font-semibold">
                    Software Developer <span className="text-[#64ffda]">@ Lanexus.com</span>
                  </h3>
                </div>
                <div className="pl-24 space-y-3 text-slate-400">
                  <p>
                  Contributed to full-stack development initiatives, designing and implementing end-to-end solutions across frontend and backend systems. 
                  Partnered with cross-functional teams to build scalable, secure web applications, prioritizing performance optimization, clean code practices, and long-term maintainability.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Developed and maintained component libraries and design systems</span>
                    </li>
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Implemented modern front-end architecture using React and Next.js</span>
                    </li>
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Optimized web applications for performance and accessibility</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">React</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">Express.js</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">PostgreSQL</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">Hasura</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">GraphQl</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">Docker</span>
                  </div>
                </div>
              </div>

              {/* Codev.com */}
              <div className="space-y-4">
                <div className="flex items-center text-slate-200">
                  <span className="text-sm font-mono text-slate-400">2014 — 2018</span>
                  <span className="mx-4">→</span>
                  <h3 className="text-lg font-semibold">
                    Web Developer <span className="text-[#64ffda]">@ Codev.com</span>
                  </h3>
                </div>
                <div className="pl-24 space-y-3 text-slate-400">
                  <p>
                    Worked as a full-stack web developer focusing on PHP and JavaScript applications. Built and
                    maintained custom web applications for clients with diverse requirements.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Developed custom PHP applications and content management systems</span>
                    </li>
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Created interactive front-end interfaces with JavaScript and jQuery</span>
                    </li>
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Implemented database design and optimization for web applications</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">PHP</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">JavaScript</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">MySQL</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">jQuery</span>
                  </div>
                </div>
              </div>

              {/* SushiDigital */}
              <div className="space-y-4">
                <div className="flex items-center text-slate-200">
                  <span className="text-sm font-mono text-slate-400">2012 — 2014</span>
                  <span className="mx-4">→</span>
                  <h3 className="text-lg font-semibold">
                    Front End Developer <span className="text-[#64ffda]">@ SushiDigital</span>
                  </h3>
                </div>
                <div className="pl-24 space-y-3 text-slate-400">
                  <p>
                    Specialized in front-end development for a digital agency, creating responsive websites and
                    interactive user interfaces for clients across various industries.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Developed custom WordPress themes and responsive front-end interfaces</span>
                    </li>
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Implemented interactive UI elements using JavaScript and jQuery</span>
                    </li>
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>Optimized websites for speed, SEO, and mobile responsiveness</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">HTML5</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">CSS3</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">JavaScript</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[#112240] text-[#64ffda]">jQuery</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-6 scroll-mt-24">
            {/* <h2 className="text-2xl font-bold text-slate-100 flex items-center">
              <span className="text-[#64ffda] font-mono mr-2">03.</span> Some Things I've Built
            </h2> */}
            {/* <div className="space-y-24">
              <div className="relative grid md:grid-cols-12 gap-4 md:gap-10">
                <div className="md:col-span-7 md:col-start-6 md:row-start-1 relative group">
                  <a href="#" className="block">
                    <div className="absolute inset-0 bg-[#64ffda]/10 rounded md:opacity-100 opacity-20 group-hover:opacity-0 transition-opacity"></div>
                    <img
                      src="/placeholder.svg?height=400&width=700"
                      alt="Project screenshot"
                      className="rounded w-full h-full object-cover"
                    />
                  </a>
                </div>
                <div className="md:col-span-7 md:col-start-1 md:row-start-1 z-10 flex flex-col items-start md:items-end text-left md:text-right">
                  <p className="text-[#64ffda] font-mono text-sm">Featured Project</p>
                  <h3 className="text-xl font-bold text-slate-100 my-2">Project Title</h3>
                  <div className="bg-[#112240] p-6 rounded shadow-xl my-4">
                    <p className="text-slate-400">
                      A comprehensive description of the project. This could include the problem it solves, the
                      technologies used, and any challenges overcome during development.
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-4 justify-end text-xs font-mono text-slate-300">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>Node.js</li>
                  </ul>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="text-slate-300 hover:text-[#64ffda] transition-colors">
                      <Github size={20} />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-slate-300 hover:text-[#64ffda] transition-colors">
                      <MessageSquare size={20} />
                      <span className="sr-only">External Link</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative grid md:grid-cols-12 gap-4 md:gap-10">
                <div className="md:col-span-7 md:col-start-1 md:row-start-1 relative group">
                  <a href="#" className="block">
                    <div className="absolute inset-0 bg-[#64ffda]/10 rounded md:opacity-100 opacity-20 group-hover:opacity-0 transition-opacity"></div>
                    <img
                      src="/placeholder.svg?height=400&width=700"
                      alt="Project screenshot"
                      className="rounded w-full h-full object-cover"
                    />
                  </a>
                </div>
                <div className="md:col-span-7 md:col-start-6 md:row-start-1 z-10 flex flex-col items-start text-left">
                  <p className="text-[#64ffda] font-mono text-sm">Featured Project</p>
                  <h3 className="text-xl font-bold text-slate-100 my-2">Project Title</h3>
                  <div className="bg-[#112240] p-6 rounded shadow-xl my-4">
                    <p className="text-slate-400">
                      A comprehensive description of the project. This could include the problem it solves, the
                      technologies used, and any challenges overcome during development.
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>Node.js</li>
                  </ul>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="text-slate-300 hover:text-[#64ffda] transition-colors">
                      <Github size={20} />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-slate-300 hover:text-[#64ffda] transition-colors">
                      <MessageSquare size={20} />
                      <span className="sr-only">External Link</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Other Projects Grid */}
            <h3 className="text-xl font-bold text-slate-100 text-center mt-24">Some Things I've Built</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((item) => (
              <div key={item.id} className="bg-[#112240] rounded p-6 flex flex-col h-full group">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[#64ffda]">
                    <span>{item.name ? item.name : item.externalLink.replace(/^https?:\/\//, "")}</span>
                  </div>

                  <div className="flex gap-4">
                    <Link href={item.githubLink} className="text-slate-300 hover:text-[#64ffda] transition-colors">
                      <Github size={20} />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href={item.externalLink} className="text-slate-300 hover:text-[#64ffda] transition-colors">
                      <MessageSquare size={20} />
                      <span className="sr-only">External Link</span>
                    </Link>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-100 group-hover:text-[#64ffda] transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 my-4 flex-grow">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-300 mt-2">
                  {item.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}

            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-6 scroll-mt-24 text-center max-w-xl mx-auto">
            <p className="text-[#64ffda] font-mono">04. What's Next?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Get In Touch</h2>
            <p className="text-slate-400">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
            <div className="pt-6">
              <Link
                href="mailto:denis0826@gmail.com"
                className="inline-block px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded font-mono hover:bg-[#64ffda]/10 transition-colors"
              >
                Say Hello
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-slate-400 pt-12">
            <p>Designed & Built by Dennis Tupas</p>
            <div className="flex justify-center space-x-6 mt-6 lg:hidden">
              <Link
                href="https://github.com/denis0826"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#64ffda] transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dennis-tupas-97765455/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#64ffda] transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/denshouu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#64ffda] transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
    </>
  )
}

