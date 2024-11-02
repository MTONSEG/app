/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_API_SHAKE: string
  readonly VITE_API_PROFILE: string
  readonly VITE_API_PROFILE_STAT: string
  readonly VITE_API_LANGUAGE: string
  readonly VITE_API_LEVELS: string
  readonly VITE_API_BOOSTER_RECHARGE: string
  readonly VITE_API_BOOSTER_TURBO: string
  readonly VITE_API_BOOSTER_CRITICAL_CHANCE: string
  readonly VITE_API_BOOSTER_CRITICAL_COF: string
  readonly VITE_API_BOOSTER_EARN_SHAKE: string
  readonly VITE_API_BOOSTER_EVERGY_VOLUME: string
  readonly VITE_API_BOOSTER_RECHARGING_SPEED: string
  readonly VITE_API_BOOSTERS: string
  readonly VITE_API_ROADMAP: string
  readonly VITE_API_GAMES: string
  readonly VITE_API_INVITES: string
  readonly VITE_API_STATS_FRIENDS: string
  readonly VITE_API_STATS_INVITES: string
  readonly VITE_API_DAILY_REWARDS: string
  readonly VITE_API_QUESTS_DAILY: string
  readonly VITE_API_QUESTS_ONE_TIME: string
  readonly VITE_API_GROWTH_REWARDS: string
  readonly VITE_SHAKE_THROTTLING: number
  readonly VITE_SHAKE_THROTTLING: number
  readonly VITE_SHAKE_OUT_TIME: number
  readonly VITE_SHAKE_ALL_TIME: number
  readonly VITE_SHAKE_ANIMATE_TIME: number
  readonly VITE_INVITE_LINK: string
  readonly VITE_INVITE_COIN: number
  readonly VITE_INVITE_COIN_PREMIUM: number
  readonly VITE_BOT_LINK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.svg' {
  import { FC, SVGProps } from 'react'

  const content: FC<SVGProps<SVGSVGElement>>
  export default content
}
