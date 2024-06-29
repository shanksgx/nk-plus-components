import React, { CSSProperties } from "react"
import { ScrollArea, ScrollBar as ScrollBarIn } from "@/components/ui/scroll-area";

const ScrollBar: React.FC<{
  children: React.ReactNode,
  barStyle?: CSSProperties
}> = ({
  children,
  barStyle = { width: 500, height: 300 }
}) => {
    return (
      <ScrollArea style={barStyle} className="nk-mx-auto nk-border nk-rounded-md">
        {children}
        <ScrollBarIn orientation="horizontal" />
      </ScrollArea>
    )
  }

export default ScrollBar
