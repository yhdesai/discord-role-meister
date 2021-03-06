function isEmoji(str) {
  const ranges = [
    '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
    '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
    '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
  ];
  if (str.match(ranges.join('|'))) {
    return true;
  }
  return false;
}

export const reactWithArray =
async function reactWithArray(msg, emojiArr) {
  emojiArr.forEach(emoji => {
    if (isEmoji(emoji)) {
      msg.react(emoji).catch(() => null);
    } else {
      msg
        .react(msg.guild.emojis.find('name', emoji))
        .catch(() => null);
    }
  });
};

export default reactWithArray;
