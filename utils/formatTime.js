const regex = /(\d{2})-(\d{2})-\d{4}/

const timeFormatted = (time) => time?.replace(regex, "$1/$2")

export default timeFormatted

