import React from 'react'
import Commonnav from './Commonnav'

export default function CommonLayout({ children }) {
  return (
    <div>
      <Commonnav />

      {/* spacing so content is not hidden behind navbar */}
      <div style={{ marginTop: "70px" }}>
        {children}
      </div>

    </div>
  )
}