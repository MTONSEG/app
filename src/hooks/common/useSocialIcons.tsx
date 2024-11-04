import GithubIcon from '@icons/github.svg?react'
import LinkedinIcon from '@icons/linkedin.svg?react'
import YoutubeIcon from '@icons/youtube.svg?react'

export const useSocialIcons = () => {
  const socialIconMap = {
    github: {
      icon: <GithubIcon />,
      color: '#000',
    },
    linkedin: {
      icon: <LinkedinIcon />,
      color: '#0977d1',
    },
    youtube: {
      icon: <YoutubeIcon />,
      color: '#f44336',
    },
  }

  return { socialIconMap }
}
