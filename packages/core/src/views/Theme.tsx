import React, { memo } from 'react'

import { isWeb } from '../constants/platform'
import { wrapThemeManagerContext } from '../helpers/wrapThemeManagerContext'
import { useChangeThemeEffect } from '../static'
import { ThemeName } from '../types'

// bugfix esbuild strips react jsx: 'preserve'
React['createElement']

export type ThemeProps = {
  className?: string
  disableThemeClass?: boolean
  name: Exclude<ThemeName, number> | null
  children?: any
}

export const Theme = memo((props: ThemeProps) => {
  const { name, theme, themeManager, themes, className } = useChangeThemeEffect(props.name)

  if (!themes) {
    console.warn('Error, no themes in context', props)
    return props.children
  }

  if (!name || !theme) {
    if (process.env.NODE_ENV === 'development' && name && !theme) {
      console.warn(`No theme found by name ${name}`)
    }
    return props.children
  }

  const contents = wrapThemeManagerContext(props.children, themeManager)

  if (isWeb) {
    if (props.disableThemeClass) {
      return contents
    }
    return (
      <div
        className={
          props.className ? `${className || ''} ${props.className || ''}` : className || ''
        }
        style={{
          display: 'contents',
          // in order to provide currentColor, set color by default
          color: themes[name]?.color?.toString(),
        }}
      >
        {contents}
      </div>
    )
  }

  return contents
})
