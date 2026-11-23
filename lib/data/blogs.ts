export interface BlogPost {
  id: string
  slug: string
  title: string
  category: string
  author: string
  publishDate: string
  excerpt: string
  metaDescription: string
  content: string[]
  /** Optional full Markdown body written from the admin app. */
  markdown?: string
  tags: string[]
  readTime: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "what-is-ai-based-cyber-learning",
    title: "What Is AI Based Cyber Learning? A Beginner's Guide",
    category: "AI Learning",
    author: "Cyber Jai",
    publishDate: "To be scheduled",
    excerpt:
      "AI-based cyber learning combines guided instruction, practical labs and intelligent tools to make cybersecurity practice more interactive.",
    metaDescription:
      "Learn what AI-based cyber learning means, how it supports cybersecurity training, and how students can use it responsibly.",
    readTime: "4 min read",
    tags: ["AI Learning", "Cybersecurity", "AI", "Cybersecurity Training", "SECUREWORLDZ"],
    content: [
      "Cybersecurity is a practical field. Reading about vulnerabilities is useful, but understanding them usually requires practice. AI-based cyber learning combines traditional cybersecurity education with artificial intelligence to make that practice more interactive and accessible.",
      "Instead of treating AI as a replacement for an instructor, learners can use it as a support layer. An AI assistant can explain a networking concept, break a large topic into smaller tasks, generate practice questions, or provide hints when a learner is stuck. The learner still performs the reasoning and practical work.",
      "In a cybersecurity lab, AI can help learners understand complex scenarios. A student might begin with a vulnerable web application, inspect its behaviour, identify an input that deserves testing, and ask an AI system to explain an unfamiliar error. This creates a learning loop: observe, investigate, test, understand and repeat.",
      "AI-based learning is especially useful when combined with hands-on environments. A browser-based lab, cloud security environment, security tools and vulnerable applications provide the practical environment, while AI can act as an additional explanation and guidance layer.",
      "There are limits. AI systems can produce incorrect or incomplete explanations. Security learners should verify commands, understand why a technique works, and use only authorised environments. Copying an AI-generated command without understanding it can create technical mistakes and security problems.",
      "For beginners, a good learning path is to start with networking, operating systems, Linux, web technologies and basic security concepts. After that, areas such as vulnerability assessment, web security, incident response and threat intelligence become easier to understand.",
      "AI-based cyber learning is therefore less about letting a machine do the learning and more about making learning responsive. Combined with structured courses, practical labs and responsible experimentation, AI can help learners practise more often, ask better questions and build confidence.",
    ],
  },
  {
    id: "2",
    slug: "how-to-choose-career-in-cyber-security",
    title: "How to Choose a Career in Cyber Security",
    category: "Cyber Careers",
    author: "Cyber Jai",
    publishDate: "To be scheduled",
    excerpt:
      "Cybersecurity has many career paths, so choosing one starts with understanding your interests, skills and preferred type of security work.",
    metaDescription:
      "Explore cybersecurity career paths and learn how to choose a direction based on your interests, skills and practical learning goals.",
    readTime: "5 min read",
    tags: ["Cyber Careers", "Cybersecurity Jobs", "Career", "Ethical Hacking", "Cybersecurity Training"],
    content: [
      "Cybersecurity is not one job. It is a broad field containing technical, analytical, defensive, offensive, governance and response-oriented roles. For a student beginning the journey, that variety can be confusing. The best starting point is to understand what different areas involve and then test those areas through practical learning.",
      "If you enjoy understanding how systems work, security testing and penetration testing may be interesting. If you prefer monitoring events and investigating alerts, a SOC or defensive-security path may fit your interests. Incident response focuses on security events, while digital forensics focuses on collecting and analysing evidence.",
      "Your foundation matters regardless of the path. Networking helps explain how systems communicate. Linux introduces command-line workflows and operating-system concepts. Web fundamentals make application security easier to understand. Basic programming helps when automation or source-code analysis becomes part of the work.",
      "Practical exposure is one of the most useful ways to choose. Try small projects or controlled labs. Perform a basic web-security exercise, analyse a log, inspect a sample application, or build a small security automation script. Notice which activities make you curious enough to keep investigating.",
      "Certifications can support a learning plan, but they should not replace hands-on ability. A portfolio can demonstrate practical work: lab write-ups, scripts, small tools, research notes or documented projects. Keep all testing inside systems you own or are explicitly authorised to assess.",
      "Cybersecurity careers also require communication. Security professionals often explain technical issues to developers, managers, clients or other teams. Clear reporting and careful documentation are valuable alongside technical skills.",
      "A career decision does not have to be permanent. Start with fundamentals, explore several practical domains, identify the type of problems you enjoy solving, and build deeper skills in that direction.",
    ],
  },
  {
    id: "3",
    slug: "cyber-security-job-opportunities",
    title: "Cyber Security Job Opportunities: Where the Roles Are",
    category: "Cyber Careers",
    author: "Cyber Jai",
    publishDate: "To be scheduled",
    excerpt:
      "Cybersecurity roles exist across testing, defence, monitoring, incident response, application security, cloud and security engineering.",
    metaDescription:
      "Understand major cybersecurity job areas, common responsibilities and practical skills that can support a cybersecurity career.",
    readTime: "5 min read",
    tags: ["Cybersecurity Jobs", "Cyber Careers", "SOC", "VAPT", "Security Engineering"],
    content: [
      "Cybersecurity work appears in many forms. Companies need people who can test applications, monitor environments, investigate incidents, secure cloud systems, assess risk and build security controls. This creates multiple entry points for students and professionals.",
      "Penetration testers and VAPT professionals assess systems for weaknesses within an authorised scope. Application-security roles help development teams identify and reduce weaknesses in software throughout its lifecycle.",
      "SOC analysts monitor security events and investigate suspicious activity. They may review alerts, examine logs, identify indicators and escalate incidents. Incident-response teams become involved when an organisation needs to understand, contain and recover from a security event.",
      "Security engineering is another broad area. Security engineers may build controls, automate repetitive tasks, integrate security technologies or improve infrastructure security. Cloud-security roles focus on identity, permissions, configurations, workloads and monitoring in cloud environments.",
      "Other paths include digital forensics, threat intelligence, malware analysis, governance and risk, security auditing and security awareness. Each path requires a different combination of technical knowledge, analysis and communication.",
      "For students, the practical starting point is often the same: networking, Linux, web technologies, operating systems and security fundamentals. Projects and labs can help reveal which role is most interesting. A portfolio can document the skills being developed.",
      "Job titles vary between companies, so reading actual responsibilities is important. Two organisations may use different titles for similar work, while the same title can cover different responsibilities.",
      "Build fundamentals, practise safely, document your work and keep learning.",
    ],
  },
  {
    id: "4",
    slug: "is-ai-dangerous-cyber-security",
    title: "Is AI Dangerous? What It Really Means for Cyber Security",
    category: "AI Security",
    author: "Cyber Jai",
    publishDate: "To be scheduled",
    excerpt:
      "AI can create new security risks while also helping defenders, making responsible use and security controls increasingly important.",
    metaDescription:
      "Understand how AI can create cybersecurity risks and how security teams can approach AI use responsibly.",
    readTime: "4 min read",
    tags: ["AI Security", "Artificial Intelligence", "Cybersecurity", "Prompt Injection", "AI Safety"],
    content: [
      "Questions about whether AI is dangerous often have a simple answer: the technology itself is not a single risk category. The security impact depends on how an AI system is designed, connected, configured and used.",
      "AI can help defenders analyse information, summarise alerts, generate detection ideas, assist with coding and automate repetitive tasks. At the same time, attackers can use AI-assisted workflows to scale social engineering, research and automation. The same general capability can have different outcomes depending on context.",
      "AI applications also introduce risks specific to how they process instructions and data. Prompt injection can manipulate an AI system through untrusted input. Tool-connected agents can create additional risk if permissions are too broad. Sensitive information can be exposed when data is sent to an AI service without appropriate controls.",
      "Security therefore needs to be designed around the complete system, not just the model. Developers should consider identity, permissions, input handling, output validation, logging, data protection and the tools available to an agent.",
      "For learners, understanding AI security means combining traditional cybersecurity with AI-specific concepts. Web security, authentication, access control and secure coding remain important. Prompt injection, agent tool abuse and AI supply-chain risks add another layer.",
      "Responsible use also matters. AI-generated code or commands should be reviewed before execution. Security testing should be performed only in authorised environments.",
      "The practical lesson is that AI introduces capabilities and risks. Good cybersecurity focuses on understanding those capabilities, limiting unnecessary access, validating outputs and continuously monitoring system behaviour.",
    ],
  },
  {
    id: "5",
    slug: "what-is-vibe-hacking",
    title: "What Is Vibe Hacking? AI, Prompting and New Risks",
    category: "AI Security",
    author: "Cyber Jai",
    publishDate: "To be scheduled",
    excerpt:
      "Vibe hacking describes an AI-assisted style of security experimentation where prompting becomes part of the workflow for exploring systems.",
    metaDescription:
      "Learn what vibe hacking can mean in AI-assisted security work and why permissions, verification and responsible testing matter.",
    readTime: "4 min read",
    tags: ["Vibe Hacking", "AI Security", "Prompting", "Cybersecurity", "AI"],
    content: [
      "The phrase “vibe hacking” is increasingly used around AI-assisted technical work. It can describe a workflow where a person uses natural-language prompts and AI tools to explore code, understand systems, generate ideas or assist with security testing.",
      "The important distinction is between assistance and understanding. An AI system can quickly produce code, commands or explanations, but the person using it remains responsible for checking what the output does.",
      "AI can make experimentation faster. A learner might describe a test objective, ask for a starting point, inspect the result and refine the request. For authorised security research, this can reduce repetitive work and make unfamiliar code easier to investigate.",
      "Prompting introduces risks. A prompt may expose sensitive information. AI-generated code may contain insecure assumptions. An AI agent connected to tools may take actions broader than intended. Prompt injection can also influence an AI system when it processes untrusted content.",
      "A safer approach is to keep the environment controlled. Use dedicated labs or systems where permission is explicit. Limit credentials and tool access. Review generated commands before running them. Record what was tested and why.",
      "Vibe hacking can also be a learning method. Students can use prompts for explanations, alternative approaches and debugging help while still doing the core analysis themselves.",
      "As AI becomes more integrated into development and security tools, understanding prompts, models, tools and permissions will become increasingly important.",
    ],
  },
  {
    id: "6",
    slug: "can-ai-break-out-of-sandbox",
    title: "Can AI Break Out of a Sandbox? A Simple Explainer",
    category: "AI Security",
    author: "Cyber Jai",
    publishDate: "To be scheduled",
    excerpt:
      "AI sandbox security depends on isolation, permissions and tool controls; weaknesses in those boundaries can create serious risks.",
    metaDescription:
      "A simple explanation of AI sandbox risks, isolation, tool permissions and security controls used to limit unintended actions.",
    readTime: "4 min read",
    tags: ["AI Security", "Sandbox Security", "AI Agents", "Isolation", "Cybersecurity"],
    content: [
      "A sandbox is designed to create a controlled environment where software can operate without unrestricted access to the surrounding system. In AI applications, sandboxes may limit what an AI agent can execute, read or change.",
      "The important idea is that a sandbox is a boundary. If the boundary is weak, incorrectly configured or connected to overly powerful tools, an AI system may gain capabilities beyond what the designer intended.",
      "This does not mean every AI system can simply escape a sandbox. It means isolation must be treated as a security control that requires careful design and testing.",
      "AI agents create additional complexity because they can interact with tools. A model might call a browser, execute code, read files, query a database or invoke an API. Each capability increases the importance of permissions and isolation.",
      "Strong sandboxing should be combined with least-privilege access. The agent should receive only the tools and permissions needed for the task.",
      "Sensitive files and credentials should be separated. Network access should be restricted where appropriate. Logs should capture important actions.",
      "Security teams can use controlled environments to examine how an AI application responds to malicious instructions, unexpected data and unusual tool requests.",
      "For learners, this connects AI security with familiar cybersecurity principles: isolation, access control, input validation, monitoring and secure configuration.",
      "The better security question is: What can the AI access, what controls the boundary, and what happens if one control fails? Multiple layers of protection reduce the impact of an individual weakness.",
    ],
  },
  {
    id: "7",
    slug: "avoid-ai-slop-vibe-coding",
    title: "How to Avoid AI Slop While Vibe Coding",
    category: "Vibe Coding",
    author: "Cyber Jai",
    publishDate: "To be scheduled",
    excerpt:
      "AI can speed up coding, but reviewing, testing and understanding generated code are essential for avoiding low-quality or insecure results.",
    metaDescription:
      "Learn practical ways to avoid AI slop while vibe coding by reviewing, testing and understanding AI-generated software.",
    readTime: "4 min read",
    tags: ["Vibe Coding", "AI Coding", "Software Development", "Secure Coding", "AI"],
    content: [
      "Vibe coding can make software development feel faster because an AI assistant can generate large amounts of code from natural-language instructions. The problem appears when speed becomes more important than understanding.",
      "AI-generated code can look convincing while still containing bugs, unnecessary complexity or security weaknesses.",
      "Start with a clear specification. Explain what the application should do, what inputs it accepts and what constraints matter. Smaller requests are easier to review than one huge prompt that asks an AI system to build an entire application without structure.",
      "Review generated code before accepting it. Look for duplicated logic, hard-coded secrets, unsafe input handling, excessive permissions and unnecessary dependencies.",
      "In web applications, pay particular attention to authentication, authorisation, input validation, output encoding and data handling.",
      "Testing should be part of the workflow. Run unit tests, integration tests and relevant security checks. Try invalid inputs instead of testing only the happy path.",
      "Another useful habit is incremental development. Build one feature, test it, understand it and then continue.",
      "AI should be treated as a coding assistant rather than an unquestioned authority.",
      "Vibe coding becomes more useful when combined with engineering discipline.",
      "The goal is not to avoid AI-generated code. The goal is to avoid accepting code simply because it was generated quickly.",
    ],
  },
  {
    id: "8",
    slug: "how-to-use-ai-productively",
    title: "How to Use AI Productively Every Day",
    category: "AI Productivity",
    author: "Cyber Jai",
    publishDate: "To be scheduled",
    excerpt:
      "AI can support everyday research, writing, planning and learning when tasks are clearly defined and outputs are reviewed.",
    metaDescription:
      "Learn practical ways to use AI for research, writing, planning and learning while keeping human review in the workflow.",
    readTime: "4 min read",
    tags: ["AI Productivity", "Artificial Intelligence", "Productivity", "AI Tools", "Learning"],
    content: [
      "AI can be useful for many everyday tasks, but productivity does not come from asking an AI system to do everything. It comes from giving it well-defined work and using the result intelligently.",
      "For writing, AI can help organise ideas, create an outline, simplify a paragraph or suggest alternative wording. The person remains responsible for facts, tone and the final message.",
      "For research, AI can help identify questions to investigate, but important claims should be checked against reliable sources.",
      "AI can also support learning. A student can ask for a concept to be explained at different difficulty levels, request practice questions or use an AI assistant as a study partner.",
      "Planning is another practical use. AI can turn a large goal into smaller tasks, create a checklist or help organise a project.",
      "Security and privacy should remain part of everyday AI use. Avoid entering confidential credentials, private customer information or sensitive company material into services unless that use is approved.",
      "The quality of an AI result depends heavily on the quality of the request. Include: Objective, Context, Desired format, and Constraints.",
      "The most productive AI workflow is collaborative. Let AI help with structure, brainstorming, transformation and repetitive work, while humans provide judgement, verification, context and final decisions.",
    ],
  },
  {
    id: "9",
    slug: "about-secureworldz",
    title: "About SECUREWORLDZ: Cyber Security Training and Tools",
    category: "Corporate Training",
    author: "Cyber Jai",
    publishDate: "To be scheduled",
    excerpt:
      "SECUREWORLDZ is a cybersecurity training institute and software company focused on practical learning, tools, labs and security services.",
    metaDescription:
      "Learn about SECUREWORLDZ, its cybersecurity training, software tools, labs, services, workshops and DRAGOZ community.",
    readTime: "5 min read",
    tags: ["SECUREWORLDZ", "Cybersecurity Training", "Cybersecurity Tools", "Corporate Training", "DRAGOZ"],
    content: [
      "SECUREWORLDZ started in July 2024 as a cybersecurity training institute and software company.",
      "The company focuses on practical cybersecurity learning while also building security tools and providing technology services.",
      "The training side supports students, working professionals and corporate teams. Its learning scope includes cybersecurity as well as AI and web development.",
      "SECUREWORLDZ also provides cybersecurity and web-related services, including: Penetration Testing; SOC Monitoring; Incident Response; Web Testing; Web Securing; Web Monitoring; Web Development; UI/UX Design; SEO Optimisation; AI Solutions; Automation Tools; Chatbots.",
      "Practical learning is supported through tools and labs.",
      "The company's tool ecosystem includes: Exploitry; BugAtlas; Versage; Machinex; Kernelis; Infectis; DarkX.",
      "SECUREWORLDZ also provides an AI security training lab containing hands-on scenarios based around the supplied OWASP 2026 Agentic AI risk categories.",
      "Community is another part of the SECUREWORLDZ model. DRAGOZ is a dedicated community with 300+ members, according to the supplied company information.",
      "The community supports interaction, learning and networking, including intern interaction sessions through Discord. A DRAGOZ Community Meetup 2026 was held at Prathyusha Engineering College in Tiruvallur on 3 September 2026.",
      "SECUREWORLDZ also participates in events and partnerships. The supplied company information states that it has sponsored or partnered with 100+ events, including national-level events.",
      "The company has also trained 5,000+ students through community events.",
      "The company combines training, software, tools, labs, services, workshops and community activity under one brand.",
    ],
  },
]

export const BLOG_CATEGORIES = [
  "All",
  "AI Learning",
  "Cyber Careers",
  "AI Security",
  "Vibe Coding",
  "AI Productivity",
  "Corporate Training",
]
