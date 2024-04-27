import React, { CSSProperties } from "react"
import { ScrollBar as ScrollbarDemo } from '@/libs/main'

export const ScrollBar: React.FC<{
  autoHide: boolean,
  barStyle?: CSSProperties
}> = ({
  autoHide,
  barStyle
}) => {
  return (
    <ScrollbarDemo
      autoHide={!!autoHide}
      barStyle={barStyle}
      content={
        <div style={{ width: 460, height: 1000, backgroundColor: '#ccc', padding: 20 }}>nk-plus-components</div>
      }
    />
  )
}
