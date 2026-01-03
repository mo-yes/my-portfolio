import adobeXd from '../public/svg/skills/adobe-xd.svg';
import bootstrap from '../public/svg/skills/bootstrap.svg';
import canva from '../public/svg/skills/canva.svg';
import css from '../public/svg/skills/css.svg';
import figma from '../public/svg/skills/figma.svg';
import git from '../public/svg/skills/git.svg';
import html from '../public/svg/skills/html.svg';
import javascript from '../public/svg/skills/javascript.svg';
import materialui from '../public/svg/skills/materialui.svg';
import nextJS from '../public/svg/skills/nextJS.svg';
import react from '../public/svg/skills/react.svg';
import strapi from '../public/svg/skills/strapi.svg';
import tailwind from '../public/svg/skills/tailwind.svg';
import typescript from '../public/svg/skills/typescript.svg';
import vitejs from '../public/svg/skills/vitejs.svg';
import github from '../public/svg/skills/github-svgrepo-com.svg'
import JQuery from '../public/svg/skills/jquery-svgrepo-com.svg'
import postman from '../public/svg/skills/postman-icon-svgrepo-com.svg'
import vscode from '../public/svg/skills/vscode-svgrepo-com.svg'
import npm from '../public/svg/skills/npm-svgrepo-com.svg'
import vercel from '../public/svg/skills/vercel-icon-svgrepo-com.svg'


// Function to get the skill image
export function skillsImage(skill){
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'github':
      return github;
    case 'jquery':
      return JQuery;
    case 'postman':
      return postman;
    case 'vscode':
      return vscode;
    case 'npm':
      return npm;
    case 'vercel':
      return vercel;
    case 'html':
      return html;
    case 'adobe xd':
      return adobeXd;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    case 'strapi':
      return strapi;
    case 'figma':
      return figma;
    case 'canva':
      return canva;
    default:
      break;
  }
}
