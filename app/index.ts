interface Social {
  label: string;
  href: string;
  src: string;
}

const mainSocials = [
  { label: "GitHub", href: "https://github.com/codebyajax", src: "/assets/SVG/Github.svg" },
  { label: "Twitter", href: "https://twitter.com/codebyajax", src: "/assets/SVG/Twitter.svg" },
  { label: "Medium", href: "https://medium.com/@codebyajax", src: "/assets/SVG/Medium.svg" },
  { label: "LinkedIn", href: "https://linkedin.com/in/codebyajax", src: "/assets/SVG/LinkedIn.svg" },
  { label: "LeetCode", href: "https://leetcode.com/u/codebyajax/", src: "/assets/SVG/Leetcode.svg" },
];

const extraSocials = [
  { label: "Behance", href: "https://behance.net/codebyajax", src: "/assets/SVG/behance.svg" },
  { label: "Instagram", href: "https://instagram.com/codebyajax", src: "/assets/SVG/instagram.svg" },
  { label: "Bluesky", href: "https://bsky.app/profile/codebyajax", src: "/assets/SVG/bluesky.svg" },
  { label: "Youtube", href: "https://youtube.com/@codebyajax", src: "/assets/SVG/youtube.svg" },
  { label: "Discord", href: "https://discord.com/@codebyajax", src: "/assets/SVG/discord.svg" },
];


const techStack = [
  { tool: "Figma" },
{ tool: "framer", label: "Framer" },
{ tool: "Webflow" },
  {tool: "React"},
  {tool: "nextjs", label: "Next.js"},
  {tool: "javascripts", label: "JavaScript"},
  {tool: "typescripts", label: "TypeScript"},
  {tool: "Tailwind"},
  {tool: "Shadcn"},
  {tool: "Redux"},
  {tool: "three", label: "Three.js"},
  {tool: "GSAP"},
  {tool: "Lenis"},
  {tool: "Node"},
  {tool: "Express"},
  {tool: "Django"},
  {tool: "MongoDB"},
  {tool: "MySQL"},
  {tool: "Java"},
  {tool: "Python"},
  {tool: "Git"},
  {tool: "Github"},
  {tool: "AWS"},
  {tool: "Jest"},
  {tool: "testcafe", label: "TestCafe"},
  {tool: "Postman"},
  
];

export { mainSocials, extraSocials, techStack };
