import React from 'react'

const ProgressBar = ({bgcolor,progress,height ,tech}) => {
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin:40
      }

      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }

      const progresstext = {
        padding: 5,
        color: 'black',
        fontWeight: 900
      }

    return (
    <div style={Parentdiv}>
    <p className='text-xs text-orange-400 font-semibold'>{tech}</p>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}

export default ProgressBar
