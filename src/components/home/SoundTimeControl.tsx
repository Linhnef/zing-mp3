import { ChangeEvent, useRef, useState } from "react"
import SoundTime from "../item/SoundTime"

interface SoundTimeControlProps {
  song: any
}

function SoundTimeControl(props: SoundTimeControlProps) {
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = (audio.duration / 100) * event.target.valueAsNumber
      setPercentage(event.target.valueAsNumber)
    }
  }
  const getCurrDuration = (event: ChangeEvent<HTMLAudioElement>) => {
    const percent = ((event.currentTarget.currentTime / event.currentTarget.duration) * 100).toFixed(2)
    const time: number = event.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time)
  }
  const play = () => {
    const audio = audioRef.current
    if (!audio) return
    if (!isPlaying) {
      audio.play()
      setIsPlaying(true)
    }
  }

  const stop = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <>
      <SoundTime
        isPlay={isPlaying}
        play={play}
        stop={stop}
        currentTime={currentTime}
        duration={duration}
        percentage={percentage}
        onChange={onChange}
      />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(event: ChangeEvent<HTMLAudioElement>) => {
          setDuration(event.currentTarget.duration)
        }}
        src={props.song}
      />
    </>
  )
}

export default SoundTimeControl
