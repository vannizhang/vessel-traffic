import React from 'react'

export const MainenanceMessage = () => {
  return (
    <div 
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 10,
            background: `linear-gradient(180deg, rgba(27, 82, 139, 1) 0%, rgba(27, 82, 139, 0) 75% )`,
            pointerEvents: 'none'
        }}
    >
        <p style={{
            color: 'white',
            fontSize: '1.25rem',
            maxWidth: '1200px',
            margin: '1rem auto'
        }}>
            We are currently undergoing essential maintenance to enhance your app experience. We apologize for any inconvenience this may cause and thank you for your patience. We'll be back with an improved and more stable app shortly. In the meantime, vessel traffic data is still available for download here, in the "Download Options" menu. Stay tuned for updates!
        </p>
    </div>
  )
}
