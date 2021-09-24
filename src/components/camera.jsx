import React,{useEffect,createRef} from 'react'

export default function camera() {
    const videoOutput = createRef();
    const canvas = createRef();
    async function setVedioStream(){
        videoOutput.current.srcObject = await navigator.mediaDevices.getUserMedia({video:true,audio:false})
    }
    function takePhoto(){
        let canvas2D = canvas.current.getContext("2d")
        canvas2D.drawImage(videoOutput.current,0,0,400,300)
    }
    useEffect(()=>{
        setVedioStream();
    },[])
    return (
        <div>
            <video ref={videoOutput} autoPlay width="400" height="300">

            </video>
            <button onClick={takePhoto} >拍照</button>
            <canvas ref={canvas} width="400" height="300">
                
            </canvas>
        </div>
    )
}
