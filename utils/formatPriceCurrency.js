const currencyCoinRegex = /(\d)(?=(\d{3})+(?!\d))/g

const coinReplaced = (str) => str?.replace(currencyCoinRegex, "$1,")

export default coinReplaced

