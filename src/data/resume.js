export const PROFILE = {
  name: "Andrian-Maksym Balaichuk",
  shortName: "Andrian Balaichuk",
  role: "Senior C++ Software Engineer",
  location: "Bratislava, Slovakia",
  email: "adiukraine211@gmail.com",
  phone: "+421 908 433 795",
  github: "github.com/andrian-maksym-balaichuk-dev",
  githubUrl: "https://github.com/andrian-maksym-balaichuk-dev",
  linkedin: "linkedin.com/in/andrian-maksym-balaichuk",
  linkedinUrl: "https://www.linkedin.com/in/andrian-maksym-balaichuk/",
  website: "",
  yearsExp: 4,
  available: "Open to senior C++ roles",
  headline: "High-performance C++ engineer building production-grade backend systems.",
  summary:
    "Senior C++ engineer focused on high-performance backend systems — modern C++20/23, concurrency, algorithms, and clean architecture. I design APIs, build the routing engines and SDKs production runs on, and treat performance like a first-class feature.",
  hero_chips: [
    "C++20 / 23",
    "Concurrency",
    "Algorithms",
    "Backend APIs",
    "Linux",
    "Kubernetes",
  ],
};

export const EXPERIENCE = [
  {
    company: "Sygic / Eurowag",
    location: "Bratislava, Slovakia",
    blurb:
      "Global navigation software company. I work on the core C++ navigation and routing engine, the public SDK that ships into partner apps and embedded integrations, and the backend services around them.",
    positions: [
      {
        role: "Middle / Senior C++ Software Engineer",
        period: "07/2025 — Present",
        current: true,
        bullets: [
          "Own components of the routing engine end-to-end — graph data structures, traversal algorithms, route reconstruction, serialization paths.",
          "Develop and maintain the Sygic C++ SDK consumed by external mobile applications and embedded integrations — stable public API, careful binary contract.",
          "Design routing-related backend services with a focus on clean contracts, multi-threaded execution, and predictable production behaviour.",
          "Build map-processing algorithms and data pipelines feeding the navigation stack.",
        ],
        stack: ["C++20 / 23", "Routing engine", "Public SDK", "Backend services", "Linux", "Boost"],
      },
    ],
  },
  {
    company: "BSH Drives and Pumps",
    location: "Košice, Slovakia",
    blurb:
      "Subsidiary of BSH Bosch und Siemens Hausgeräte — embedded C++ for one of the world's largest home-appliance manufacturers. Worked across BSP / HAL, appliance UX/UI, and internal C++ tooling. Promoted from Junior to Middle over three years.",
    positions: [
      {
        role: "Middle C++ Software Developer",
        period: "06/2024 — 07/2025",
        bullets: [
          "Owned critical embedded C++ components end-to-end — design, implementation, performance, and long-term maintainability.",
          "Built a custom BSP / HAL package manager on top of Conan to set up and pack hardware-support modules cleanly into downstream projects.",
          "Contributed to appliance UX / UI for kitchen devices — coffee machines, fridges — running on constrained hardware.",
          "Mentored junior developers, drove code-review standards, and resolved production-grade bugs across assigned modules.",
        ],
        stack: ["C++17", "Embedded", "BSP / HAL", "Conan", "CMake", "Google Test"],
      },
      {
        role: "Junior C++ Software Developer",
        period: "06/2022 — 06/2024",
        bullets: [
          "Implemented embedded C++ features in production firmware under mentorship — following engineering best practices and BSH internal standards.",
          "Diagnosed and fixed bugs across assigned modules; contributed to module maintenance and platform stability.",
          "Built strong foundations in modern C++, OOP, and embedded software engineering on real product code.",
        ],
        stack: ["C++14 / 17", "Embedded", "Drivers", "Git", "Scrum"],
      },
    ],
  },
];

export const SKILLS = [
  {
    group: "Modern C++",
    items: [
      { name: "C++20 / 23", level: 92 },
      { name: "Template metaprogramming", level: 86 },
      { name: "Concurrency (atomics, async)", level: 84 },
      { name: "Memory & lifetime mgmt", level: 90 },
      { name: "STL · Boost (Asio, Spirit)", level: 88 },
    ],
  },
  {
    group: "Backend & Systems",
    items: [
      { name: "RESTful service design", level: 86 },
      { name: "Algorithms & data structures", level: 88 },
      { name: "Software architecture", level: 82 },
      { name: "Multi-threaded services", level: 85 },
      { name: "Performance optimisation", level: 86 },
    ],
  },
  {
    group: "Infra & DevOps",
    items: [
      { name: "Linux", level: 86 },
      { name: "Kubernetes · Helm", level: 76 },
      { name: "Azure", level: 72 },
      { name: "CI/CD pipelines", level: 80 },
      { name: "CMake · Makefile", level: 88 },
    ],
  },
  {
    group: "Tooling & Practice",
    items: [
      { name: "Git (advanced workflows)", level: 92 },
      { name: "Google Test · profiling", level: 84 },
      { name: "Python · SQL", level: 76 },
      { name: "Jira · Bitbucket · Scrum", level: 88 },
      { name: "Code review & mentorship", level: 84 },
    ],
  },
];

