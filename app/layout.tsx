import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Visual Notes AI",
    "one_liner": "Transform your screenshots into structured notes with AI.",
    "why_now": "Remote work and digital collaboration demand efficient information processing.",
    "novel_mechanism": "Combining computer vision with natural language processing to categorize and summarize extracted text.",
    "ai_stack": [
      "GPT-4",
      "RAG",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Students extracting lecture notes from slides.",
      "Professionals summarizing insights from conference presentations."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Screenshot upload",
        "Text extraction",
        "Note categorization"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe",
        "n8n"
      ],
      "data_bootstrap": [
        "public dataset of articles",
        "synthetic notes via LLM"
      ],
      "risk": [
        "accuracy of text extraction",
        "user adoption"
      ],
      "mitigation": [
        "continuous UI/UX testing",
        "incentivize early users"
      ]
    },
    "go_to_market": {
      "hooks": [
        "See the magic of transforming photos into organized notes!",
        "Monitor your learning progress visually."
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Discord"
      ],
      "pricing": {
        "free": "Basic features with ads.",
        "pro": "$5/month for advanced features.",
        "business": "$25/month for team collaboration and integration."
      }
    },
    "moat": [
      "community-driven content improvement",
      "custom integrations with productivity tools",
      "data network effect through user-generated templates"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "Unlike traditional OCR tools, Visual Notes AI focuses on structured output and user interactivity, targeting a niche demand in the ed-tech space."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}