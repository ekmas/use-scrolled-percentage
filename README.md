# use-scrolled-percentage

Use scrolled percentage is a react hook that calculates the scrolled percentage of a screen.

## Installation

```
npm i use-scrolled-percentage
```

## Usage

```
import React from 'react'
import useScrolledPercentage from 'use-scrolled-percentage'

export default function App() {
  let percent = useScrolledPercentage()
  
  return (
    <div>
      <div style={{ width: percent + '%', height: '10px', position: 'fixed', top: '0', backgroundColor: 'red' }}></div>
      <!-- 
      put here a bunch of text e.g. type Lorem2000 to generate 2000 words of dummy text 
      -->
    </div>
  )
}
```