export const PROJECTS = [
  {
    name: "Sygic — Routing & Navigation Engine",
    url: null,
    tagline: "Core C++ components powering production GPS routing.",
    description:
      "Work on the routing and navigation engine that runs inside Sygic / Eurowag products — optimised graph traversal, route reconstruction, serialization, and the performance plumbing around it. Production budgets measured in milliseconds; correctness measured in detours.",
    tags: ["C++20", "Algorithms", "Routing", "Perf"],
    metric: { value: "engine", label: "production navigation" },
  },
  {
    name: "Sygic SDK",
    url: null,
    tagline: "Public C++ SDK shipped into apps and embedded integrations.",
    description:
      "Develop and maintain the SDK consumed by external mobile applications and embedded platforms. Stable public API, careful binary contract, and a lot of attention to what gets exposed and what stays private.",
    tags: ["C++20", "SDK", "API design", "Embedded"],
    metric: { value: "SDK", label: "partner-facing" },
  },
  {
    name: "Sygic — Routing Backend APIs",
    url: null,
    tagline: "Backend services around the routing engine.",
    description:
      "Design and maintain routing-related backend APIs — clean contracts, multi-threaded service code, careful error semantics, and the boring reliability that lets the rest of the platform sleep at night.",
    tags: ["C++", "REST", "Backend", "Concurrency"],
    metric: { value: "APIs", label: "service contracts" },
  },
  {
    name: "Sygic — Map Data Pipelines",
    url: null,
    tagline: "Algorithms and pipelines for map processing at scale.",
    description:
      "Build map-processing algorithms and data pipelines feeding the navigation stack — turning raw geographic data into the indexed structures the routing engine consumes.",
    tags: ["C++", "Data pipelines", "Algorithms"],
    metric: { value: "GBs", label: "map data / build" },
  },
  {
    name: "BSH — BSP / HAL layer",
    url: null,
    tagline: "C++ wrapper around base hardware calls for appliance platforms.",
    description:
      "Designed and maintained a Board Support Package layer for BSH appliance platforms — clean C++ abstractions over low-level chip APIs (GPIO, I²C/SPI, timers, NV storage). Stable boundary that lets the product code stay portable across SoC revisions.",
    tags: ["C++17", "BSP / HAL", "Embedded", "Drivers"],
    metric: { value: "HAL", label: "hw abstraction" },
  },
  {
    name: "BSH — Appliance UX / UI",
    url: null,
    tagline: "C++ UI for kitchen devices — coffee machines, fridges, ovens.",
    description:
      "Built UX/UI components for BSH kitchen appliance screens. Responsive layouts on constrained hardware, careful input/state machines, and the kind of polish customers don't notice — which is the point.",
    tags: ["C++", "Embedded UI", "State machines"],
    metric: { value: "kitchen", label: "appliance screens" },
  },
  {
    name: "BSH — Package Manager",
    url: null,
    tagline: "Conan-based mechanism to set up and pack BSP modules end-to-end.",
    description:
      "Built on top of Conan: a thin custom layer that handles the BSP-specific setup, packaging, and project bootstrap that vanilla Conan didn't cover cleanly. Versioned hardware-support bundles ship into downstream project trees with a single command — no more manual copy-paste between teams.",
    tags: ["C++", "Conan", "Packaging", "CMake"],
    metric: { value: "pkg", label: "BSP bundles" },
  },
  {
    name: "function_wrapper",
    url: "https://github.com/andrian-maksym-balaichuk-dev/function_wrapper",
    tagline: "Header-only C++ library for type-erased callables with multiple declared signatures.",
    description:
      "Multi-signature dispatch, deterministic ranking policy, strict noexcept binding, SBO, copyable and move-only ownership, plus a non-owning function_ref. C++17 runtime floor with extra constexpr support in C++20+. CMake package and Conan recipe.",
    tags: ["C++17 / 20", "Header-only", "CMake", "Conan"],
    metric: { value: "fw", label: "header-only lib" },
  },
  {
    name: "string_math",
    url: "https://github.com/andrian-maksym-balaichuk-dev/string_math",
    tagline: "Experimental C++ library — currently in active development.",
    description:
      "Personal C++ project at the string / math intersection. CMake-driven, tested, and structured for fast iteration.",
    tags: ["C++", "CMake", "WIP"],
    metric: { value: "WIP", label: "active dev" },
  },
];

