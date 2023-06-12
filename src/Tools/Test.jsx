import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Test() {
    const [showUp, setShowUp] = React.useState(false)
    const [showDown, setShowDown] = React.useState(false)
    const [showLeft, setShowLeft] = React.useState(false)
    const [showRight, setShowRight] = React.useState(false)

    const button = [
        {
            name: 'Left', place: () => { setShowLeft(true); setShowDown(false); setShowUp(false); setShowRight(false) }
        },
        {
            name: 'Right',
            place: () => { setShowRight(true); setShowLeft(false); setShowDown(false); setShowUp(false) }
        },
        {
            name: 'Up',
            place: () => { setShowUp(true); setShowRight(false); setShowLeft(false); setShowDown(false) }
        },

        {
            name: 'Down', place: () => { setShowDown(true); setShowUp(false); setShowRight(false); setShowLeft(false) }
        },
    ]
    return (
        <>
         <Link to='/side-bar'>
            <Button className='btn'>Click to next page</Button>
            </Link>
            <div className='box'>
                {/* Menu Grow Down */}
                <div className='dropdown'>
                    <span>GrowDown</span>
                    <div className='dropdown-content'>
                        {data.map((item) =>
                            <p className='item'>{item.name}</p>
                        )}
                    </div>
                </div>

                {/* Rotate Menu */}
                <div className='dropdown'>
                    <span>Rotate</span>
                    <div className='dropdown-content'>
                        {data.map((item) =>
                            <p className='rotate-menu'>{item.name}</p>
                        )}
                    </div>
                </div>

                {/* Downout */}
                <div className='dropdown'>
                    <span>DownOut</span>
                    <div className='dropdown-content'>
                        {data.map((item) =>
                            <p className='down-out'>{item.name}</p>
                        )}
                    </div>
                </div>
                {/* DownOut */}
                <div className='dropdown'>
                    <span>RotateY</span>
                    <div className='dropdown-content'>
                        {data.map((item) =>
                            <p className='rotate-Y'>{item.name}</p>
                        )}
                    </div>
                </div>

                {/* Slide-down */}
                <div className='dropdown'>
                    <span>Slide down</span>
                    <div className='dropdown-content'>
                        {data.map((item) =>
                            <p className='slide-down'>{item.name}</p>
                        )}
                    </div>
                </div>
                {/* RotateX */}
                <div className='dropdown'>
                    <span>Rotate-X</span>
                    <div className='dropdown-content'>
                        {data.map((item) =>
                            <p className='rotate-X'>{item.name}</p>
                        )}
                    </div>
                </div>

                {/* TranslateX */}
                <div className='dropdown'>
                    <span>TranslateX</span>
                    <div className='dropdown-content'>
                        {data.map((item) =>
                            <p className='translate-x'>{item.name}</p>
                        )}
                    </div>
                </div>


            </div>

            {/* Drawer Component */}
            <div className='nav'>
                <div>
                    {button.map((item) =>
                        <Button
                            onClick={item.place}>{item.name}
                        </Button>
                    )}
                </div>
            </div>

            {showRight && <div className='containerRight'>
                {data.map((data) =>
                    <p className='box-item'>{data.name}</p>
                )}

            </div>}

            {showLeft && <div className='containerLeft'>
                {data.map((data) =>
                    <p className='box-item'>{data.name}</p>
                )}

            </div>}

            {showUp && <div className='containerUp'>
                {data.map((data) =>
                    <p className='box-item-up'>{data.name}</p>
                )}

            </div>}
            {showDown && <div className='container-down'>
                {data.map((data) =>
                    <p className='box-item-down'>{data.name}</p>
                )}

            </div>}

           
            
        </>

    )
}

export default Test

 export const data = [
    { name: 'Home' },
    { name: 'Plan' },
    { name: 'Edu' },
    { name: 'Seen' },

]

