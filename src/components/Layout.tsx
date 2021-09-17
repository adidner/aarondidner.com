import React, { ReactNode } from 'react'
import Navbar from './Navbar';
import '../styles/global.css';
import { graphql, useStaticQuery } from 'gatsby';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import BitBucketIcon from '../images/BitBucketIcon';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  const { copyright } = data.site.siteMetadata

  return (
    <div className="layout">
      <div>
        <Navbar />
        <div className="content">
          { children }
        </div>
      </div>
      <footer>
        <div className="all-icon-links-container">
          <IconPlusLink 
            icon={<GitHubIcon/>} 
            link={"https://github.com/adidner/"}
          />
          <IconPlusLink 
            icon={<LinkedInIcon/>} 
            link={"https://www.linkedin.com/in/aaron-didner-3b9554129/"}
          />
          <IconPlusLink 
            icon={<InstagramIcon/>} 
            link={"https://www.instagram.com/_snap_dragon_/"}
          />
          <IconPlusLink 
            icon={BitBucketIcon} 
            link={"https://bitbucket.org/adidner/"}
          /> 
        </div>
        <div className={"copyright-footer"}>{ copyright }</div>
      </footer>
    </div>
  )
}

interface IconPlusLinkInterface{
  icon: ReactNode;
  link: string;
}
function IconPlusLink(props: IconPlusLinkInterface){

  return (
    <div className={"icon-link-container"}>
      <a href={props.link} target="_blank" className={"icon-svg-itself"}>
        {props.icon}
      </a>
    </div>
  );
}