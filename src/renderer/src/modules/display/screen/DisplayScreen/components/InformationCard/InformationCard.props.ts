import { ReactNode } from 'react'
import { SystemStyleObject } from '@chakra-ui/react'
import { EThemeMode } from '@renderer/constants'

export interface IInformationCardProps {
  title?: string
  children: ReactNode
  style?: SystemStyleObject
  theme?: EThemeMode
}
