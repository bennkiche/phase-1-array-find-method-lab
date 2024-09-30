function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  

  const winningYear = superbowlWin(record);
  console.log(winningYear);
