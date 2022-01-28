export const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
})