import React from 'react'
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import Card from '../components/common/Card'
import Version from '../components/common/Version'
import VersionHl from '../components/common/VersionHl'

export default {
  // Re-use the default mapping
  ...MDXComponents,

  // Tabs
  Tabs,
  TabItem,

  // Cards
  Card,

  // Versioned text
  Version,
  VersionHl
}
