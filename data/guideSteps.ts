export interface GuideStepData {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof import('lucide-react');
  code?: string;
}

export const guideSteps: GuideStepData[] = [
  {
    id: 1,
    title: "Initialize Project",
    description: "Create a new Next.js project with Tailwind CSS.",
    icon: "Terminal",
    code: `npx create-next-app@latest my-surfer-app --typescript && cd my-surfer-app\nnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest\n npx tailwindcss init -p`,
  },
  {
    id: 2,
    title: "Add Surfer Extension",
    description: "Install the Surfer VS Code extension and configure the AI SDK.",
    icon: "Puzzle",
    code: `code --install-extension Abinnovator.surfer-extension`,
  },
  {
    id: 3,
    title: "Create Guide Components",
    description: "Add reusable components to render each guide step.",
    icon: "Code",
    code: `mkdir -p components && touch components/GuideStep.tsx`,
  },
];
