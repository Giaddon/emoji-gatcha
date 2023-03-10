const emojiLibrary = {
  emojis: [
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐คฃ',
    '๐ฅฒ',
    '๐ฅน',
    '๐',
    'โบ๏ธ',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐ฅฐ',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐คช',
    '๐คจ',
    '๐ง',
    '๐ค',
    '๐',
    '๐ฅธ',
    '๐คฉ',
    '๐ฅณ',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    'โน๏ธ',
    '๐ฃ',
    '๐',
    '๐ซ',
    '๐ฉ',
    '๐ฅบ',
    '๐ข',
    '๐ญ',
    '๐ฎโ๐จ',
    '๐ค',
    '๐ ',
    '๐ก',
    '๐คฌ',
    '๐คฏ',
    '๐ณ',
    '๐ฅต',
    '๐ฅถ',
    '๐ฑ',
    '๐จ',
    '๐ฐ',
    '๐ฅ',
    '๐',
    '๐ซฃ',
    '๐ค',
    '๐ซก',
    '๐ค',
    '๐ซข',
    '๐คญ',
    '๐คซ',
    '๐คฅ',
    '๐ถ',
    '๐ถโ๐ซ๏ธ',
    '๐',
    '๐',
    '๐ฌ',
    '๐ซ ',
    '๐',
    '๐ฏ',
    '๐ฆ',
    '๐ง',
    '๐ฎ',
    '๐ฒ',
    '๐ฅฑ',
    '๐ด',
    '๐คค',
    '๐ช',
    '๐ต',
    '๐ตโ๐ซ',
    '๐ซฅ',
    '๐ค',
    '๐ฅด',
    '๐คข',
    '๐คฎ',
    '๐คง',
    '๐ท',
    '๐ค',
    '๐ค',
    '๐ค',
    '๐ค ',
  ],
  getEmoji() {
    const selectedEmojiIdx = Math.floor(Math.random() * this.emojis.length);
    return this.emojis[selectedEmojiIdx];
  },


}

class GatchaCapsule {
  constructor(emoji) {
    this.emoji = emoji;
  }
  render() {
    const spanEl = document.createElement('span');
    spanEl.classList.add('gatcha_capsule');
    spanEl.textContent = this.emoji;
    spanEl.style = `
      position: relative;
      display: flex;
      border: 1px solid black; 
      border-radius: 50%; 
      height: 3rem; 
      width: 3rem;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      overflow: hidden;
      transform: rotate(${Math.floor(Math.random() * 360)}deg) translate(${Math.floor(Math.random() * (10 - -10) + -10)}px, ${Math.floor(Math.random() * (10 - -10) + -10)}px);
      top: 5;
    `
    const bottomEl = document.createElement('span');
    bottomEl.style = `
      position: absolute;
      display: block;
      height: 50px; 
      width: 50px;
      background-color: rgba(1,1,245,0.5);
      transform: translateY(50%);
      border: 1px solid rgb(1,1,245);
    `
    spanEl.append(bottomEl);
    return spanEl;
  }


}

document.querySelector("button").addEventListener('click', removeCapsule);

function removeCapsule() {
  const capsules = document.querySelector('.container').children;
  const selectedCapsule = capsules[Math.floor(Math.random() * capsules.length)]
  selectedCapsule.style.removeProperty('transform');
  selectedCapsule.children[0].remove();
  document.getElementById("winning-area").append(selectedCapsule);
}


for (let i = 0; i < 25; i++) {
  const capsule = new GatchaCapsule(emojiLibrary.getEmoji());
  document.querySelector('.container').append(capsule.render());
}