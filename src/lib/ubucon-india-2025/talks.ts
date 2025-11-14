export const ubuconIndia2025Talks = [
  {
    id: "3",
    title: "PCLive: Pipelined Restoration of Application Containers for Reduced Service Downtime",
    description: "Application containers are widely used in contemporary cloud computing environments. Migration of containers across hosts provides cost-effective cloud management by enabling improved server consolidation, load balancing and enhanced fault tolerance. One of the primary objectives of container migration is to reduce the service downtime of applications hosted in containers. The service downtime depends on performing the migration activities efficiently, specifically from the time the container is stopped on the source host till it is restored and fully functional at the destination host.\r\nIn this paper, we show that, the state-of-the-art pre-copy migration strategy for containers using checkpoint and restore techniques (e.g., CRIU) inflates the downtime due to its inherent limitations in the restoration procedures, particularly for containers with large memory working set size. We propose PCLive to address this bottleneck using a pipelined restore mechanism. Compared to the baseline CRIU pre-copy migration, PCLive results in up to ~38.8x reduction in restoration time which leads to a reduction of service downtime by up to ~2.7x for migration of a container hosting the Redis key-value store over an one Gbps network. We also present comprehensive comparative analysis of the resource cost for the proposed solution along with additional optimizations to demonstrate that PCLive can reduce the application downtime in a resource efficient manner leveraging its flexible and efficient design choices.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/825/",
    authors: [
      {
        name: "Shiv Bhushan Tripathi",
        affiliation: "Indian Institute of Technology Kanpur"
      }
    ]
  },
  {
    id: "4",
    title: "EVOLUTION OF MACHINE IDENTITIES AND ITS IMPACT ON CLOUD IAM",
    description: "https://www.linkedin.com/pulse/evolution-machine-identities-its-impact-cloud-iam-chetan-kulshrestha-t20ic/?trackingId=6o3CE8XEMMbkesMAfDGxZQ%3D%3D",
    duration: "5 minutes",
    type: "Lightning Talk (5 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/819/",
    authors: [
      {
        name: "Chetan Kulshrestha"
      }
    ]
  },
  {
    id: "9",
    title: "Building Production-Ready Kubernetes on Ubuntu: A Checklist Approach",
    description: "Moving from development to production Kubernetes on Ubuntu involves critical decisions that can make or break your deployment. This practical session provides an actionable checklist transforming production readiness into manageable steps.\r\nDrawing from real-world deployments, we'll cover essential components of production-ready Ubuntu Kubernetes clusters: CNI selection, storage strategies, CIS-aligned security hardening, and monitoring architectures that provide visibility without complexity.\r\nAttendees receive a downloadable checklist covering networking, storage classes, RBAC implementation, observability stack deployment, disaster recovery, and automated security scanning. Each item includes recommended open-source tools, Ubuntu-specific configurations, and common pitfalls.\r\nWe'll demonstrate eBPF-based runtime monitoring, automated vulnerability scanning, cost-effective logging, and CI/CD pipelines with security policies. The session covers leveraging Ubuntu's AppArmor in containers, resource optimization, and scalable monitoring from small clusters to multi-region deployments.\r\nFocus is on actionable insights you can implement immediately: kubectl commands, YAML configurations, and automation scripts for Ubuntu environments. Help attendees avoid common mistakes and build robust, secure, maintainable platforms.",
    duration: "30 minutes",
    type: "Talk (30 mins+)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/837/",
    authors: [
      {
        name: "Kunal Das",
        affiliation: "CastAI"
      }
    ]
  },
  {
    id: "11",
    title: "Scaling AI Infra: Data Pipelines, Orchestration, and Distributed Training with Ray",
    description: "Modern AI systems are no longer bottlenecked by models—they are bottlenecked by infrastructure. Training and deploying state-of-the-art models requires managing terabytes of multimodal data, orchestrating distributed GPU clusters, and ensuring reproducibility, data consistency & fault tolerance. The difference between a successful AI project and an abandoned prototype often comes down to the invisible layer of infrastructure: how data is stored, streamed, preprocessed, and served for training and inference.\r\n\r\nIn this talk, We will unpack why building robust AI infrastructure has become the most important problem in both academia and industry. We will explore many open-source tools can level the playing field, enabling even small teams—whether working in research or building products to handle data and computation at scale with far less overhead. I will introduce Ray, an emerging distributed computing framework, and demonstrate how it simplifies complex workflows—scaling from a laptop to multi-GPU clusters, streaming petabyte-scale datasets and orchestrating training/inference pipelines without the additional complexity.\r\n\r\nCrux of this workshop:\r\n\r\n 1. A clear understanding of the design trade-offs in large-scale AI\r\n    infra (storage formats, ingestion, orchestration, inference).\r\n       \r\n 2. A practical guide to using Ray, vLLM, KubeRay, and related tools on Ubuntu from distributed training and dataset versioning in\r\n    academic research to building scalable pipelines and robust model\r\n    serving in industrial deployments.\r\n    \r\n  \r\n       \r\n 3. Common pitfalls & how to avoid them to build resilient AI infrastructure.",
    duration: "1 hour",
    type: "Workshop (60 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/830/",
    authors: [
      {
        name: "Prarabdha Srivastava",
        affiliation: "IISc"
      }
    ]
  },
  {
    id: "16",
    title: "Open Source IoT Tools for Ubuntu: Enabling Scalable, Secure, and Interoperable IoT Deployments",
    description: "The robust ecosystem of open-source tools available for Internet of Things (IoT) deployments on Ubuntu Linux, highlights how these tools collectively address the key challenges of modern IoT implementations. In Modern days, Ubuntu's package management system and long-term support model provide an ideal foundation for IoT solutions across industrial, commercial, and residential applications and more.\r\n\r\nThe research categorizes and evaluates prominent open source tools including Node-RED for visual programming, Eclipse Mosquitto for MQTT messaging, ThingsBoard for device management and visualization, InfluxDB for time-series data storage, and HomeAssistant for home automation.\r\n\r\nThe findings suggest that Ubuntu's open source IoT ecosystem offers compelling advantages over proprietary alternatives, particularly for organizations seeking cost-effective solutions with flexibility for customization and long-term sustainability. This research contributes to the understanding of how open source technologies can accelerate IoT innovation while addressing critical implementation challenges in resource-constrained and security-sensitive environments.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/828/",
    authors: [
      {
        name: "Ramprakash Singaravel",
        affiliation: "Anna University"
      }
    ]
  },
  {
    id: "21",
    title: "Optimising LLM Inference on Resource-Constrained Hardware: A Study with VLLM, Quantization, and Compression",
    description: "When I first tried running an open-source LLM on my everyday GPU, the result was humbling out-of-memory errors, sluggish responses, and the sinking feeling that deploying LLMs was only for those with expensive infrastructure.\r\n\r\nThat’s when I discovered VLLM, a framework built around continuous batching and efficient memory management. For me, it was a breakthrough: suddenly, the same hardware that choked on small models could serve 7B-parameter models with near real-time responses. Combined with quantization and compression from HuggingFace’s ecosystem, VLLM turned deployment from a frustrating experiment into a workable production pipeline.\r\n\r\n\r\nIn this talk, I’ll walk through the journey of optimising LLM inference step by step:\r\n\r\n - How I used HuggingFace Optimum and VLLM to run 7B-parameter models on consumer-grade GPUs.\r\n\r\n - Tricks that reduced GPU memory usage by more than half, making real-time responses possible.\r\n\r\n - Benchmarks comparing latency, throughput, and cost across different\r\n   optimisation strategies.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/814/",
    authors: [
      {
        name: "Abdul Hakkeem P A",
        affiliation: "AI Researcher"
      }
    ]
  },
  {
    id: "22",
    title: "OSCAL - An free open source DSL for GRC Engineers",
    description: "OSCAL (Open Security Controls Assessment Language), developed by NIST, is rapidly becoming the standard for representing compliance, controls, risks, and assessment data in machine-readable formats. While already gaining traction in FedRAMP and other GRC automation efforts, its potential for the broader cybersecurity ecosystem is only beginning to unfold.\r\n\r\nIn this talk, I will share extensions to OSCAL that enable more efficient handling of multi-framework conformance and crosswalks between standards. I will also show how OSCAL can be applied to audit reporting, making reports not just human-readable but also machine-parseable and automation-friendly. These advancements open the door to faster compliance workflows, reduced manual effort, and a more open, interoperable approach to GRC.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/824/",
    authors: [
      {
        name: "Balachandran Sivakumar"
      }
    ]
  },
  {
    id: "23",
    title: "You Don’t Need to Be a Designer to Design: Fixing UX in Open Source",
    description: "Open source thrives on contributions from developers, testers, and community builders, but design often gets left behind. With far fewer dedicated designers in FOSS than in the commercial tech world, usability issues go unaddressed, and end users feel the friction.\r\n\r\nThe good news: you don’t need a design degree or a new job title to make a difference. In this talk, I’ll briefly share my journey from Engineer to UX designer (now at Canonical), and show how *any contributor* can use simple, practical design methods to identify and solve UX issues in their favorite open source projects. I’ll try to break down *“design”* into simple steps anyone can try, noticing where people get stuck, asking the right questions, sketching ideas on paper, and trying them out with friends or community members. No special skills or software needed: just curiosity and a willingness to make things easier for others. Using examples, I’ll walk through how small UX fixes can have a huge impact on adoption and satisfaction.\r\n\r\nIf you’ve ever thought, *“I see the problem, but I’m not a designer”* - this talk will give you the mindset and tools to step up and become one.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/816/",
    authors: [
      {
        name: "Archita Gorle",
        affiliation: "Canonical"
      }
    ]
  },
  {
    id: "27",
    title: "Ubuntu for Developers",
    description: "Over the last year and a half there has been a focused effort to make the developer experience on Ubuntu as frictionless as possible. The effort builds an end to end platform for developers, especially those developing for Hybrid Cloud. It encompasses enterprise applicaton runtimes like Java, .NET, as well as developer favorites like Rust and Golang. Let's dive into the many enhancements like versioned toolchains, devpacks, build and test containers and chiseled containers.",
    duration: "30 minutes",
    type: "Talk (30 mins+)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/823/",
    authors: [
      {
        name: "Samir Kamerkar",
        affiliation: "Canonical"
      }
    ]
  },
  {
    id: "28",
    title: "The Heartbeat of Open Source: Stories, Pathways  and People Beyond Code",
    description: "When people talk about open source, they usually think it is only commits, pull requests, and code brilliance. While the truth is, code isn’t the whole story. What really keeps open source alive are the ecosystems of care, culture, and community wrapped around it.\r\n\r\nBehind every healthy project, there’s a README that introduces the project, Contribution guidelines that invites them in, Communities—local or global—that meets, helps and grows together. Documentation is no different than storytelling where Licensing reflects values and philosophy and diversity and inclusion become the actual foundation of resilience.\r\n\r\nThis talk challenges the idea that contribution = code. Drawing from real experiences in FOSS projects and community building, we’ll share how we can:\r\nWrite documentation that feels like an invitation, not an instruction manual.\r\nBuild and sustain local communities (LoCos) that strengthen advocacy and amplify diverse voices.\r\nDesign contribution pathways that act like bridges, not walls.\r\nBreathe diversity and inclusion into the DNA of projects, not tack them on as extras.\r\nTreat licensing and governance as tools that empower, not intimidate.\r\n\r\nLearning Outcomes\r\nRecognize non-code contributions as critical to FOSS sustainability.\r\nLearn how inclusive documentation and guidelines lower barriers.\r\nUnderstand strategies for building and supporting diverse local communities.\r\nSee licensing and governance as cultural as well as legal choices.\r\nLeave with practical steps to nurture open source as an ecosystem of belonging",
    duration: "20 minutes",
    type: "Talk (30 mins+)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/834/",
    authors: [
      {
        name: "Aditya D",
      },
      {
        name: "Saumili Dutta"
      }
    ]
  },
  {
    id: "29",
    title: "From Notebook to Cloud: Deploying an ML Model on Ubuntu in 60 Minutes",
    description: "Ever wondered how the machine learning models you experiment with on your laptop can go live for the world to use? This hands-on workshop will take you on a journey from a simple notebook to a fully deployed model in just one hour. We'll start small, training a prebuilt ML model right on your Ubuntu machine, and then scale out, containerizing your model and deploying it on MicroK8s. Finally, we'll reflect on how these techniques fit into real-world MLOps workflows, giving you practical strategies for scaling, monitoring, and integrating with open-source tools. By the end, you’ll have taken your model from code to cloud—and seen how Ubuntu makes it all possible.\r\nLearning Outcomes:\r\nLearn to set up a reproducible ML development environment on Ubuntu.\r\nTrain a small ML model (image classifier or sentiment analysis) from scratch.\r\nContainerize your model with Docker or Podman, and deploy it on a lightweight Kubernetes cluster.\r\nExpose a REST API endpoint to interact with your model.\r\nGain insight into real-world MLOps practices, including scaling strategies, monitoring, and workflow integration.\r\nUnderstand how the same containerized model can be extended to edge devices or multi-cloud deployments.\r\n\r\n\r\nAudience Takeaways:\r\n Participants will leave with a practical, end-to-end understanding of ML model deployment, from local training to cloud-ready infrastructure—plus the confidence to replicate this workflow for their own projects. Ubuntu becomes your trusted launchpad for turning notebooks into deployable services.",
    duration: "1 hour",
    type: "Workshop (60 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/833/",
    authors: [
      {
        name: "Aditya D"
      },
      {
        name: "Saumili Dutta"
      }
    ]
  },
  {
    id: "31",
    title: "eSim on Ubuntu: Open Source EDA and PDKs for Circuit Design with Snap, Docker, and AI",
    description: "[eSim][1] on Ubuntu represents a complete open-source ecosystem for electronic design, simulation, and prototyping, combining the flexibility of Ubuntu with the power of modern packaging and deployment tools like Snap and Docker. Developed at [FOSSEE][2], IIT Bombay, eSim integrates schematic capture, circuit simulation using Ngspice and Verilator, mixed-signal support, and PCB workflows through KiCad, providing a unified alternative to costly proprietary EDA tools. With Snap packaging, users benefit from simple installation and seamless updates across Ubuntu versions, while Docker containers ensure reproducibility, portability, and ease of setup for workshops, collaborative research, and cloud environments. The inclusion of open-source Process Design Kits (PDKs) such as SkyWater 130nm, GF180(Work in Progress), and IHP SG13G2 bridges the gap between education and industry by allowing users to take their designs from circuit level to silicon, fostering innovation in open hardware. Looking ahead, the convergence of AI with eSim on Ubuntu opens new possibilities for automated circuit optimization, intelligent design space exploration, and smart error detection, making the design process faster, more efficient, and more accessible. Together, eSim, open-source PDKs, and Ubuntu’s AI-ready ecosystem pave the way for a democratized future in electronics design—one where students, researchers, startups, and industries can all collaborate and innovate without barriers. All the code resource for eSim are available on [eSim-GitHub][3] page. We are developing a [Cloud version of eSim][4].\r\n\r\n\r\n  [1]: https://esim.fossee.in\r\n  [2]: https://fossee.in\r\n  [3]: https://github.com/FOSSEE/eSim\r\n  [4]: https://github.com/frg-fossee/eSim-Cloud",
    duration: "30 minutes",
    type: "Talk (30 mins+)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/810/",
    authors: [
      {
        name: "Sumanto Kar",
        affiliation: "FOSSEE"
      },
      {
        name: "Aditya Minocha",
        affiliation: "IIT Bombay"
      },
      {
        name: "Shanthi Priya",
        affiliation: "FOSSEE"
      },
      {
        name: "Varad Patil",
        affiliation: "IIT Bombay"
      }
    ]
  },
  {
    id: "32",
    title: "Introducing Canonical Academy",
    description: "In this talk, we want to introduce [Canonical Academy][1] - a new learning and qualification platform built to empower individuals with real-world, hands-on skills that reflect the way open source is used in production today.\r\n\r\nWe’ll give the community an inside look at the development of Canonical Academy, how it aligns with Ubuntu’s mission, and why we believe it fills an important gap in the current Linux and open source learning ecosystem.\r\n\r\nWhat the session will cover:\r\n\r\n1. How Canonical Academy is structured - An overview of our job-based tracks, starting with the System Administrator qualification, and what learners can expect from each.\r\n2. Our exam creation methodology - A behind-the-scenes look at how we design exams to be practical, meaningful, and reflective of the actual work done in professional environments — including input from engineers, educators, and subject matter experts.\r\n3. What this means for the community - how to validate skills, upskill for a job, contribute as an SME.\r\n4. Get involved- Learn how to join as a beta tester, sign up as a subject matter expert, provide feedback to shape future exam tracks\r\n\r\n\r\n  [1]: https://ubuntu.com/credentials",
    duration: "5 minutes",
    type: "Lightning Talk (5 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/813/",
    authors: [
      {
        name: "Ishani Ghoshal",
        affiliation: "Canonical"
      }
    ]
  },
  {
    id: "33",
    title: "Don't just write documentation, design it!",
    description: "This talk will focus on benefits of designing documentation based on the user experience. What typically happens in the world of documentation, especially in open source communities is that documentation is written \"for\" a product, keeping the product evolution front and center.\r\n\r\nThis talk intends to challenge that notion by comparing real time examples and demonstrating how consciously designing documentation following the user journey instead of the product journey can provide better positioning for the products in the market and also draw users' attention better.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/815/",
    authors: [
      {
        name: "Keirthana Thangavelu Srinivasan",
        affiliation: "Canonical"
      }
    ]
  },
  {
    id: "35",
    title: "Self-Hosting 101: A real-time self-hosting workshop",
    description: "This is a continuation from my talk that I gave at UbuCon Asia 2025: \r\n\r\n - https://events.canonical.com/event/127/abstracts/838/\r\n\r\nThis time, I'm going to be hosting a workshop where I'll walk people through the steps on how to setup Ubuntu server from scratch for self-hosting. I'll start with setting up a VM with Ubuntu server. I'll walk through securing the server using firewall, fail2ban and other things. I'll then cover setting up a reverse-proxy like nginx and then host a simple web application on it. If time permits, I can also cover setting up podman for containers. I can also go a bit deep into the concepts and cover the basics of routing and tunneling as well.\r\n\r\nRequirements from attendees:\r\n\r\n - Laptop\r\n - It would be great if they could setup qemu on their device (I'll walk people through this if most of them aren't familiar with qemu.)\r\n - It would be great if they could pre-download the Ubuntu server ISO (https://ubuntu.com/download/server).",
    duration: "1h 30m",
    type: "Workshop (90 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/822/",
    authors: [
      {
        name: "Venkatesh Chaturvedi"
      }
    ]
  },
  {
    id: "36",
    title: "Supercharging Your API Testing Workflow on Ubuntu with Bruno",
    description: "APIs are the backbone of modern applications but testing them reliably can still be a challenge. \r\n\r\nIn this session, we’ll showcase Bruno, a fast, open-source API testing tool designed to make building, testing, and debugging APIs easier.\r\n\r\nWe’ll walk through real-world examples of:\r\n\r\n - Designing and testing REST and gRPC APIs with Bruno\r\n   \r\n   \r\n   Leveraging scripting and environment variables for dynamic,\r\n   repeatable tests\r\n   \r\n   \r\n   Integrating Bruno into your Ubuntu-based developer workflow\r\n\r\nUsing open-source tools to boost collaboration between developers and DevOps teams\r\n\r\nBruno supports Snap and Flatpak, making installs and updates seamless on Ubuntu. I’ll share how we’re embracing Ubuntu’s ecosystem and how community feedback directly improves Bruno from packaging and testing to docs and examples.\r\n\r\nIf you’re a backend developer, DevOps engineer, or open-source enthusiast, you’ll leave with practical recipes to build and test APIs more confidently and clear paths to contribute (issues, packaging feedback, docs, examples).",
    duration: "1 hour",
    type: "Workshop (60 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/835/",
    authors: [
      {
        name: "Ganesh Patil",
        affiliation: "usebruno"
      }
    ]
  },
  {
    id: "37",
    title: "Open Source Chip Design Ecosystem",
    description: "The open-source chip design ecosystem is one of the way everyone can learn how hardware is designed, verified, and fabricated. This talk will provide an introductory overview of key open-source tools, frameworks, and processes, focusing on the *RISC-V architecture*, *SkyWater PDK*, and the *OpenROAD autonomous design flow* and some other supporting tools. Through my personal exploration, I will highlight how beginners can start contributing, experimenting, and learning in this ecosystem. **Attendees will leave with a clear roadmap of resources, practical examples, and a foundational understanding of open-source chip design.**",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/821/",
    authors: [
      {
        name: "N Nishchit",
        imageUrl: getImageUrl("n-nischit.jpg"),
        affiliation: "BMS College of Enigneering"
      }
    ]
  },
  {
    id: "38",
    title: "AI-Controlled Robotics: Build Your Own Natural Language Robot Interface with Claude and ROS",
    description: "**Workshop Overview:**\r\n----------------------\r\n\r\nLearn how to create an AI-powered robotics development environment where you can control robots through natural language using Claude Desktop and the Model Context Protocol (MCP). This hands-on workshop covers setup for macOS, Ubuntu, and Windows users.\r\n\r\n**What You'll Learn:**\r\n----------------------\r\n\r\n - Understanding Model Context Protocol (MCP) and its robotics\r\n   applications\r\n - Setting up ROS environments across different operating systems\r\n - Building and configuring MCP servers for robot control\r\n - Establishing cross-platform communication (VM networking, rosbridge)\r\n - Controlling simulated robots through conversational AI\r\n - Visualizing robot data with modern tools (Foxglove Studio)\r\n\r\nPrerequisites:\r\n--------------\r\n\r\n - Laptop with macOS, Ubuntu, or Windows (8GB RAM minimum, 16GB\r\n   recommended)\r\n - Basic command-line familiarity\r\n - Interest in robotics and AI (no prior ROS experience required)\r\n\r\nWhat to Install Before the Workshop:\r\n------------------------------------\r\n\r\n - Claude Desktop application\r\n - For macOS: UTM virtualization software\r\n - For Windows: VirtualBox or VMware\r\n - For Ubuntu: Direct installation capability\r\n - Git for cloning repositories\r\n\r\nWorkshop Structure (90 minutes):\r\n--------------------------------\r\n\r\n**Introduction (10 minutes)**\r\n\r\n - The vision: Natural language robot control\r\n - MCP architecture overview\r\n - Use cases and applications\r\n \r\n\r\nSetup Phase (30 minutes)\r\n------------------------\r\n\r\n - Track 1: Ubuntu users (native installation)\r\n - Track 2: macOS users (VM + rosbridge approach)\r\n - Track 3: Windows users (WSL2 or VM approach)\r\n - Installing ROS and dependencies\r\n - MCP server configuration\r\n\r\nIntegration Phase (25 minutes)\r\n------------------------------\r\n\r\n - Configuring Claude Desktop with MCP\r\n - Setting up robot simulation (TurtleBot3 or turtlesim)\r\n - Testing the connection\r\n - First robot commands through AI\r\n\r\nHands-on Experimentation (20 minutes)\r\n-------------------------------------\r\n\r\n - Controlling robot movement through natural language Reading sensor\r\n   data\r\n - Exploring ROS topics, nodes, and services via MCP\r\n - Group challenges and experimentation\r\n\r\nWrap-up (5 minutes)\r\n-------------------\r\n\r\n - Next steps and resources\r\n - Community contribution opportunities\r\n - Q&A\r\n\r\nKey Takeaways:\r\n--------------\r\n\r\n - Working AI-robot control system on your laptop\r\n - Understanding of MCP architecture\r\n - Cross-platform ROS development skills\r\n - Foundation for advanced robotics projects",
    duration: "1h 30m",
    type: "Workshop (90 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/820/",
    authors: [
      {
        name: "Manjunath Janardhan",
        imageUrl: getImageUrl("manjunath-janardhan.png"),
      }
    ]
  },
  {
    id: "40",
    title: "Kernel-level Threat Detection on Ubuntu",
    description: "You’ve probably heard of traditional Linux security tools intrusion detection systems, antivirus agents, log monitors. They sit on top of the OS, scanning files, parsing logs, and raising alerts. Useful, but often **late** to the party. By the time they notice something, the attack has already happened. Now imagine moving one layer deeper right into the Linux kernel itself. With technologies like eBPF, Ubuntu can watch processes, system calls, and network activity in real time, at the point of execution. Instead of scraping logs after the fact, you get live telemetry from the kernel that shows you exactly what’s happening as it happens.\r\n\r\nBut what does “kernel-level detection” actually mean in practice? How do you collect useful data without slowing everything down? How do you separate normal activity from malicious patterns? And what tools exist today on Ubuntu that make this more approachable for developers, sysadmins, and security teams?\r\n\r\nThis talk will map out the current landscape of kernel-level threat detection on Ubuntu. We’ll explore eBPF based approaches, integration with Ubuntu’s security stack (AppArmor, auditd, systemd tools), and emerging projects that bring visibility directly into the kernel. will see how different methods compare their tradeoffs in performance, usability, and detection accuracy.\r\n\r\nMost importantly, will show what all this means for you as an Ubuntu user. Whether you’re running a laptop, a fleet of servers, or Kubernetes clusters, kernel-level detection is changing how we think about defense. By the end of the session, you’ll walk away with a clear sense of what’s possible today, what’s experimental, and how you can start using Ubuntu itself as a first-class security observability platform.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/808/",
    authors: [
      {
        name: "Vutukuri Sreenivas",
        affiliation: "Cyberdefend"
      }
    ]
  },
  {
    id: "41",
    title: "Hollywood Hacking on Ubuntu: Myths vs Reality",
    description: "It is often said that movies make hacking look very fast, exciting, and almost magical. Even people who know a little about computers may wonder how much of it is real, and how actual hacking works on Ubuntu systems. Movies often show hackers breaking passwords in seconds, opening secret files with one click, or using flashy 3D screens and moving text—but in reality, hacking is much different. It is slower, requires careful thinking, and uses real tools instead of magic.\r\n\r\nThis talk helps bring clarity to the difference between Hollywood hacking and real-world security work. We will look at some common movie scenes and explain what really happens on Ubuntu systems. For example, movies show passwords breaking instantly, but in real life, checking passwords safely takes time and uses tools like `john the ripper` or `hashcat`. Movies show hackers opening secret files with one click, but in real life, we explore files using commands like `ls`, `grep`, and `scripts` to search for important information. Movies show fancy 3D graphics and glowing screens, but most work happens in the terminal, using simple scripts and programs. Movies often ignore security rules, but real hacking follows laws and ethical guidelines.\r\n\r\nWill also show some real tools used on Ubuntu for learning and testing security. These include network scanning with nmap, monitoring network traffic with tcpdump, and tracing system calls with **eBPF**. Attendees will see how these tools work in practice and how Ubuntu makes it easy to experiment in a safe environment.\r\n\r\nIn the end, this talk aims to give insight to beginners, students, and anyone interested in computers and security. Attendees will learn which movie hacks are just for fun and which have a kernel of truth, understand what real hacking looks like on Ubuntu, see examples of real open-source tools used to test and protect systems, and get inspired to start learning security in a safe and practical way.\r\n\r\nBy comparing myths with reality, this talk will make hacking on Ubuntu easier to understand and less mysterious, while keeping it fun and educational.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/842/",
    authors: [
      {
        name: "Vutukuri Sreenivas",
        affiliation: "Cyberdefend"
      }
    ]
  },
  {
    id: "43",
    title: "Streamlining Pedagogical Content Creation- A Hierarchical Agent-Based Architecture for the Procedural Generation of Multimodal FOSS Tutorials",
    description: "We introduce a cognitive architecture for the autonomous synthesis of pedagogical content, inspired by the [Spoken Tutorial project][1] and aligned with the broader goals of the [FOSSEE][2] (Free/Libre and Open Source Software for Education) initiative at IIT Bombay. This framework employs a distributed agentic workflow to automate the end-to-end generation of instructional materials for Free and Open Source Software (FOSS). The primary objective is to address the significant latency, resource overhead, and manual fidelity required by conventional content creation methodologies. Our system is engineered to radically compress the production lifecycle, thereby scaling the availability of high-quality FOSS education for academic and resource-constrained environments.\r\n\r\nConventional didactic content production is characterized by a disarticulated, high-latency workflow that is heavily reliant on human expertise at multiple stages. This paradigm presents substantial barriers to scalability and introduces variability in pedagogical quality. In contrast, our proposed architecture operationalizes the entire creation process as a unified, deterministic computational problem. It transforms a high-level topic directive into a complete, synchronized suite of instructional assets, thereby enforcing a uniform stylistic and pedagogical standard while minimizing human intervention.\r\n\r\nThe system is architected as a logical pipeline implemented across a distributed workflow of functionally specialized agents. Task execution is coordinated asynchronously through a unified communication channel, which governs the sequential progression of artifact generation. The process is initiated when a Pedagogical Scripting Agent consumes an initial topic directive and produces a complete narrative script. This artifact is then published to the channel, triggering a human-in-the-loop (HITL) validation gate where the script undergoes review and potential refinement. Upon successful validation, the verified script is broadcast on the channel, where it is consumed by the Visual Manifestation Agent. This agent then generates a semantically aligned set of presentation slides. In the terminal stage of the pipeline, both the script and its corresponding slides are consumed by a Temporal Synchronization Agent, which computes and fuses the final timing metadata to produce the complete, synchronized tutorial package.\r\n\r\nThe realization of this distributed architecture was pivotally dependent on the Ubuntu environment. Its native support for kernel-level containerization primitives and high-throughput networking APIs provided the bedrock for our asynchronous communication channel, while its role as the reference platform for leading AI frameworks ensured seamless integration of the entire development toolchain.\r\n\r\nThe cognitive core of each agent is powered by a sophisticated Retrieval-Augmented Generation (RAG) paradigm. To ensure maximal contextual relevance, we implement a hybrid retrieval strategy, combining sparse (e.g., BM25) and dense vector search mechanisms to query a domain-specific corpus of FOSS documentation, existing tutorials, and visual design templates curated under the FOSSEE initiative. The retrieved document candidates and graphical precedents are subsequently re-ranked by a lightweight cross-encoder model before being injected into the prompt. For complex problem-solving, agents leverage a Chain-of-Thought (CoT) reasoning process. This enables them to generate intermediate logical steps before producing the final output, critical for structuring coherent narratives and designing semantically relevant visual progressions. Furthermore, a Chain-of-Verification (CoVe) process is integrated to iteratively refine generated content against retrieved facts and pre-defined pedagogical criteria, ensuring both factual grounding and logical, pedagogical soundness in the synthesized artifacts.\r\n\r\nBy synergizing a collaborative multi-agent topology with an advanced hybrid-retrieval RAG framework, Chain-of-Thought reasoning, and a visual synthesis component, our system provides a novel solution for autonomous instructional design. The architecture drastically reduces the content creation lifecycle, enhances pedagogical uniformity, and democratizes the capacity to produce high-quality FOSS tutorials at scale. This work builds upon and extends the long-standing contributions of FOSSEE, IIT Bombay, in creating accessible, open-source educational resources, offering a scalable model for academic and open-source communities worldwide.\r\n\r\nKeywords: AI, Chain-of-Verification, RAG, Multi-Agent Systems, Chain-of-Thought (CoT), LLM, Automation, Educational Technology, FOSS, Ubuntu, HITL, Multimodal Generation. \r\n\r\n  [1]: https://spoken-tutorial.org\r\n  [2]: https://fossee.in",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/826/",
    authors: [
      {
        name: "Aditya Bhattacharya",
        affiliation: "Rajiv Gandhi Institute of Petroleum Technology"
      },
      {
        name: "Sumanto Kar",
        affiliation: "FOSSEE"
      },
      {
        name: "Kannan Moudgalya",
        affiliation: "IIT Bombay)"
      }
    ]
  },
  {
    id: "44",
    title: "6 little-known features: How to make the most out of Launchpad",
    description: "Launchpad is an open source suite of tools that help people and teams to collaborate on software projects and distributions. Launchpad is the centerpiece of Ubuntu development and provides various features and tools to develop and release every Ubuntu version and maintain it. But Launchpad is also free to use for all open source projects and there are many projects that are hosted on Launchpad.\r\n\r\nLaunchpad offers various features like code hosting (git and bazaar), bug\r\ntracking etc. But it has a lot of powerful and useful features that aren't\r\nwell-known. This talk will shed some light on some of those lesser-known\r\nfeatures.\r\n\r\n# Bug tracker federation\r\n\r\nLaunchpad is good at handling aggregate distributions of software, tracking and federating information with other places where similar software is maintained - for example remote bug tracking or groups of projects or a distribution in Launchpad itself, which allows tracking things across\r\nmultiple entities all in one place. For example, this bug tracks the status of a remote execution vulnerability in the zeromq3 package in Suse, Debian, and Ubuntu. For more details, see https://help.launchpad.net/Bugs/MultiProjectBugs.\r\n\r\n# Launchpad build infrastructure\r\n\r\nLaunchpad has a huge build farm with hundreds of builders for 8 architectures, that are capable of building various artifacts like deb packages, snaps, charms, OCI images etc. This infrastructure is provided for use by the Ubuntu and Launchpad user community to reliably build, package, and publish software for various architectures and platforms free of cost. The riscv64 architecture, which is the current/next hot architecture in the industry and was restricted to builds from trusted users only, is now open for everyone.\r\n\r\n# Recipes\r\n\r\nLaunchpad also makes it easy to automate building these types of packages using recipes. There is support for creating recipes for deb packages, snaps, charms etc., that allow automating the building and publishing of software packages of various formats, whenever a change to the associated VCS repository is made. This allows developers to ship changes to users quickly. Even if the source is hosted outside Launchpad, recipes can be set up on Launchpad by setting up a code import for the external repository and setting up the recipe to use that for the builds.\r\n\r\n# Archive snapshots\r\n\r\nSince Launchpad is the platform and the engine powering Ubuntu development, release and maintenance processes, it tracks the details about every package uploaded to the Ubuntu archive or to PPAs and maintains the history of every change. With that, Launchpad is able to provide a point-in-time state information about the Ubuntu archive or a PPA. Using this, we now have an archive snapshot service for the Ubuntu archive and the PPAs at snapshot.ubuntu.com and snapshot.ppa.launchpadcontent.net respectively. We are working on extending this to various other archives like the ones corresponding to ESM and Ubuntu Pro.\r\n\r\n# Launchpad CI\r\n\r\nLaunchpad has a built-in CI functionality that is powered by lpci. It is already being used by a lot of projects in the community for running pre-merge checks on their merge proposals. We are working on adding more useful features to it and making it better.\r\nAutomation using the Launchpad API\r\n\r\nDid you know that Launchpad has a comprehensive API, documented at https://api.launchpad.net, that allows doing almost everything that can be done via the browser using a Launchpad account with the relevant permissions? Launchpad provides a Python library, launchpadlib, a useful interactive command-line utility lp-shell to play with the API easily.\r\nSummary\r\n\r\nDo you want to know what Launchpad is? If you know about it, do you want to become a power user and make the most out of it? This talk highlights 6 little-known features in Launchpad and how you can make use of them.\r\n# Biography\r\n\r\nGuruprasad is a software engineer at Canonical, working for the Launchpad team, who is passionate about computers and technology. He is a free software enthusiast and uses GNU/Linux extensively on personal computers and to self-host various services. He lives in Bengaluru, India.\r\n\r\n# Things to know or prepare for this session\r\n\r\nSome familiarity with Launchpad would be useful.",
    duration: "30 minutes",
    type: "Talk (30 mins+)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/818/",
    authors: [
      {
        name: "Guruprasad Lakshmi Narayanan",
        affiliation: "Canonical"
      }
    ]
  },
  {
    id: "45",
    title: "The journey of a debian package from a developer's computer to an archive",
    description: "In this talk, we will go through the details of the process that happens to allow a Debian package on a developer's computer to be published to an archive (Ubuntu primary archive and/or a Launchpad PPA)",
    duration: "30 minutes",
    type: "Talk (30 mins+)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/811/",
    authors: [
      {
        name: "Guruprasad Lakshmi Narayanan",
        affiliation: "Canonical"
      }
    ]
  },
  {
    id: "47",
    title: "Low-Latency OpenAFS on Ubuntu: Real-Time File Sharing for Robots & Edge Devices",
    description: "**Low-Latency OpenAFS on Ubuntu: Real-Time File Sharing for Robots & Edge Devices**\r\n\r\n**Abstract**\r\nHere’s the deal: robots and sensors are everywhere now. Drones, Raspberry Pis, Jetsons, Coral boards - you name it. They’re all spitting out massive amounts of data: LiDAR scans, video feeds, GPR readings. The problem? Getting that data across multiple compute nodes fast, reliably, and without crying about cloud latency.\r\n\r\nThat’s where OpenAFS comes in. Yeah, it’s this old-school distributed file system that most people forgot about, but when you hack it right, it’s insanely powerful. And when you throw Ubuntu into the mix (on both ARM and x86), you get this battle-tested, offline-friendly, low-latency pipeline for \r\nrobotics and embedded systems.\r\n\r\nIn this talk, I’ll show you how I’ve been using OpenAFS to do things like:\r\n\r\n - Stream LiDAR data from drones in real time without choking.\r\n - Collect and sync sensor logs across a fleet of Raspberry Pis.\r\n - Tie it all into ROS so multiple agents share data like they’ve got a\r\n   group chat.\r\n - Tune the Ubuntu kernel and network stack so the system doesn’t jitter\r\n   when milliseconds actually matter.\r\n\r\nAnd yes - we’ll go through real field-tested use cases, like using aerial drones with Ground Penetrating Radar for landslide rescue. It’s not theory. It’s stuff I’ve actually hacked on, crashed on, and debugged at 3AM.\r\n\r\nIf you care about robotics, real-time systems, or just want to see how an “ancient” distributed file system can unlock futuristic applications, you’ll want to catch this.\r\n\r\n**What You’ll Take Away**\r\n1. How to deploy and configure OpenAFS on Ubuntu for edge environments.\r\n2. Tricks to shave latency off file read/writes on low-power devices.\r\n3. How distributed file systems can simplify robotics and IoT data flows.\r\n4. Why you don’t always need a cloud pipeline to do serious real-time stuff.\r\n\r\n\r\n**Who This Talk Is For**\r\nIntermediate Linux nerds, robotics engineers, system builders, or anyone who’s ever had to move a ton of sensor data between edge devices and thought: “Why is this so painful?”\r\n\r\n**Prereqs**\r\nKnow your way around Ubuntu.\r\nBasic networking/file systems knowledge.\r\nIf you’ve touched a Raspberry Pi or messed with ROS, even better.\r\n\r\n**Speaker Bio**\r\nI’m **Utkarsh Maurya** - senior at NIT Hamirpur, ex-firmware dev at Cypherock, and currently a kernel dev at a stealth startup. I’ve built drone-based landslide rescue systems with custom GPR, done low-latency sensor networking on Raspberry Pi/Jetson/Coral boards.\r\n\r\nI also mess around with bare-metal 6502 computers, blockchain infra, and kernel internals for fun. Basically, I like taking weird open-source tech and pushing it way past what people think it’s for.",
    duration: "20 minutes",
    type: "Talk (30 mins+)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/838/",
    authors: [
      {
        name: "Utkarsh Maurya",
        affiliation: "National Institute of Technology"
      }
    ]
  },
  {
    id: "48",
    title: "Building reliable dev environments fast with LXD, LXD Image Builder and cloud-init",
    description: "In this talk, I’ll demonstrate how you can use LXD, LXD Image Builder, cloud-init, and LXD profiles to create reliable, consistent development environments, reducing setup time for your teams from 60 minutes to just 5 minutes.\r\n\r\nAs an example, I’ll be using Launchpad, a collection of web services that help software developers collaborate. If you’ve ever built or installed Ubuntu packages for different architectures, published to a PPA, or searched for or reported a bug in Ubuntu, chances are you’ve already worked with Launchpad even if you didn’t realize it.\r\n\r\nI’ll also share some of the challenges the Launchpad community faced when setting up development environments, and how combining LXD, LXD Image Builder, and cloud-init turned out to be the perfect solution to overcome them.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/836/",
    authors: [
      {
        name: "Tushar Gupta",
        affiliation: "Canonical"
      }
    ]
  },
  {
    id: "49",
    title: "Why Young India Needs To Rock Open Source, Now.",
    description: "India's developer ecosystem is one of the youngest and fastest-growing in the world, yet there's still a gap between brilliant blue-sky ideas and truly enterprise-grade, sustainable solutions. At the same time, vendor lock-in, rising cloud costs, and security concerns make it critical for India to take ownership of its digital future.\r\n\r\nMost young developers here already work with Ubuntu, making it one of the most popular Linux base images for containers. But what if there was a better way to go beyond just building apps, towards building secure, scalable solutions that stand the test of time?\r\n\r\nThis talk introduces **Rocks**—Ubuntu’s next-gen container images—and shows why they matter for India. We'll explore:\r\n\r\n1. How Rocks differ from familiar Docker images.\r\n\r\n2. How **Chisel** tooling reduces attack surfaces without compromising developer experience.\r\n\r\n3. How Rocks tie into the **broader Ubuntu ecosystem** (Juju, charms, orchestration) to unlock scalable, multi-cloud, vendor-neutral deployments—the very model already powering national projects like UIDAI’s microservices platform for Aadhar.\r\n\r\n4. A **demo** of an **India-relevant use case involving DPGs (Digital Public Goods)**, showing how simple it is to start “rocking” your containerized apps, and what implications this has on security, stability and lifecycle-management in the long run.\r\n\r\nBy the end, you’ll see how Rocks can be the foundation for India’s young innovators to build open source that’s not only developer-friendly, but also secure, sovereign, and enterprise-grade.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/831/",
    authors: [
      {
        name: "Soundarya Rangarajan",
        affiliation: "Canonical"
      }
    ]
  },
  {
    id: "54",
    title: "Intelligent Document Workflows: Bringing the power of Local AI on Ubuntu",
    description: "What if you could bring AI-assisted productivity into your daily document workflows **WITHOUT** sending your data to the cloud? In this workshop, we’ll roll up our sleeves and explore how to set up and use local AI models on Ubuntu for smarter, faster document handling.\r\n\r\nBy the end of the workshop, participants will have a working local AI environment on Ubuntu, along with examples they can adapt for their own organizations, projects, or day-to-day tasks.",
    duration: "1 hour",
    type: "Workshop (60 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/817/",
    authors: [
      {
        name: "Eeshaan Sawant",
        affiliation: "OnlyOffice"
      }
    ]
  },
  {
    id: "55",
    title: "HaNDS: A Habituation-Driven Neuromorphic Anomaly Detection System",
    description: "Anomaly detection is a critical task in modern AI systems, from healthcare monitoring to IoT sensor networks. However, traditional approaches, whether statistical methods or deep learning models, often require significant computational resources, labeled training data, and lack interpretability. This makes them unsuitable for deployment on resource-constrained edge devices, where real-time, energy-efficient, and adaptive detection is essential.\r\n\r\nWe present **HaNDS (Habituation-Driven Neuromorphic Anomaly Detection System)**, a biologically-inspired framework that mimics the habituation behavior of biological neurons to detect novel or surprising events in time-series data. Unlike traditional machine learning models, HaNDS does not require training data or complex optimization. Instead, it leverages adaptive thresholds and neuronal dynamics, decay, recovery, and novelty spiking, to identify anomalies in a lightweight, interpretable manner.\r\n\r\nHaNDS simulates habituating neurons where repeated exposure to the same stimulus weakens the response (habituation), while novel input triggers a spike (novelty detection). Each neuron is characterized by three parameters: **decay rate ($\\beta$)**, **recovery rate ($\\alpha$)**, and **novelty threshold ($\\theta$)**. By deploying multiple neurons with different sensitivities, HaNDS provides diverse novelty profiles, enabling adaptive detection across varying signal contexts.\r\n\r\nWe implemented HaNDS in C++ for maximum efficiency and benchmarked it on the ECG5000 dataset (5000 ECG sequences, 140 timesteps each). Our results demonstrate that HaNDS achieves competitive anomaly detection performance compared to classical methods (Z-score, MAD, Isolation Forest, One-Class SVM) while consuming significantly less energy. We also introduce entropy-based analysis to quantify the \"surprise level\" of novelty triggers and energy estimation to measure computational efficiency.\r\n\r\nHaNDS is designed for the full AI lifecycle, from prototyping on Ubuntu Desktop to deployment on Ubuntu Server for batch processing, and finally to Ubuntu Core for real-time edge inference on IoT devices like Raspberry Pi. Its lightweight, CPU-only design makes it ideal for resource-constrained environments, aligning perfectly with the growing demand for edge intelligence in smart homes, industrial IoT, and healthcare monitoring.\r\n\r\nWe envision extending HaNDS to multi-modal sensor data (audio, vibration, network traffic), exploring spiking neural network hardware compatibility, and integrating it into federated learning frameworks for privacy-preserving edge AI.\r\n\r\nThis work bridges neuroscience, edge computing, and open-source AI, offering a novel, efficient, and interpretable approach to anomaly detection for the Ubuntu community and beyond.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/840/",
    authors: [
      {
        name: "Sameer Guruprasad",
        affiliation: "Visvesvaraya Technological University"
      },
      {
        name: "Siddhartha Pundit",
        affiliation: "Visvesvaraya Technological University"
      }
    ]
  },
  {
    id: "56",
    title: "Embedded UAV Robotics in the Ubuntu Ecosystem: Robotic Arm Integration for Smart Delivery Applications",
    description: "### Abstract\r\n\r\nThe final frontier of logistics,last-mile delivery is ripe for disruption. This presentation introduces an advanced smart delivery UAV with an integrated robotic arm, a system built from the ground up on the foundational tools of the **Ubuntu ecosystem**. We demonstrate how Ubuntu provides the stability, security, and flexibility required for complex, real-world robotics applications.\r\n\r\nWe will explore the complete project lifecycle, showcasing why **Ubuntu** is the platform of choice for serious robotics development. From the long-term support of **Ubuntu 22.04 LTS** during the build phase to the transactional updates of **Ubuntu Core** in deployment, the system's architecture pivots on the deep integration between Ubuntu and the Robot Operating System (**ROS 2**). This session will detail the architecture, covering:\r\n- **An Ubuntu-Centric Integration:** How **Ubuntu** provides the stable and performant environment for **ROS 2** to seamlessly integrate the flight controller with the robotic arm's servos.\r\n- **Validated Mechanical Design:** A look into the engineering analysis, including Finite Element Analysis (FEA) on the carbon fiber frame and the numerical calculations that determined a stable 2:1 thrust-to-weight ratio.\r\n- **Mission Control on Ubuntu:** Using the popular Mission Planner software on an **Ubuntu-based ground station** to program complex, autonomous delivery sequences using MAVLink commands.\r\n- **Deployment with Ubuntu Core & Snaps:** Why **Ubuntu Core** is the ideal OS for reliable edge devices, using **Snaps** to containerize the drone's software for enhanced security and robust, over-the-air updates.\r\n\r\nAttendees will leave with a clear, practical understanding of why **Ubuntu** has become the cornerstone of the robotics industry. This talk is for developers, engineers, and hobbyists who want to leverage **Ubuntu, Ubuntu Core, and ROS 2** to build their own sophisticated autonomous systems.",
    duration: "5 minutes",
    type: "Lightning Talk (5 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/827/",
    authors: [
      {
        name: "Karthik M"
      }
    ]
  },
  {
    id: "57",
    title: "Data Center Virtualization 2025",
    description: "Virtualization is at the heart of today's data centers, and Ubuntu plays a key role in making it accessible and efficient. From KVM and QEMU to cloud platforms and containerization, Ubuntu provides the foundation for building flexible, scalable, and cost-effective virtualized environments. In this session, I will share experiences and practical use cases of deploying and managing virtualization on Ubuntu, focusing on how open-source tools can simplify operations, improve resource utilization, and empower developers and sysadmins alike.",
    duration: "20 minutes",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/832/",
    authors: [
      {
        name: "Saquib Akhtar",
        affiliation: "Linux SME & IDM L3 Lead @ NOKIA"
      }
    ]
  },
  {
    id: "60",
    title: "Promoting FLOSS through FOSSEE and Spoken Tutorial",
    description: "Digital Sovereignty has become a critical requirement in these days of tariffs and sanctions. Free/Libre and Open Source Software is a tool to achieve this freedom. FOSSEE and Spoken Tutorial were started at IIT Bombay by the Ministry of Education to promote FLOSS. This activity has resulted in training of ten million students and teachers over a period of 12 years. The training method developed by Spoken Tutorial has received an IEEE Standard. This is the only educational technology from India to receive an IEEE Standard.",
    duration: "1 hour",
    type: "Talk (20 mins)",
    indicoUrl: "https://events.canonical.com/event/136/contributions/812/",
    authors: [
      {
        name: "Kannan Mougalya",
        affiliation: "IIT Bombay"
      }
    ]
  }
];

function getImageUrl(id: string) {
  return `/assets/speakers/${id}`
}
