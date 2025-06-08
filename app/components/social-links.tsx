import React from 'react';
import Image from 'next/image';

import styles from './social-links.module.css';
import githubLight from '../../public/github-light.svg';
import githubDark from '../../public/github-dark.svg';
import twitter from '../../public/twitter.svg';
import codepenLight from '../../public/codepen-light.svg';
import codepenDark from '../../public/codepen-dark.svg';
import blueskyLight from '../../public/bluesky-light.svg';
import blueskyDark from '../../public/bluesky-dark.svg';
import linkedin from '../../public/linkedin.svg';

export const SocialLinks: React.FC = () => (
  <div>
    <h2>Find me elsewhere</h2>
    <p className={styles.socials}>
      <a
        className={styles.social}
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/glen-cheney"
      >
        <Image className={styles.iconLight} src={githubLight} alt="GitHub logo" width="64" />
        <Image className={styles.iconDark} src={githubDark} alt="GitHub logo" width="64" />
      </a>
      <a
        className={styles.social}
        title="Bluesky"
        target="_blank"
        rel="noopener noreferrer"
        href="https://bsky.app/profile/glencheney.com"
      >
        <Image className={styles.iconLight} src={blueskyLight} alt="Bluesky logo" width="64" />
        <Image className={styles.iconDark} src={blueskyDark} alt="Bluesky logo" width="64" />
      </a>
      <a
        className={styles.social}
        title="Twitter / X"
        target="_blank"
        rel="noopener noreferrer"
        href="https://x.com/Vestride"
      >
        <Image src={twitter} alt="X logo" width="64" />
      </a>
      <a
        className={styles.social}
        title="CodePen"
        target="_blank"
        rel="noopener noreferrer"
        href="http://codepen.io/Vestride/"
      >
        <Image className={styles.iconLight} src={codepenLight} alt="CodePen logo" width="64" />
        <Image className={styles.iconDark} src={codepenDark} alt="CodePen logo" width="64" />
      </a>
      <a
        className={styles.social}
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/glenium/"
      >
        <Image src={linkedin} alt="LinkedIn logo" width="64" />
      </a>
    </p>
  </div>
);
