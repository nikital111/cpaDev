import React, { useEffect, useState } from "react";
import Smile from "./Smile";
import { makeStyles, withWidth } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  smileOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const SmileRain = ({ width, sound }) => {
  const classes = useStyles();

  const phrases = [
    { phrase: "бурж робит🌐" },
    { phrase: "СНГ есть❓" },
    { phrase: "базы выдаёте?👁‍🗨" },
    { phrase: "от куда траф?🔍" },
    { phrase: "топы здесь✅" },
    { phrase: "домены в бане⛔️" },
    { phrase: "админам привет🖐" },
    { phrase: "смените домены❗️❗️❗️" },
    { phrase: `KZ принимайте?` },
    { phrase: "платёжка робит💲" },
    { phrase: "биллинг дал добро♻️" },
    { phrase: "просьба снять трафик🙏" },
    { phrase: "займите на траф😞" },
    { phrase: "где скрипт автозамены ссылок❓" },
    { phrase: "базы нужны🧾" },
    { phrase: "когда выплата📅" },
    { phrase: "уменьшите минималку📉" },
    { phrase: "пуши рип😵" },
    { phrase: "старые ссылки также работают📢" },
    { phrase: "редики сдохли🏴‍☠️" },
    { phrase: "клоаке кто научит❓" },
    { phrase: "тема жива❓" },
    { phrase: "кто льёт через фб❓" },
    { phrase: "а что так можно было?😅" },
    { phrase: "слил схему😁" },
    { phrase: "где кнопка бабло❓💰" },
    { phrase: "одну красноту выдаёт❌" },
    { phrase: "сегодня были выплаты❓" },
    { phrase: "снг туго идёт🆘" },
    { phrase: "новучите лить🤗" },
    { phrase: "понижение комиссии будет❓📉" },
    { phrase: "норм идут на оплату🤑" },
    { phrase: "скок проходка по РУ📊" },
    { phrase: "продам зенку📢" },
    { phrase: "почисти кеш❗️📢❗️" },
    { phrase: "шейвите?😆" },
    { phrase: "где взять рефку❗️❓" },
  ];

  const renderPhrases = (phrases) => {
    let elements = [];
    let countOfPhrases = 15;
    if (width === "xs") {
      countOfPhrases = 10;
    }
    const randomNumbers = [];
    for (let i = 0; i < countOfPhrases; i++) {
      for (let g = 0; g < countOfPhrases; g++) {
        let number = Math.floor(Math.random() * 100);
        randomNumbers.push(Math.floor(Math.random() * 100));
      }
      const phrase = phrases[Math.floor(Math.random() * phrases.length)];
      phrase.id = uuidv4();

      let duration = Math.floor(Math.random() * 30);
      if (duration < 10) {
        duration += 10;
      }
      elements.push(
        <Smile
          id={phrase.id}
          phrase={phrase.phrase}
          duration={duration}
          number={randomNumbers[i]}
          sound={sound}
        />
      );
    }
    return elements;
  };

  const [items, setItems] = useState(renderPhrases(phrases));
  return <div className={classes.smileOverlay}>{items}</div>;
};

export default withWidth()(SmileRain);
