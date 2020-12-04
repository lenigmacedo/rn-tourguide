import * as React from 'react'
import { BorderRadiusObject, Shape } from '../types'
import { ConnectedStep } from './ConnectedStep'
import { TourGuideContext } from './TourGuideContext'

interface Props {
  name: string
  order: number
  title?: string
  text: string
  content?: any
  shape?: Shape
  active?: boolean
  maskOffset?: number
  borderRadius?: number
  keepTooltipPosition?: boolean
  tooltipBottomOffset?: number
  borderRadiusObject?: BorderRadiusObject
}

export const Step = (props: Props) => {
  const context = React.useContext(TourGuideContext)
  return <ConnectedStep {...{ ...props, context }} />
}
