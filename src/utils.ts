export const getWeatherIconURL = (iconCode: string) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

export const formatToReadableDate = (date: Date) => {
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}
