import React from 'react';
import {AbsoluteFill} from 'remotion';
import {theme} from '../theme';

export const SceneShell: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <AbsoluteFill
      style={{
        fontFamily: theme.fonts.sans,
        background: `linear-gradient(135deg, ${theme.colors.bgStart}, ${theme.colors.bgEnd})`,
        color: theme.colors.text,
        padding: 56,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
