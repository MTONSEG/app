import GithubIcon from '@icons/github.svg?react'
import LinkedinIcon from '@icons/linkedin.svg?react'
import YoutubeIcon from '@icons/youtube.svg?react'

export const useSocialIcons = () => {
  const socialIconMap = {
    github: <GithubIcon />,
    linkedin: <LinkedinIcon />,
    youtube: <YoutubeIcon />,
  }

  return { socialIconMap }
}
