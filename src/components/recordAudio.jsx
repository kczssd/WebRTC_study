import React,{useState,useEffect,createRef} from 'react'

let recorder;
//视频差不多
//录制屏幕 getDisplayMedia()
export default function recordAudio() {
    const [data, setdata] = useState(null);
    let audioOutput = createRef();
    async function initRecorder(){
        let stream = await navigator.mediaDevices.getUserMedia({audio:true,vedio:false})
        recorder = new MediaRecorder(stream,{mimeType:'video/webm;codecs=h264'});
        recorder.ondataavailable = (e)=>{
            audioOutput.current.src = URL.createObjectURL(e.data)
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
            <div>
                <button onClick={()=>Record()}>Record</button>
                <button onClick={()=>Pause()}>Pause</button>
                <button onClick={()=>Resume()}>Resume</button>
                <button onClick={()=>Stop()}>Stop</button>
            </div>
            <audio ref={audioOutput} controls></audio>
        </>
    )
}
