export interface SocialLink {
  label: string
  href: string
}

export interface BlogPostSection {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface BlogPost {
  slug: string
  date: string
  readTime: string
  category: string
  title: string
  excerpt: string
  intro: string
  sections: BlogPostSection[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  highlights: string[]
}

export interface CertItem {
  label: string
  labelSub: string
  href: string
  image: string
  imageAlt: string
}

export interface ProjectCard {
  title: string
  description: string
  dateLabel: string
  dateTime: string
  image: string
  imageAlt: string
  href: string
}

export interface SkillItem {
  name: string
  icon: string
  alt: string
}

export const CONTENT = {
  site: {
    title: 'Amar Mohite - Software Engineer',
    description: 'Software Engineer specializing in Cloud, AI & Agentic Systems',
  },
  brand: {
    name: 'Amar Mohite',
  },
  navigation: [
    { label: 'Home.', href: '/#home' },
    { label: 'About.', href: '/#about' },
    { label: 'Skills.', href: '/#skills' },
    { label: 'Certifications', href: '/#certifications' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Resume.', href: '/resume/' },
    { label: 'Contact.', href: '/#contact' },
  ],
  hero: {
    title: 'Software Engineer · Cloud · AI & Agentic Systems',
    ctaLabel: 'Get in touch',
    ctaHref: '/#contact',
    scrollLabel: 'Scroll',
    bannerLg: '/images/hero-banner.PNG',
    bannerMd: '/images/hero-banner-md.png',
    bannerSm: '/images/hero-banner-sm.PNG',
    bannerAlt: 'A man in a blue shirt with a happy expression',
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amarmohite2001' },
      { label: 'GitHub', href: 'https://github.com/amarmohite2001' },
    ] satisfies SocialLink[],
  },
  stats: [
    { value: '3+', description: 'Years of Experience', href: '/#about' },
    { value: '4', description: 'AWS Certifications', href: '/#certifications' },
    { value: '3', description: 'Hackathon Wins', href: '/#about' },
  ],
  about: {
    subtitle: 'About me',
    title: 'Full Stack Engineer — Cloud, AI & Agentic Systems',
    text: 'Software engineer with 3+ years designing and shipping production-grade systems across the full stack — from cloud infrastructure and agentic AI pipelines to responsive frontends. I work across the entire delivery lifecycle: architecting scalable AWS environments, building LLM-powered backends, and shipping clean, data-driven UIs. Currently at University of Phoenix, where I own end-to-end delivery of AI-driven advisor tools that cut research time by 80%.',
    bannerSrc: '/images/about-banner.png',
    bannerAlt: 'A man in a alice blue shirt with a thinking expression',
    primaryButton: { label: 'Hire me', href: '/#contact' },
    secondaryButton: {
      label: 'Download CV',
      href: '/Resume/Amar Gajanan_Mohite_Resume.pdf',
    },
  },
  skills: {
    subtitle: 'My skills',
    title: 'Technologies & Tools I Work With',
    text: 'From cloud infrastructure and AI/LLM systems to full-stack web development — I build reliable, scalable, production-ready solutions.',
    tabLabels: ['AI & LLM', 'Languages & Frameworks', 'Cloud & Tools'],
    ai: [
      { name: 'LangChain', icon: '/images/LangChain_Logo.svg.png', alt: 'LangChain logo' },
      { name: 'LangGraph', icon: '/images/langgraph.svg', alt: 'LangGraph logo' },
      { name: 'LangSmith', icon: '/images/langsmith.png', alt: 'LangSmith logo' },
      { name: 'Qdrant', icon: '/images/qdrant.png', alt: 'Qdrant logo' },
      { name: 'AWS Bedrock', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg', alt: 'AWS Bedrock logo' },
      { name: 'OpenAI', icon: 'https://avatars.githubusercontent.com/u/14957082?s=100', alt: 'OpenAI logo' },
      { name: 'Hugging Face', icon: 'https://avatars.githubusercontent.com/u/25720743?s=100', alt: 'Hugging Face logo' },
      { name: 'RAG', icon: 'https://avatars.githubusercontent.com/u/130722662?s=100', alt: 'RAG / LlamaIndex logo' },
      { name: 'Anthropic', icon: 'https://avatars.githubusercontent.com/u/76263028?s=100', alt: 'Anthropic logo' },
    ] satisfies SkillItem[],
    languages: [
      { name: 'Python', icon: 'https://www.vectorlogo.zone/logos/python/python-icon.svg', alt: 'Python logo' },
      { name: 'JavaScript', icon: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg', alt: 'JavaScript logo' },
      { name: 'TypeScript', icon: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg', alt: 'TypeScript logo' },
      { name: 'Java', icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg', alt: 'Java logo' },
      { name: 'Go', icon: 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg', alt: 'Go logo' },
      { name: 'C#', icon: '/images/Logo_C_sharp.svg.png', alt: 'C# logo' },
      { name: 'HTML5', icon: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg', alt: 'HTML5 logo' },
      { name: 'CSS3', icon: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg', alt: 'CSS3 logo' },
      { name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', alt: 'React logo' },
      { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg', alt: 'Next.js logo' },
      { name: 'Angular', icon: '/images/angular.png', alt: 'Angular logo' },
      { name: 'FastAPI', icon: 'https://www.vectorlogo.zone/logos/fastapi/fastapi-icon.svg', alt: 'FastAPI logo' },
      { name: 'Spring Boot', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg', alt: 'Spring Boot logo' },
      { name: 'Django', icon: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg', alt: 'Django logo' },
      { name: 'ASP.NET', icon: 'https://www.vectorlogo.zone/logos/dotnet/dotnet-icon.svg', alt: 'ASP.NET logo' },
      { name: 'Node.js', icon: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg', alt: 'Node.js logo' },
    ] satisfies SkillItem[],
    tools: [
      { name: 'AWS', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg', alt: 'AWS logo' },
      { name: 'Docker', icon: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg', alt: 'Docker logo' },
      { name: 'Kubernetes', icon: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg', alt: 'Kubernetes logo' },
      { name: 'Terraform', icon: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg', alt: 'Terraform logo' },
      { name: 'Google Cloud', icon: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg', alt: 'Google Cloud logo' },
      { name: 'Azure', icon: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg', alt: 'Azure logo' },
      { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', alt: 'Git logo' },
      { name: 'Apache Kafka', icon: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg', alt: 'Apache Kafka logo' },
      { name: 'PostgreSQL', icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg', alt: 'PostgreSQL logo' },
      { name: 'MongoDB', icon: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg', alt: 'MongoDB logo' },
      { name: 'Redis', icon: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg', alt: 'Redis logo' },
      { name: 'MySQL', icon: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg', alt: 'MySQL logo' },
      { name: 'Helm', icon: 'https://www.vectorlogo.zone/logos/helmsh/helmsh-icon.svg', alt: 'Helm logo' },
      { name: 'Jira', icon: 'https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg', alt: 'Jira logo' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', alt: 'Postman logo' },
      { name: 'TensorFlow', icon: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg', alt: 'TensorFlow logo' },
    ] satisfies SkillItem[],
  },
  certifications: {
    subtitle: 'Credentials',
    title: 'AWS Certifications',
    items: [
      {
        label: 'Solutions Architect',
        labelSub: 'Associate',
        href: 'https://www.credly.com/badges/95a4e0dd-3f8f-4e4e-b01d-dded44b187f8/public_url',
        image: '/images/awsSolutionArchitect.png',
        imageAlt: 'AWS Certified Solutions Architect – Associate badge',
      },
      {
        label: 'Cloud Practitioner',
        labelSub: 'Foundational',
        href: 'https://www.credly.com/badges/04f5cccf-1cc2-444e-9c9f-fe9c49657c53/public_url',
        image: '/images/awsCloudPractitioner.png',
        imageAlt: 'AWS Certified Cloud Practitioner badge',
      },
      {
        label: 'Developer',
        labelSub: 'Associate',
        href: 'https://www.credly.com/badges/7ddbae52-1c05-401c-bc57-cc0a177d5dea/public_url',
        image: '/images/awsDeveloperAssociate.png',
        imageAlt: 'AWS Certified Developer – Associate badge',
      },
      {
        label: 'AI Practitioner',
        labelSub: 'Foundational',
        href: 'https://www.credly.com/badges/b41a1b7c-8182-4e31-a27e-425d0e171543/public_url',
        image: '/images/AWSaiPractitioner.png',
        imageAlt: 'AWS Certified AI Practitioner badge',
      },
    ] satisfies CertItem[],
  },
  experience: {
    subtitle: 'Experience',
    title: 'Professional Journey',
    text: 'Built production systems across AI, cloud, and full stack engineering with measurable business impact.',
    items: [
      {
        role: 'Software Engineer 2',
        company: 'University of Phoenix',
        period: 'May 2024 - Present',
        highlights: [
          'Sole-delivered Student Academic Dashboard consolidating 6+ data sources and reducing advisor research time by 80%.',
          'Designed and owned Knowledge Base RAG Chatbot architecture on AWS with LangGraph and hybrid retrieval, achieving 97% retrieval accuracy and reducing search time by 50%.',
          'Provisioned Terraform-managed multi-account infrastructure with ECS Fargate, ALB, IAM, Aurora, and Blue/Green CI/CD with zero-downtime release flow.',
          'Built Agentic Orchestration Engine and Salesforce Notes Summarizer processing 1M+ monthly comments with 99% accuracy and strong PII guardrails.',
          'Migrated 20+ event streams to Amazon MSK and orchestrated Lambda microservices with Step Functions to improve reliability and scalability.',
        ],
      },
      {
        role: 'Project Coordinator',
        company: 'Arizona State University',
        period: 'Feb 2023 - Apr 2024',
        highlights: [
          'Directed 30+ research and outreach events across 50+ stakeholder organizations, improving cross-functional execution by 10%.',
          'Maintained and debugged the center website stack using MySQL, .NET Core, ReactJS, and SurveyJS.',
          'Improved website functionality and UX by 15% through iterative issue resolution and data-backed enhancements.',
        ],
      },
      {
        role: 'Software Development Engineer Intern',
        company: 'Sairaj Telecom',
        period: 'Apr 2021 - Jun 2022',
        highlights: [
          'Built an operations dashboard for accounting, service delivery, and data workflows that improved efficiency by 20%.',
          'Contributed to modernization of frontend and backend functionality, improving usability and maintainability.',
          'Supported AWS deployment using S3, EC2, CloudWatch, and RDS for reliable production operations.',
        ],
      },
      {
        role: 'Systems Engineer',
        company: 'Safear Defense',
        period: 'Jun 2020 - Mar 2021',
        highlights: [
          'Analyzed and maintained 1M+ records, improving data accuracy by 25% and reducing maintenance overhead by 15%.',
          'Applied data analysis for operational decisions that improved planning precision and execution efficiency.',
          'Collaborated with cross-functional teams to drive system improvements and consistent delivery outcomes.',
        ],
      },
    ] satisfies ExperienceItem[],
  },
  projects: {
    subtitle: 'My Works',
    title: 'Selected Projects',
    text: 'Production systems delivering measurable impact — from AI-powered advisor dashboards to cloud-native microservice pipelines.',
    cards: [
      {
        title: 'Student Academic Dashboard',
        description: 'Next.js + Recharts advisor platform consolidating 6+ data sources — grade trends, risk charts, AI behavioral profiles.',
        dateLabel: 'May 2024',
        dateTime: '2024-05',
        image: '/images/project-1.png',
        imageAlt: 'Student Academic Dashboard screenshot',
        href: '#',
      },
      {
        title: 'Knowledge Base RAG Chatbot',
        description: 'Multi-account AWS chatbot with LangGraph hybrid retrieval, Qdrant, OpenSearch, and Next.js streaming UI. 97% retrieval accuracy.',
        dateLabel: 'Jan 2025',
        dateTime: '2025-01',
        image: '/images/project-2.png',
        imageAlt: 'Knowledge Base RAG Chatbot screenshot',
        href: '#',
      },
      {
        title: 'Agentic Orchestration Engine',
        description: 'LangGraph + AWS Bedrock engine synthesizing multi-source student data into prioritized next-best-actions for advisors.',
        dateLabel: 'Mar 2025',
        dateTime: '2025-03',
        image: '/images/project-3.png',
        imageAlt: 'Agentic Orchestration Engine screenshot',
        href: '#',
      },
      {
        title: 'Salesforce Notes Summarizer',
        description: 'AWS Bedrock + LangChain pipeline processing 1M+ monthly Salesforce case comments with 99% accuracy and PII guardrails.',
        dateLabel: 'Nov 2024',
        dateTime: '2024-11',
        image: '/images/project-4.png',
        imageAlt: 'Salesforce Notes Summarizer screenshot',
        href: '#',
      },
      {
        title: 'Event Stream Migration (MSK)',
        description: 'Migrated 20+ event streams to Amazon MSK and implemented Step Functions orchestration across Lambda microservices.',
        dateLabel: 'Aug 2024',
        dateTime: '2024-08',
        image: '/images/project-5.png',
        imageAlt: 'MSK Event Stream Migration screenshot',
        href: '#',
      },
      {
        title: 'Sairaj Telecom Dashboard',
        description: 'MERN stack operations dashboard managing accounting, service delivery, and data workflows deployed on AWS.',
        dateLabel: 'Jun 2022',
        dateTime: '2022-06',
        image: '/images/project-6.png',
        imageAlt: 'Sairaj Telecom Dashboard screenshot',
        href: '#',
      },
      {
        title: 'ASU Research Center Site',
        description: 'Maintained and improved the center website using MySQL, .NET Core, ReactJS, and SurveyJS with 15% UX improvement.',
        dateLabel: 'Apr 2023',
        dateTime: '2023-04',
        image: '/images/project-7.png',
        imageAlt: 'ASU Research Center Site screenshot',
        href: '#',
      },
    ] satisfies ProjectCard[],
  },
  blog: {
    subtitle: 'Blog',
    title: 'Engineering Notes',
    text: 'Short write-ups on cloud architecture, AI systems, and full stack engineering.',
    posts: [
      {
        slug: 'aws-certification-roadmap',
        date: 'May 2026',
        readTime: '6 min read',
        category: 'AWS Certification',
        title: 'AWS Certification Roadmap for Builders',
        excerpt: 'A practical sequence for moving from Cloud Practitioner to architect, developer, and AI-focused AWS certifications without collecting credentials that do not compound.',
        intro: 'AWS certifications are most useful when they mirror the systems you are already building. The right path is less about stacking badges and more about choosing exams that sharpen the design, delivery, and troubleshooting work you do every week.',
        sections: [
          {
            heading: 'Start with role alignment, not exam popularity',
            paragraphs: [
              'If you work across application development, cloud infrastructure, and data-heavy products, the best sequence usually starts with Cloud Practitioner only if you need a broad baseline. Otherwise, move directly into Associate-level material tied to your day-to-day responsibilities.',
              'For most builders, Solutions Architect Associate teaches the broadest system-design judgment. Developer Associate then makes the operational details concrete: IAM, event-driven flows, retries, observability, SDK usage, and deployment mechanics. If you are working with generative AI workloads, the AI Practitioner or specialty content is useful after those foundations are in place.',
            ],
          },
          {
            heading: 'Use projects as the main study system',
            paragraphs: [
              'A certification plan sticks when every topic maps to a real build. Spin up a small but complete workload: API Gateway, Lambda or ECS, DynamoDB or Aurora, S3, IAM boundaries, and CloudWatch dashboards. When you study networking, add private subnets and VPC endpoints. When you study messaging, introduce SQS or EventBridge.',
              'This approach makes exam prep cumulative. Instead of memorizing isolated services, you are building a reference architecture that keeps paying off in interviews and production work.',
            ],
            bullets: [
              'Document why each service exists and what failure mode it addresses.',
              'Track cost, latency, and security tradeoffs in a short design log.',
              'Rebuild the same workload twice: once quickly, once with cleaner least-privilege IAM and observability.',
            ],
          },
          {
            heading: 'A sequence that compounds well',
            paragraphs: [
              'A strong order for a full-stack or platform-minded engineer is: Solutions Architect Associate, Developer Associate, then a specialization that reflects your workload mix. That could be security, machine learning, or AI-specific AWS content if you are shipping Bedrock or agentic systems.',
              'The outcome you want is simple: every certification should make your next architecture decision faster and more defensible. If an exam does not improve how you design, deploy, or debug systems, it is probably the wrong one for your current stage.',
            ],
          },
        ],
      },
      {
        slug: 'ai-agent-guardrails-production',
        date: 'April 2026',
        readTime: '7 min read',
        category: 'AI Agent',
        title: 'Designing AI Agents with Real Guardrails',
        excerpt: 'The patterns that keep agentic workflows useful in production: scoped tools, explicit state transitions, verification steps, and human checkpoints where they actually matter.',
        intro: 'Most AI agent failures are not model failures. They are systems failures caused by vague tool permissions, weak state tracking, and no defined recovery path when a step goes wrong.',
        sections: [
          {
            heading: 'Treat the agent like a workflow engine first',
            paragraphs: [
              'An agent should not be a single prompt with unlimited tool access. It should be a controlled workflow with inputs, intermediate state, and a clear completion condition. When the system needs planning, execution, and verification, make those separate stages instead of hoping the model self-regulates.',
              'This is where graph-based orchestration helps. A graph makes retries, forks, approvals, and error routing explicit. It also gives you observability that a free-form prompt chain rarely provides.',
            ],
          },
          {
            heading: 'Guardrails belong around the model, not inside one sentence',
            paragraphs: [
              'Prompt instructions are necessary but insufficient. Durable safety comes from tool-level controls, schema validation, allowlists, timeouts, and result verification. If an agent can write data, send email, or trigger infrastructure changes, every one of those actions needs separate policy and logging.',
              'The model should propose an action. The surrounding system should decide whether that action is valid, safe, and complete.',
            ],
            bullets: [
              'Restrict tools to the minimum data and scope required for the task.',
              'Validate model outputs against strict JSON or typed schemas before execution.',
              'Insert human review at irreversible or high-risk transitions, not at every step.',
              'Record prompts, tool calls, outputs, and retries so you can debug actual behavior later.',
            ],
          },
          {
            heading: 'Optimize for recovery, not perfection',
            paragraphs: [
              'Production systems need graceful failure more than clever autonomy. When retrieval is weak, route to clarification. When confidence is low, downgrade to summarization or recommendation instead of execution. When a tool fails, decide whether the workflow should retry, skip, or escalate.',
              'A strong agent system is one that fails predictably, leaves a clean audit trail, and gives the user a controllable next step.',
            ],
          },
        ],
      },
      {
        slug: 'ai-frameworks-langchain-langgraph-bedrock',
        date: 'March 2026',
        readTime: '5 min read',
        category: 'AI Frameworks',
        title: 'Choosing an AI Framework Without Overbuilding',
        excerpt: 'When to stay close to raw model APIs, when LangChain is enough, and when LangGraph earns its complexity for multi-step systems.',
        intro: 'Framework choice matters less than clarity about the workflow you need to support. Too many teams adopt a full agent stack when they only need retrieval, prompt templates, and one reliable backend call.',
        sections: [
          {
            heading: 'Start with the simplest layer that matches the job',
            paragraphs: [
              'If your application is a straightforward chat, extraction, or summarization flow, raw SDKs plus a small internal abstraction are often enough. This keeps latency, debugging, and vendor portability under control.',
              'LangChain becomes useful when you need standardized prompt templates, document loaders, retrievers, and model interchangeability. It reduces glue code, but it should not become an excuse to hide important behavior behind too many abstractions.',
            ],
          },
          {
            heading: 'Use graph orchestration when the workflow has real state',
            paragraphs: [
              'LangGraph is valuable when the system has branching, retries, approvals, or long-running stateful steps. That includes agentic copilots, research pipelines, and workflows that coordinate retrieval, reasoning, tool use, and verification.',
              'The key question is not whether a graph framework is powerful. It is whether your product needs explicit state transitions that you want to inspect and control.',
            ],
            bullets: [
              'Use raw APIs for simple single-turn or linear multi-step tasks.',
              'Use LangChain for shared LLM plumbing and retrieval orchestration.',
              'Use LangGraph when workflow state, branching, and recovery logic become first-class requirements.',
            ],
          },
          {
            heading: 'Avoid framework-driven architecture',
            paragraphs: [
              'A framework should simplify a design you already understand. If the team cannot explain the retrieval path, tool permissions, memory strategy, and fallback behavior without mentioning the framework, the abstraction is likely carrying too much architectural weight.',
              'Choose the smallest layer that preserves clarity and lets you debug behavior under real production pressure.',
            ],
          },
        ],
      },
      {
        slug: 'aws-bedrock-rag-patterns',
        date: 'February 2026',
        readTime: '6 min read',
        category: 'AWS Bedrock',
        title: 'Shipping RAG Systems on AWS Bedrock',
        excerpt: 'A practical architecture for Bedrock-based retrieval systems with strong grounding, measurable quality, and clear operational boundaries.',
        intro: 'A strong RAG system is not defined by the model alone. Quality comes from document hygiene, retrieval strategy, evaluation loops, and the discipline to separate grounded answers from unsupported generation.',
        sections: [
          {
            heading: 'Keep the retrieval pipeline inspectable',
            paragraphs: [
              'On AWS, Bedrock gives you model access, but the surrounding retrieval stack still determines whether answers are trustworthy. Chunking strategy, embedding choice, metadata filtering, and ranking logic all shape answer quality more than prompt wording alone.',
              'Build the system so every answer can point back to the exact context used. That is what lets teams debug false positives, stale knowledge, and missing citations.',
            ],
          },
          {
            heading: 'Design for evaluation from the beginning',
            paragraphs: [
              'RAG quality drifts quietly unless you measure it. Track retrieval hit rate, groundedness, latency, and user resolution rate. Create a small evaluation set from real user questions and run it whenever prompts, chunking logic, or indexes change.',
              'This keeps the system honest. Without evaluation, teams often mistake fluent answers for correct ones.',
            ],
            bullets: [
              'Store source metadata with every chunk and return it in the response payload.',
              'Use fallback behavior when retrieval confidence is low: clarify, narrow scope, or say the answer is unavailable.',
              'Separate generation metrics from business metrics so you can see whether better answers actually help users complete tasks.',
            ],
          },
          {
            heading: 'Bedrock works best inside a disciplined platform',
            paragraphs: [
              'The most effective Bedrock deployments pair model access with IAM boundaries, private networking where needed, observability, and a clean interface between model invocation and product logic. This keeps experimentation fast without letting AI-specific concerns leak into every part of the stack.',
              'Treat Bedrock as one layer in a broader system: retrieval, orchestration, policy, and product UX all matter equally if you want dependable results.',
            ],
          },
        ],
      },
    ] satisfies BlogPost[],
  },
  contact: {
    subtitle: 'Contact',
    title: 'Open to new opportunities — let\'s connect.',
    text: 'Reach out for full-time roles, contract work, or collaborations. I\'ll get back to you promptly.',
    addressTitle: 'Location:',
    address: 'Tempe, AZ, United States',
    phoneTitle: 'Phone:',
    phones: [{ label: '602-422-4344', href: 'tel:6024224344' }],
    emailTitle: 'Email:',
    emails: [{ label: 'amarmohite200@gmail.com', href: 'mailto:amarmohite200@gmail.com' }],
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amarmohite2001' },
      { label: 'GitHub', href: 'https://github.com/amarmohite2001' },
    ] satisfies SocialLink[],
    whatsapp: 'https://wa.me/16024224344',
    form: {
      labels: { name: 'Name', email: 'Email', phone: 'Phone', message: 'Message' },
      placeholders: {
        name: 'e.g. Jane Doe',
        email: 'e.g. jane@example.com',
        phone: 'Your phone number',
        message: 'Write message...',
      },
      submitLabel: 'Send',
    },
  },
  footer: {
    copyrightYear: '2026',
    copyrightName: 'Amar Mohite',
    copyrightHref: '#',
  },
  resume: {
    subtitle: 'Resume',
    title: 'View Resume',
    text: 'View the latest resume below or download a PDF copy.',
    buttonLabel: 'Download PDF',
    file: '/Resume/Amar Gajanan_Mohite_Resume.pdf',
    frameTitle: 'Amar Mohite Resume',
  },
}
