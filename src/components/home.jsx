import React from 'react'
import { Link } from 'react-router-dom';

export default function home() {
    return (
        <div>
            Home
            <Link to="/enumerate"> 麦克风权限 </Link>
            <Link to="/camera"> 摄像头权限 </Link>
            <Link to="/record"> 录制 </Link>
            <Link to="/video"> 屏幕录制 </Link>
        </div>
    )
}
