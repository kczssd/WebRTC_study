import React,{useState,useEffect,createRef} from 'react'

let recorder;
export default function displayMedia() {
    let vedioOutput = createRef();
    let preview = createRef();
    async function initRecorder(){
        // let stream = await navigator.mediaDevices.getDisplayMedia()//浏览器端
        let stream = await navigator.mediaDevices.getUserMedia({
            audio:false,
            video:{
                mandatory:{
                    chromeMediaSource:'desktop',
                    minWidth:1280,
                    maxWidth:1280,
                    minHeight:720,
                    maxHeight:720
                }
            }
        })//electron端
        preview.current.srcObject = stream;
        recorder = new MediaRecorder(stream,{mimeType:'video/webm;codecs=h264'});
        recorder.ondataavailable = (e)=>{
            vedioOutput.current.src = URL.createObjectURL(e.data)
        }
    }
    useEffect(() => {
        initRecorder()
    }, []);
    function Record(){
        recorder.start();//传入参数可以分段获取
    }
    function Pause() {
        recorder.pause();
    }
    function Resume() {
        recorder.resume()
    }
    function Stop() {
        recorder.stop()
    }
    return (
        <>
            <video ref={preview} width="300" height="200" autoPlay></video>
            <div>
                <button onClick={()=>Record()}>Record</button>
                <button onClick={()=>Pause()}>Pause</button>
                <button onClick={()=>Resume()}>Resume</button>
                <button onClick={()=>Stop()}>Stop</button>
            </div>
            <video ref={vedioOutput} width="400" height="300" controls autoPlay></video>
        </>
    )
}
