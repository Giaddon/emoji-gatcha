const emojiLibrary = {
  emojis: [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🤣',
    '🥲',
    '🥹',
    '😊',
    '☺️',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '🥰',
    '😘',
    '😗',
    '😙',
    '😚',
    '😋',
    '😛',
    '😝',
    '😜',
    '🤪',
    '🤨',
    '🧐',
    '🤓',
    '😎',
    '🥸',
    '🤩',
    '🥳',
    '😏',
    '😒',
    '😞',
    '😔',
    '😟',
    '😕',
    '🙁',
    '☹️',
    '😣',
    '😖',
    '😫',
    '😩',
    '🥺',
    '😢',
    '😭',
    '😮‍💨',
    '😤',
    '😠',
    '😡',
    '🤬',
    '🤯',
    '😳',
    '🥵',
    '🥶',
    '😱',
    '😨',
    '😰',
    '😥',
    '😓',
    '🫣',
    '🤗',
    '🫡',
    '🤔',
    '🫢',
    '🤭',
    '🤫',
    '🤥',
    '😶',
    '😶‍🌫️',
    '😐',
    '😑',
    '😬',
    '🫠',
    '🙄',
    '😯',
    '😦',
    '😧',
    '😮',
    '😲',
    '🥱',
    '😴',
    '🤤',
    '😪',
    '😵',
    '😵‍💫',
    '🫥',
    '🤐',
    '🥴',
    '🤢',
    '🤮',
    '🤧',
    '😷',
    '🤒',
    '🤕',
    '🤑',
    '🤠',
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