export const EDUCATION = [
  {
    school: "Slovak University of Technology",
    degree: "Master's, Computer Science",
    period: "Sep 2025 — Jun 2027",
    note: "Bratislava, Slovakia. Advanced computer science — software architecture, algorithms, and systems-level topics.",
  },
  {
    school: "Technical University of Košice",
    degree: "Bachelor's, Computer Science",
    period: "Sep 2022 — May 2025",
    note: "Košice, Slovakia. Computer science fundamentals: algorithms and data structures, OOP, operating systems, databases, networking. Coursework across C, C++, Java, Python, and C#.",
  },
  {
    school: "Ivano-Frankivsk Nat. Technical University of Oil & Gas",
    degree: "Junior Specialist, Computer Software Engineering",
    period: "Sep 2019 — May 2023",
    note: "Ivano-Frankivsk, Ukraine. Software engineering foundations: programming, OOP, software design, and core CS fundamentals.",
  },
];

export const ACHIEVEMENTS = [
  { icon: "Cpu",           title: "Modern C++ specialist",     note: "Production C++11 → 23 in real codebases. Templates, Concepts, atomics — used in anger, not just on slides." },
  { icon: "Compass",       title: "Sygic SDK & routing engine", note: "Contributing to the core routing engine and the public SDK that ships into partner apps and embedded platforms." },
  { icon: "Package",       title: "Open-source author",        note: "function_wrapper, asm_studio, string_math — header-only and full C++ projects, on GitHub under my handle." },
  { icon: "Users",         title: "Mentor to juniors",         note: "Supported junior developers at BSH — code reviews, pairing, and lifting the floor on engineering practice." },
  { icon: "Layers",        title: "Argon team contributor",    note: "Part of Argon (argonteam.org) — small Slovakia-based team shipping tools like Seedfast CLI." },
  { icon: "GraduationCap", title: "Studying while shipping",   note: "Full-time engineering alongside an informatics degree — four years, no gaps in either." },
];

export const TOP_CERTS = [
  { name: "C++ 20 Mastery — Pure and Unfiltered",             issuer: "Packt"    },
  { name: "Structural Design Patterns in Modern C++",          issuer: "Packt"    },
  { name: "Modern C++: Advanced Techniques & Features",        issuer: "LinkedIn" },
  { name: "C++ Best Practices for Developers",                 issuer: "LinkedIn" },
  { name: "C++ Standard Template Library",                     issuer: "LinkedIn" },
  { name: "Web Servers and APIs using C++",                    issuer: "LinkedIn" },
];

export const CERTIFICATIONS = [
  { name: "C++ 20 Mastery — Pure and Unfiltered",                          issuer: "Packt"        },
  { name: "Structural Design Patterns in Modern C++",                       issuer: "Packt"        },
  { name: "Modern C++: Advanced Techniques & Features",                    issuer: "LinkedIn"     },
  { name: "Mastering C++: Exception Handling",                              issuer: "LinkedIn"     },
  { name: "C++ Development: Advanced Concepts, Lambdas, Best Practices",   issuer: "LinkedIn"     },
  { name: "C++ Best Practices for Developers",                              issuer: "LinkedIn"     },
  { name: "C++ Design Patterns: Creational",                                issuer: "LinkedIn"     },
  { name: "C++ Standard Template Library",                                  issuer: "LinkedIn"     },
  { name: "C++ Essential Training",                                         issuer: "LinkedIn"     },
  { name: "Object-Oriented Programming with C++",                           issuer: "LinkedIn"     },
  { name: "Web Servers and APIs using C++",                                 issuer: "LinkedIn"     },
  { name: "Code Clinic: C++",                                               issuer: "LinkedIn"     },
  { name: "Complete Guide to C++ Programming Foundations",                  issuer: "LinkedIn"     },
  { name: "Level Up: C++",                                                  issuer: "LinkedIn"     },
  { name: "Learning C++",                                                   issuer: "LinkedIn"     },
  { name: "Programming in C++: A Hands-on Introduction",                    issuer: "Codio"        },
  { name: "C++ Object Basics: Functions, Recursion & Objects",              issuer: "Codio"        },
  { name: "C++ Basic Structures: Vectors, Pointers, Strings",               issuer: "Codio"        },
  { name: "C++ Basics: Selection and Iteration",                            issuer: "Codio"        },
  { name: "Object-Oriented C++: Inheritance & Encapsulation",               issuer: "Codio"        },
  { name: "C for Everyone: Programming Fundamentals",                       issuer: "UC Santa Cruz"},
  { name: "C Programming Basics: Flow Control, Variables & Pointers",      issuer: "LinkedIn"     },
  { name: "Eurowag Expert",                                                 issuer: "EUROWAG"      },
  { name: "Career Essentials in Software Development",                      issuer: "Microsoft"    },
  { name: "Career Essentials in GitHub — Professional Certificate",         issuer: "GitHub"       },
  { name: "Practical GitHub Project Management & Collaboration",            issuer: "LinkedIn"     },
  { name: "Practical GitHub Actions",                                       issuer: "LinkedIn"     },
  { name: "Practical GitHub Copilot",                                       issuer: "LinkedIn"     },
  { name: "Practical GitHub Code Search",                                   issuer: "LinkedIn"     },
  { name: "CCNA: Introduction to Networks",                                 issuer: "Cisco"        },
  { name: "Introduction to Cybersecurity",                                  issuer: "Cisco"        },
  { name: "Programming Foundations: Fundamentals",                          issuer: "LinkedIn"     },
  { name: "Programming Foundations: Beyond the Fundamentals",               issuer: "LinkedIn"     },
  { name: "Introduction to Career Skills in Software Development",          issuer: "LinkedIn"     },
];

