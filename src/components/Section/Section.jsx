import React from "react";
import {Frame} from './Section.styled'

const Section = ({title, children }) => (
  <Frame>
    <h2>{title}</h2>
    {children}
  </Frame>
)

export default Section;