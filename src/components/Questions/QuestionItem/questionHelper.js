export function getQuestion(
  index = 0,
  topic = [],
  BASE_LANG = 'eng',
  SECOND_LANG = 'rus',
) {
  if (topic.length > 0) {
    let question = topic[index];
    let randomQuestions = [];
    let trueAnswerIndex = getRand([], 0, 3);

    let resultObj = {};
    for (let i = 0; i < 3; i++) {
      let rand = getRand([index, ...randomQuestions], 0, topic.length - 1);
      randomQuestions.push(rand);
      resultObj[`rus${i + 1}`] = topic[randomQuestions[i]][SECOND_LANG];
    }

    resultObj[`rus${trueAnswerIndex + 1}`] = question[SECOND_LANG];
    resultObj.eng = question[BASE_LANG].replace('**', '');
    return resultObj;
  }
}

function getRand(blackList, min, max) {
  const maxIteration = 5000;
  let rand = -1;
  let counter = 0;
  while (rand === -1 || blackList.includes(rand)) {
    rand = Math.floor(Math.random() * max) + min;
    if (counter++ === maxIteration) {
      return 0;
    }
  }

  return rand;
}
