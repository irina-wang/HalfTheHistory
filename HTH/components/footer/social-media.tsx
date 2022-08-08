/**
 * Social media in the footer. All reference link to { Five sisters Production }
 * 
 * TODO: find Tik Tok
 * 
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram,faTwitter, faFacebook, faTiktok, faYoutube} from '@fortawesome/free-brands-svg-icons';

import styles from './social-media.module.css';

export default function SocialMedia() {
  return <div className={styles.socialMedia}>
    {/* Five sisters Production */}
    <a href="https://www.instagram.com/fivesistersproductions/">
      <FontAwesomeIcon icon={faInstagram}/>
    </a>
    <a href="https://twitter.com/fivesistersfilm">
      <FontAwesomeIcon icon={faTwitter}/>
    </a>
    <a href="https://www.facebook.com/fivesistersfilm">
      <FontAwesomeIcon icon={faFacebook}/>
    </a>
    <a href="https://www.youtube.com/c/fivesistersfilms">
      <FontAwesomeIcon icon={faYoutube}/>
    </a>
    <a href="/">
      <FontAwesomeIcon icon={faTiktok}/>
    </a>
  </div>
}
