import React from 'react';
import { Link } from 'gatsby';
import { css, cx } from 'emotion';
import {
  FaTwitter,
  FaRss,
  FaToolbox,
  FaUser,
  FaYoutube,
  FaPodcast,
  FaGithub,
  FaEnvelope,
  FaMicrophone,
  FaAlignJustify,
  FaBox,
  FaCode,
} from 'react-icons/fa';
import { color, mediaQueries } from '../utils/css';
import styled from 'react-emotion';

export default () => (
  <nav
    css={`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      ${mediaQueries.phone(css`
        align-items: center;
      `)};
    `}
  >
    <Link
      to="/"
      css={`
        display: block;
        box-shadow: none;
      `}
    >
      <img
        src="/images/profile.jpg"
        css={`
          display: block;
          height: 100px;
          width: auto;
          border-radius: 50%;
          margin: 0;
        `}
      />
    </Link>
    <h1
      css={`
        margin: 1.2rem 0 0 0;
        font-size: 1.5rem;
      `}
    >
      <Link
        to="/"
        css={{
          color: color.title,
          boxShadow: 'none',
          '&:hover': {
            opacity: 0.8,
          },
        }}
      >
        Harry Wolff
      </Link>
    </h1>
    <div
      css={`
        margin: 0;
        font-size: 0.8rem;
        color: ${color.titleLighter};
      `}
    >
      You can&apos;t escape my laugh.
    </div>
    <div
      css={`
        display: flex;
        flex-direction: column;
        margin-top: 20px;
      `}
    >
      <NavLink to="/blog/page/1/">
        <FaAlignJustify color="black" /> Blog
      </NavLink>
      <SubNavLinks>
        <NavLink href="http://feeds.feedburner.com/harrywolff/zOZJ">
          <FaRss color="black" /> RSS
        </NavLink>
        {/* <NavLink to="/blog/category/code/">
          <FaCircle size="0.5rem" color="black" />
          Code
        </NavLink>
        <NavLink to="/blog/category/career/">
          <FaCircle size="0.5rem" color="black" />
          Career
        </NavLink>
        <NavLink to="/blog/category/personal/">
          <FaCircle size="0.5rem" color="black" />
          Personal
        </NavLink>
        <NavLink to="/blog/tags/">Tags</NavLink> */}
        <NavLink to="/blog/archive/">
          <FaBox color="black" /> Archive
        </NavLink>
      </SubNavLinks>
      <NavLink to="/projects/">
        <FaToolbox color="black" />
        Projects
      </NavLink>
      <SubNavLinks>
        <NavLink href="https://www.youtube.com/user/hswolff">
          <FaYoutube color="black" /> YouTube
        </NavLink>
        <NavLink href="https://theconsolelog.com/">
          <FaPodcast color="black" /> Podcast
        </NavLink>
        <NavLink href="https://github.com/hswolff">
          <FaGithub color="black" /> Open Source
        </NavLink>
      </SubNavLinks>
      <NavLink to="/about/">
        <FaUser color="black" /> About
      </NavLink>
      <SubNavLinks>
        <NavLink to="/about/contact-me/">
          <FaEnvelope color="black" /> Contact Me
        </NavLink>
        <NavLink to="/about/talks/">
          <FaMicrophone color="black" /> Talks
        </NavLink>
        <NavLink href="https://twitter.com/hswolff">
          <FaTwitter color="black" /> @hswolff
        </NavLink>
      </SubNavLinks>
      <NavLink
        href="https://github.com/hswolff/website"
        className={css`
          font-size: 0.7rem;
          margin-top: 1.5rem;
        `}
      >
        <FaCode color="black" /> Source
      </NavLink>
    </div>
  </nav>
);

const NavLink = props => {
  return React.createElement(props.href ? 'a' : Link, {
    ...props,
    className: cx(
      css`
        color: ${color.titleLighter};
        transition: color ease 0.3s;
        box-shadow: none;
        margin: 0.2rem 0;
        font-size: 0.9rem;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        svg {
          margin-right: 5px;
        }

        &:hover {
          opacity: 0.5;
          text-decoration: underline;
        }
      `,
      props.className
    ),
  });
};

const SubNavLinks = styled('div')`
  margin-left: 10px;
  a {
    font-size: 0.8rem;
  }
`;