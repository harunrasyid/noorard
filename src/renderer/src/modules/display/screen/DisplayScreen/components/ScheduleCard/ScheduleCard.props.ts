import { EThemeMode } from '@renderer/constants'

export enum EScheduleCardVariant {
  Default = 'default',
  Active = 'active'
}

export interface IScheduleCardProps {
  title: string
  time: string
  variant?: EScheduleCardVariant
  theme?: EThemeMode
}
