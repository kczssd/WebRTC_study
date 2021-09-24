import React,{useEffect,useState,createRef} from 'react'

export default function enumerateDevices() {
    const [audioDevices, setaudioDevices] = useState(null)
    const [audioCurrent, setaudioCurrent] = useState(0);
    const audioOutput = createRef();
    async function findAudioDevices(){
        let devices = await navigator.mediaDevices.enumerateDevices()
        let audioDevices = devices.filter((value)=>value.kind==="audioinput")
        setaudioDevices(audioDevices);
    }
    async function setAudioStream(index){
        // console.log("设置流")
        let stream = await navigator.mediaDevices.getUserMedia({vedio:false,audio:audioDevices[index]})
        audioOutput.current.srcObject = stream;
    }
    useEffect(() => {
        findAudioDevices();
    },[])
    useEffect(() => {
        if(audioDevices)setAudioStream(audioCurrent)
    }, [audioCurrent,audioDevices]);
    return (
        <div>
            <div>
            <audio ref = {audioOutput} controls></audio>
            </div>
            <select
            value={audioDevices?audioDevices[audioCurrent].label:"暂无设备"}
            onChange={(select)=>{
                setaudioCurrent(audioDevices.map((item)=>item.label).indexOf(select.target.value))
            }}>
                {audioDevices?.map((item,index)=>{
                    return <option value={item.label} key={index}>{item.label}</option>
                })}
            </select>
        </div>
    )
}
