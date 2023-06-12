import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const data = [
  { id: 6, name: 'Home' },
  { id: 7, name: 'Plan' },
  { id: 8, name: 'Edu' },
  { id: 9, name: 'Seen' },
]
const SideBar = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    top: false, left: false, right: false, down: false
  })
  const buttons = [
    { id: 1, name: "Top", direction: () => setState({ ...state, top: true, right: false, left: false, down: false, }) },
    { id: 2, name: "Left", direction: () => setState({ ...state, left: true, top: false, right: false, down: false }) },
    { id: 3, name: "Right", direction: () => setState({ ...state, right: true, left: false, top: false, down: false }) },
    { id: 4, name: "Down", direction: () => setState({ ...state, down: true, top: false, right: false, left: false }) },
    { id: 5, name: "Go Back", direction: () => navigate("/") },
    { id: 5, name: "Next", direction: () => navigate("/") },
  ]
  console.log(state)
  return (
    <div>
      <Box width='35%' margin="auto" textAlign='center'>
        <Typography
          sx={{ padding: '10px', }}>
          Animated Side Bar & Close Button From All Directions
        </Typography>
        {buttons.map((button) =>
          <React.Fragment key={button.id}>
            <Button onClick={button.direction}>{button.name}</Button>
          </React.Fragment>

        )}
      </Box>

      {state.left && <div className='drawer-container-left '>
        <div className='close-btn'
          onClick={() => setState({ ...state, left: false })}>
          Close</div>
        {data.map((item) =>
          <div
            key={item.id}>
            <p className='drawer-list' onClick={() => setState({ ...state, left: false })}>{item.name}</p>

          </div>
        )}

      </div>}

      {state.right && <div className='drawer-container-right '>
        <div
          style={{
            cursor: 'pointer',
            display: 'flex', justifyContent: 'flex-start', padding: '10px'
          }}
          onClick={() => setState({ ...state, right: false })}>
          Close</div>
        {data.map((item) =>
          <div
            key={item.id}>
            <p className='drawer-list' onClick={() => setState({ ...state, right: false })}>{item.name}</p>

          </div>
        )}

      </div>}
      {state.top && <div className='drawer-container-top '>
        <div
          style={{
            cursor: 'pointer',
            display: 'flex', justifyContent: 'center', padding: '10px',

          }}
          onClick={() => setState({ ...state, top: false })}>
          Close</div>
        {data.map((item) =>
          <div
            key={item.id}>
            <p className='drawer-list' onClick={() => setState({ ...state, top: false })}>{item.name}</p>

          </div>
        )}

      </div>}
      {state.down && <div className='drawer-container-down '>
        <div
          style={{
            cursor: 'pointer',
            display: 'flex', justifyContent: 'center', padding: '10px'
          }}
          onClick={() => setState({ ...state, down: false })}>
          Close</div>
        {data.map((item) =>
          <div
            key={item.id}>
            <p className='drawer-list' onClick={() => setState({ ...state, down: false })}>{item.name}</p>

          </div>
        )}

      </div>}




    </div>
  )
}

export default SideBar
