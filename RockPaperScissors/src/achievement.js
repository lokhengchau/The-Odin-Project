class Achievement {
  constructor(title, description, fn) {
    this.title = title;
    this.description = description;
    this.achieved = false;
    this.activate = fn;
  }
}

function firstWin(playerRecord) {
  if (playerRecord.score === 1) {
    this.achieved = true;
  }
}

function firstLoss(playerRecord) {
  if (playerRecord.loss === 1) {
    this.achieved = true;
  }
}

function firstTie(playerRecord) {
  if (playerRecord.tie === 1) {
    this.achieved = true;
  }
}

const achievementArray = [
  new Achievement(
    'First Step Success',
    'Winning your first game',
    firstWin,
  ),
  new Achievement(
    'Fist Loss Lesson',
    'Losing your first game',
    firstLoss,
  ),
  new Achievement(
    'Opening Deadlock',
    'Having your first tied game',
    firstTie,
  ),
];

function checkAchievements(playerRecord) {
  achievementArray.forEach((achievement) => {
    if (achievement.achieved === false) {
      achievement.activate(playerRecord);
    }
  });
}

export default checkAchievements;