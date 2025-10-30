import profileImgLarge from '~/assets/gyanu.png';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/gyanu.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
<Fragment>
  <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
    <DecoderText text="Hi there" start={visible} delay={500} />
  </Heading>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    I’m a software developer based in Hyderabad with experience spanning backend systems, frontend development, and design systems. I focus on creating scalable, efficient, and user-friendly software. Continuous learning and crafting quality solutions define my approach.
  </Text>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    My proficiencies include modern programming languages, responsive UI frameworks, RESTful APIs, and event-driven architectures. I embrace open source and collaborative development to build maintainable products.
  </Text>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    In my free time,<b> I enjoy watching movies, playing cricket, and video games. I have a strong interest in building games myself, though I haven’t yet had the opportunity to pursue this fully—an ambition I am eager to explore when possible.</b>
  </Text>
  <Text className={styles.description} data-visible={visible} size="l" as="p">
    Feel free to connect with me on{' '}
    <Link href="https://www.linkedin.com/in/vignaan-chintapalli-b190aa218/" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </Link>{' '}
    for professional discussions or collaborations.
  </Text>
</Fragment>



);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
