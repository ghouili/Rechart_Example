import React from 'react'

import LineChartExample from './Pages/Recharts/LineChartExample';
import Areachart from './Pages/Recharts/Areachart';
import Pegion from './Components/Pegion';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}> 
    {/* <LineChartExample /> */}
    <Areachart />
    </div>
    // <Pegion />
  )
}

export default App