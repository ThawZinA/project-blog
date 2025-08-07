'use client'
import React from 'react';
import { MotionConfig } from 'framer-motion';

function MotionPreference({children}) {
  return (
    <MotionConfig>
      {children}
    </MotionConfig>
  );
}

export default MotionPreference;
