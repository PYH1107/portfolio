import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Yun-Huei Pan",
  EMAIL: "maypan1107@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_JOTTINGS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const JOTTINGS = {
  TITLE: "Jottings",
  DESCRIPTION: "My thoughts and insights."
}


export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/PYH1107"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/yun-huei-pan/",
  }
];