export const CPP_PILLARS = [
  {
    icon: "Cpu",
    title: "Advanced modern C++",
    body: "Expert-level C++11 → 23 across production codebases. Template metaprogramming with SFINAE, specialisation, and C++20 Concepts. Strong command of object lifetime, RAII, move semantics, and the performance side of memory layout.",
    bullets: ["Templates · Concepts · SFINAE", "RAII · move semantics", "Allocator-aware design"],
  },
  {
    icon: "Activity",
    title: "Concurrency & performance",
    body: "Multi-threaded C++ in anger — mutexes, atomics, lock-free patterns, async workflows. Profile-driven optimisation: I measure before I refactor, and I treat tail latency as a first-class concern.",
    bullets: ["Atomics · lock-free patterns", "Async / std::async / coroutines", "Profile-driven optimisation"],
  },
  {
    icon: "GitMerge",
    title: "Algorithms & data structures",
    body: "Solid algorithmic foundation: graphs, hash structures, trees, sorting, searching, complexity analysis. Designed optimised solutions for real workloads in routing, navigation, and map processing.",
    bullets: ["Graphs · hash tables · trees", "Sorting · searching · traversal", "Complexity-driven design"],
  },
  {
    icon: "Layers",
    title: "Software architecture & design",
    body: "Modular systems built on classic design patterns (Factory, Strategy, Observer, Singleton) used where they actually pay off. Advanced OOP — polymorphism, interfaces, static and dynamic dispatch. Led code reviews and clean-code standards across teams.",
    bullets: ["GoF patterns used judiciously", "Interface-first design", "Code-review craft"],
  },
  {
    icon: "Network",
    title: "Backend development in C++",
    body: "Designed and shipped RESTful backend services in C++ — business logic, data processing, system integration. Multi-threaded service code with attention to performance, reliability, and scalable architecture.",
    bullets: ["RESTful service design", "Multi-threaded server code", "Stable API contracts"],
  },
  {
    icon: "Wrench",
    title: "Tooling & engineering practice",
    body: "Production-grade tooling on top of the C++. Advanced Git workflows, CMake / Makefile, CI/CD pipelines, Google Test, plus profiling and debugging in real production systems.",
    bullets: ["Git · CMake · CI/CD", "Google Test · sanitizers", "Profiling · debugging"],
  },
  {
    icon: "Boxes",
    title: "Libraries & frameworks",
    body: "Extensive STL (containers, algorithms, ranges) and Boost — Filesystem, Asio, Spirit, Date_Time — used for networking, parsing, and async I/O in high-performance concurrent applications.",
    bullets: ["STL · ranges", "Boost.Asio · Spirit · Filesystem", "Concurrent applications"],
  },
  {
    icon: "ShieldCheck",
    title: "Production engineering",
    body: "I care about the half-second nobody else is measuring. Static analysis in CI, sanitizers in tests, latency budgets in design docs, and an unflashy preference for code that survives Monday morning.",
    bullets: ["Static analysis in CI", "Sanitizer-clean builds", "Latency budgets"],
  },
];
