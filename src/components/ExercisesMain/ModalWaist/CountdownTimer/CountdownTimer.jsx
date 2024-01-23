import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import sprite from "../sprite.svg";
import {
  StartBtn,
  PauseBtn,
  TimerWrapper,
  TimerTitle,
  Clock,
  IconWrapper,
  BurnedCalories,
} from "./CountdownTimer.styled";

const CountdownTimer = ({
  customKey = 1,
  timer = 3,
  handleTime,
  dynamicBurnCal,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [burnedCalories, setBurnedCalories] = useState(dynamicBurnCal);

  const formatNumber = number => (number < 10 ? `0${number}` : number);

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    const formattedMinutes = formatNumber(minutes);
    const formattedSeconds = formatNumber(seconds);

    return (
      <Clock>
        {formattedMinutes}:{formattedSeconds}
      </Clock>
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <CountdownCircleTimer
        key={customKey}
        size="124"
        isPlaying={isPlaying}
        duration={timer * 60}
        colors={["#E6533C"]}
        strokeWidth={4}
        strokeDashoffset={true}
        trailColor="#262625"
        onUpdate={remainingTime => {
          handleTime(remainingTime);
          // Обновление значения сожженных калорий при обновлении таймера
          const percentage = (timer * 60 - remainingTime) / (timer * 60);
          const updatedBurnedCalories = Math.round(dynamicBurnCal * percentage);
          setBurnedCalories(updatedBurnedCalories);
        }}
        onComplete={() => ({ shouldRepeat: true })}
      >
        {children}
      </CountdownCircleTimer>
      <IconWrapper onClick={togglePlayPause}>
        {isPlaying ? (
          <PauseBtn>
            <use href={`${sprite}#icon-pause`} />
          </PauseBtn>
        ) : (
          <StartBtn>
            <use href={`${sprite}#icon-play`} />
          </StartBtn>
        )}
      </IconWrapper>
      <BurnedCalories>
        Burned calories:&nbsp;<span>{burnedCalories}</span>
      </BurnedCalories>
    </TimerWrapper>
  );
};

export default CountdownTimer;
