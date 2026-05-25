export const POSTS = [
  {
    slug: 'rag-vs-fine-tuning',
    cat: 'LLM Engineering', date: 'May 12, 2025', rt: '12 min',
    color: '#8B5CF6', bg: 'rgba(139,92,246,0.06)', feat: true,
    title: 'Why RAG Still Beats Fine-tuning for Most Enterprise Use Cases',
    exc: 'A rigorous comparison of retrieval-augmented generation and parameter-efficient fine-tuning across 12 production workloads.',
    intro: 'When GPT-4 became widely available, enterprise teams raced to fine-tune foundation models on their proprietary data. Two years later, a more nuanced picture has emerged: for the vast majority of real-world applications, Retrieval-Augmented Generation (RAG) consistently outperforms fine-tuning on the dimensions that matter most in production — accuracy, maintainability, cost, and latency.',
    sections: [
      {
        heading: 'The fundamental trade-off',
        body: 'Fine-tuning bakes knowledge into model weights. This makes inference fast and self-contained, but creates a critical problem: knowledge staleness. Every time your data changes, you need to re-train. In enterprise settings where product catalogues, policies, and regulations update frequently, a fine-tuned model becomes stale almost immediately after deployment.\n\nRAG, by contrast, retrieves relevant documents at inference time from a live knowledge base. The model\'s reasoning ability stays current with your data without any retraining. This architectural separation between reasoning (the model) and knowledge (the retrieval corpus) turns out to be enormously valuable in practice.\n\nAcross 12 production workloads we evaluated — spanning legal research, customer support, financial analysis, and internal knowledge management — RAG outperformed fine-tuning on factual accuracy in 10 of 12 cases when the underlying data had changed more than once in the prior six months.'
      },
      {
        heading: 'Where fine-tuning still wins',
        body: 'Fine-tuning genuinely excels in two scenarios. First, style and format adaptation: if you need a model to consistently produce outputs in a very specific format — JSON with custom field names, regulatory templates, structured clinical notes — fine-tuning that behaviour is far more reliable than prompt engineering alone.\n\nSecond, domain-specific reasoning patterns: for highly specialised domains like semiconductor physics or niche legal jurisdictions, fine-tuning on expert-annotated reasoning examples can meaningfully improve the model\'s problem-solving accuracy, not just its vocabulary. In these cases, the model is learning how to think in a domain, not just what to know.\n\nThe mistake most teams make is reaching for fine-tuning when they really need better retrieval. If the problem is "the model does not know our internal docs," that is a RAG problem. If the problem is "the model does not reason well about our domain," that might be a fine-tuning problem.'
      },
      {
        heading: 'Building production-grade RAG',
        body: 'The most common failure mode we see in enterprise RAG deployments is not the retrieval strategy — it is the data preparation. Poorly chunked documents, missing metadata, and inconsistent embedding strategies will defeat even the most sophisticated retrieval pipeline.\n\nOur recommended stack for production RAG: semantic chunking with overlap (not fixed-size splits), hybrid retrieval combining dense embeddings with BM25 sparse retrieval, a reranking step using a cross-encoder model, and citation-aware prompting so the LLM grounds its responses in retrieved passages.\n\nEvaluation is equally important. Automated RAG evaluation using frameworks like RAGAS — measuring faithfulness, answer relevance, and context precision — should be part of your CI/CD pipeline before any production deployment. Without this, you are flying blind.'
      },
      {
        heading: 'The hybrid future',
        body: 'The most interesting emerging pattern is RAG combined with lightweight fine-tuning. Use fine-tuning to adapt the model\'s output style and domain reasoning patterns, then use RAG to keep its factual knowledge current. This hybrid approach combines the strengths of both without the maintenance burden of frequent full retraining.\n\nAs embedding models improve and retrieval latencies drop, we expect RAG to extend its dominance across even more use cases. The architectural principle — separate reasoning from knowledge — is fundamentally sound, and the tooling is maturing rapidly.'
      }
    ]
  },
  {
    slug: 'model-drift-monitoring',
    cat: 'MLOps', date: 'Apr 8, 2025', rt: '9 min',
    color: '#10B981', bg: 'rgba(16,185,129,0.06)',
    title: 'The Hidden Cost of Model Drift: A Framework for Proactive Monitoring',
    exc: "Three production failure modes we've encountered — and the monitoring architecture that prevents them.",
    intro: 'A model that performed excellently at launch will, without active monitoring, silently degrade over time. Data distributions shift, user behaviour evolves, and the world changes in ways your training data could not anticipate. Model drift is not a risk — it is a certainty. The question is only whether you detect it before or after your users do.',
    sections: [
      {
        heading: 'Three failure modes we have seen in production',
        body: 'Feature drift is the most common. Input distributions change — a retail recommendation model trained on pre-pandemic shopping behaviour encounters entirely different seasonal patterns. Performance degrades gradually, and without monitoring, the business attributes the drop to unrelated causes for weeks before the root cause is identified.\n\nLabel drift is subtler. The relationship between features and labels changes — what users considered a "relevant" search result in 2023 differs from 2025 as information availability and expectations evolve. Upstream model outputs used as features in downstream models are particularly vulnerable.\n\nConcept drift is the hardest to detect and fix. The underlying phenomenon being modelled changes fundamentally — credit risk models deployed through an economic cycle, fraud detection models as attacker tactics evolve. No amount of data collection fixes this; the model needs architectural rethinking.'
      },
      {
        heading: 'Building a monitoring architecture',
        body: 'Effective drift monitoring requires instrumentation at three levels. At the data level, track statistical properties of incoming features against training baselines — Population Stability Index (PSI) for continuous variables, chi-square tests for categoricals. Set alert thresholds before deployment, not after an incident.\n\nAt the model level, track prediction distributions and confidence calibration continuously. A model whose output distribution shifts significantly — even if individual predictions look plausible — is telling you something important. Track your models\' entropy over time.\n\nAt the business level, ground your technical monitoring in the outcomes that matter. Prediction accuracy is a proxy. Revenue impact, customer satisfaction, and operational error rates are the real signal. Build dashboards that connect model health to business health directly.'
      },
      {
        heading: 'The retraining decision framework',
        body: 'Not all drift requires retraining. A lightweight decision framework: if drift is in non-critical features with low predictive importance, investigate but do not retrain immediately. If prediction distribution has shifted but business metrics are stable, increase monitoring frequency and set a retraining trigger. If both model metrics and business metrics are degrading, initiate retraining immediately.\n\nAutomated retraining pipelines should be built before they are needed, not in response to an incident. The time to engineer your retraining pipeline is during the initial deployment sprint, when you have full context and no production pressure.'
      },
      {
        heading: 'Takeaway',
        body: 'Monitoring is not optional — it is the second half of deployment. A model without monitoring is a liability, not an asset. Budget engineering time for observability equal to roughly 30% of the initial model development effort. It will pay back many times over in incidents prevented.'
      }
    ]
  },
  {
    slug: 'llm-security-guide',
    cat: 'AI Strategy', date: 'Mar 19, 2025', rt: '15 min',
    color: '#3B82F6', bg: 'rgba(59,130,246,0.06)',
    title: "The CISO's Guide to LLM Security in Production",
    exc: 'Prompt injection, data leakage, jailbreaking, and supply chain risks — a comprehensive security framework.',
    intro: 'Deploying a large language model in a production enterprise environment introduces an entirely new attack surface that most security frameworks were not designed to address. Traditional application security — input validation, authentication, encryption at rest — remains necessary but is no longer sufficient. LLMs are probabilistic systems with emergent behaviours, and securing them requires thinking about threats that did not exist five years ago.',
    sections: [
      {
        heading: 'Prompt injection: the top vulnerability for LLMs',
        body: 'Prompt injection — where a malicious user crafts inputs that cause the model to ignore its instructions and behave in unintended ways — is the most critical LLM vulnerability. Unlike SQL injection, there is no parameterised query equivalent for natural language. The model fundamentally cannot distinguish between instructions and data when both arrive as text.\n\nMitigations are layered, not absolute. Structural separation of system prompts from user input (different conversation roles, XML delimiters, instruction prefixes) raises the bar significantly. Input classifiers that detect adversarial patterns before they reach the LLM add another layer. Output monitoring for policy violations catches what gets through. No single control is sufficient; defence-in-depth is required.\n\nIndirect prompt injection — where injected instructions arrive through retrieved documents in a RAG pipeline — is particularly dangerous because it can be invisible to the end user. Every external data source integrated into a RAG pipeline is a potential injection vector.'
      },
      {
        heading: 'Data leakage and privacy boundaries',
        body: 'LLMs used in enterprise settings frequently have access to sensitive data through retrieval systems or function calls. A poorly designed system can be induced to exfiltrate that data through the normal output channel — the model produces text that happens to contain confidential information it retrieved.\n\nAccess control in RAG systems must mirror the access control model of the underlying data. If a user does not have permission to view a document, that document must not be retrievable for their session. Row-level security in vector databases is still an emerging capability; many teams implement coarse-grained separation as an interim measure.\n\nTraining data memorisation is a separate concern. Foundation models sometimes reproduce training data verbatim, which can surface PII or proprietary content. Regular red-teaming exercises to probe memorisation should be part of your security programme.'
      },
      {
        heading: 'Supply chain security for LLM systems',
        body: 'Enterprise LLM systems integrate multiple third-party components: foundation model providers, embedding model APIs, vector database vendors, and orchestration frameworks. Each is a potential point of compromise.\n\nModel provenance matters. Verify the cryptographic signatures of model weights obtained from external sources. Fine-tuned models shared through community platforms carry significant risk — a backdoored fine-tuned model can exhibit normal behaviour in evaluation while triggering on specific adversarial inputs in production.\n\nOrchestration framework vulnerabilities are particularly impactful because these frameworks often have broad system access. Maintain strict version pinning, monitor CVE feeds for your dependencies, and consider running orchestration layers in isolated execution environments.'
      },
      {
        heading: 'Building a security programme',
        body: 'Security for LLM systems requires ongoing investment, not a one-time audit. A mature programme includes: a threat model updated with each new integration, regular red-teaming exercises against your specific deployment, automated evaluation suites that test for jailbreaking and injection, and an incident response playbook specific to LLM failures.\n\nThe governance dimension is equally important. Who approves new system prompt changes? What is the process for handling a jailbreak disclosure? How do you communicate an LLM security incident to regulators? These questions should be answered before you need the answers.'
      }
    ]
  },
  {
    slug: 'agentic-ai-enterprise',
    cat: 'Research', date: 'Feb 5, 2025', rt: '18 min',
    color: '#8B5CF6', bg: 'rgba(139,92,246,0.06)',
    title: 'Agentic AI in the Enterprise: From Hype to Production Patterns',
    exc: "What we've learned about autonomous AI agents in regulated industries — architectures, guardrails, and oversight patterns.",
    intro: 'The term "AI agent" has become so overloaded it risks meaning nothing. True agentic systems — those that plan, execute multi-step tasks, and adapt based on results over extended time horizons — are fundamentally different in their capabilities, risks, and operational requirements. This piece focuses on what we have learned deploying real agentic systems in enterprise environments, not what is theoretically possible.',
    sections: [
      {
        heading: 'What makes a system genuinely agentic',
        body: 'The distinguishing characteristic of a true agentic system is not the ability to call tools — it is the ability to decompose a goal into sub-tasks, execute those sub-tasks in sequence or parallel, observe the results, and revise the plan accordingly. This feedback loop, operating over multiple steps, is what creates both the power and the risk of agentic AI.\n\nIn practice, the most valuable agentic applications we have deployed share three properties: bounded autonomy (the agent operates within a well-defined action space), observable execution (every step is logged and interpretable), and reversibility (most actions can be undone if an error is detected). Systems that lack any of these properties carry operational risk that typically outweighs their productivity benefit in regulated industries.'
      },
      {
        heading: 'Architecture patterns that work in production',
        body: 'The most reliable agentic architecture for enterprise use is the supervisor-worker pattern: a planner agent decomposes tasks and delegates to specialised sub-agents, each of which has a narrow, well-tested scope of action. The planner does not take actions directly; it only orchestrates. This separation makes the system far easier to audit, debug, and constrain.\n\nTool design is more important than model selection. The actions available to an agent define its risk surface. We design tools with the minimum necessary scope — a tool that can read documents is safer than a tool that can also write them. Function signatures that are explicit about what they can and cannot do (including explicit error states) make agents more reliable and safer than broad, flexible APIs.\n\nState management is the hardest engineering problem in production agentic systems. Long-running agent sessions must handle interruptions, partial failures, and the need for human checkpoints.'
      },
      {
        heading: 'Human oversight patterns',
        body: 'Every production agentic system we have deployed includes at least one human checkpoint. The design question is not whether to include human oversight but where in the task graph it should sit.\n\nPre-execution review works well for high-stakes, low-frequency tasks — an agent proposes a plan before taking any actions, a human approves. Inline interruption is appropriate for tasks that are mostly routine but occasionally require judgement. Post-execution audit works only for reversible, low-risk actions where the cost of an error is low and the feedback loop is fast.\n\nCritically, the oversight mechanism must be part of the system design from day one, not added as an afterthought. Retrofitting human checkpoints into an agentic system that was not designed for them is significantly harder than building them in from the start.'
      },
      {
        heading: 'What regulated industries require',
        body: 'Financial services, healthcare, and legal applications impose requirements beyond standard software engineering. Every action taken by an autonomous agent must be attributable — you must be able to answer "why did the system do this?" with a specific, auditable trail. This means logging not just the action but the model\'s reasoning, the retrieved context, the tool inputs and outputs, and the confidence signals at each decision point.\n\nThe investment in a proper agent observability layer — roughly equivalent to the investment in the agent logic itself — is consistently worth it in regulated deployments.'
      }
    ]
  },
  {
    slug: 'feature-store-at-scale',
    cat: 'Data Platform', date: 'Jan 14, 2025', rt: '11 min',
    color: '#10B981', bg: 'rgba(16,185,129,0.06)',
    title: 'Building a Feature Store That Scales: Lessons from the Field',
    exc: 'Design patterns, anti-patterns, and the decisions that determine whether your feature store becomes an asset or a burden.',
    intro: 'A feature store sounds like a solved problem until you try to build one at scale. The concept is straightforward: a centralised repository for ML features that serves both training (offline) and inference (online) consistently. The execution is where organisations consistently underestimate complexity — particularly the dual-read problem, point-in-time correctness, and the organisational friction of shared infrastructure.',
    sections: [
      {
        heading: 'The dual-read problem',
        body: 'The fundamental architectural challenge of a feature store is serving the same feature definitions across two radically different read patterns. Training jobs need to read millions of historical feature values efficiently. Online inference needs to retrieve a small number of features for a single entity in under 10 milliseconds.\n\nThese requirements point in opposite directions. Offline training prefers columnar storage systems — Parquet on object storage, BigQuery, Snowflake. Online serving prefers key-value stores — Redis, DynamoDB, Cassandra. A feature store must bridge both worlds without duplicating feature definition logic.\n\nThe most common failure pattern is over-indexing on one read path. A feature store built primarily for offline training becomes a bottleneck for online serving, causing teams to maintain separate, inconsistent feature pipelines for production inference — exactly the training-serving skew problem feature stores are supposed to solve.'
      },
      {
        heading: 'Point-in-time correctness is non-negotiable',
        body: 'Point-in-time correct feature retrieval — the ability to retrieve feature values as they existed at any historical moment — is what separates a real feature store from a glorified feature table. Without it, your training data will contain future information leakage, and your model\'s offline evaluation metrics will not reflect production performance.\n\nImplementing point-in-time correctness requires timestamp-aware storage and a retrieval system that can efficiently join entity lookups with as-of timestamps. Many teams skip this initially and regret it. Retrofitting point-in-time correctness into a feature store not designed for it is a major engineering effort.'
      },
      {
        heading: 'Governance and the team problem',
        body: 'The organisational challenges of a shared feature store often exceed the technical challenges. Who owns a feature? Who is responsible when a feature pipeline breaks and causes a production model to degrade? How do you prevent duplicate features with subtly different definitions from proliferating?\n\nThe teams that run successful feature stores invest heavily in governance tooling: feature registries with ownership metadata, data quality monitors on feature pipelines, automated staleness alerts, and deprecation workflows. They also invest in social infrastructure — clear ownership conventions, regular feature reviews, and a culture of sharing rather than reimplementing.'
      },
      {
        heading: 'When to build vs buy',
        body: 'Managed feature store solutions (Feast, Tecton, Hopsworks, Vertex AI Feature Store, SageMaker Feature Store) have matured significantly. For most organisations, starting with a managed solution and customising is faster than building from scratch.\n\nBuild only if your scale, latency requirements, or security constraints genuinely cannot be met by existing solutions. A custom feature store is a significant ongoing maintenance commitment — treat it as a product, not a project.'
      }
    ]
  },
  {
    slug: 'notebook-to-production',
    cat: 'Engineering', date: 'Dec 3, 2024', rt: '14 min',
    color: '#3B82F6', bg: 'rgba(59,130,246,0.06)',
    title: 'From Jupyter Notebook to Production: The ML Engineering Gap',
    exc: "Why 87% of ML projects never make it to production — and what it takes to be in the 13%.",
    intro: 'The statistic has become almost a cliche: somewhere between 80% and 90% of machine learning models never make it to production. Behind this number is a consistent pattern — a fundamental mismatch between the skills and tools used to develop models and those required to deploy and operate them. The gap between a working Jupyter notebook and a production ML system is not a gap in model quality. It is a gap in engineering.',
    sections: [
      {
        heading: 'Why notebooks fail in production',
        body: 'Notebooks are excellent tools for exploration. They combine code, outputs, and narrative in a single document, enabling fast iteration and easy sharing of results. These same properties make them poor foundations for production systems.\n\nA notebook is stateful in an order-dependent way that is invisible to the reader. Cells can be run out of sequence, variables can be overwritten without trace, and the execution environment is typically a single analyst\'s local machine with undocumented dependencies. None of this matters for research. All of it matters for a system that must run reliably, repeatedly, on infrastructure you do not control.'
      },
      {
        heading: 'The engineering practices that bridge the gap',
        body: 'The transition from notebook to production is not a one-time refactor — it is a different way of working throughout the development process. The teams that ship models reliably have internalised a set of practices that make production the default, not an afterthought.\n\nReproducible environments: conda environments and Docker containers with pinned dependencies are non-negotiable. Modular, tested code: production ML code is software that benefits from functions with clear inputs and outputs, unit tests for data transformations, and integration tests for pipeline components. Data version control: the ability to reproduce a training run requires not just code version control but data version control. DVC and Delta Lake make this tractable.'
      },
      {
        heading: 'The operational reality of production ML',
        body: 'Shipping a model is the beginning, not the end. A production ML system requires monitoring (is the model still performing as expected?), retraining pipelines (what happens when it is not?), serving infrastructure (how does the model respond to requests at scale?), and rollback capability (what happens when a new model is worse?).\n\nNone of this is solved by the model development process. It requires dedicated engineering investment — roughly equivalent in scope to the model development itself. Organisations that underestimate this consistently find themselves with models that were expensive to develop and too fragile to operate reliably.'
      },
      {
        heading: 'Starting right: the production-first development process',
        body: 'The most effective intervention is shifting to a production-first development culture before the first line of model code is written. Define the inference API before training begins. Establish the monitoring strategy before deployment. Build the retraining pipeline in parallel with the model.\n\nThe best ML teams do not distinguish between "research" and "engineering" phases — they ship and iterate continuously, with every increment production-ready. This feels like overhead during development. It feels like wisdom when a data pipeline breaks at 2am three months into production.'
      }
    ]
  }
]

export function getPost(slug) {
  return POSTS.find(p => p.slug === slug) || null
}
