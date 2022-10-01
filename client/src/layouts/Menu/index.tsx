import React, { ReactNode } from 'react'

const Menu = ({ children }: { children: ReactNode }) => (
  <>
    <div style={{ height: '100px', backgroundColor: 'red' }} />
    {children}
  </>
)

export default Menu
