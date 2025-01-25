export const getRelativeTime = (dateString: string): string => {
  const currentDate = new Date();
  const inputDate = new Date(dateString);
  const diffInMs = currentDate.getTime() - inputDate.getTime(); // Difference in milliseconds

  const diffInSeconds = Math.floor(diffInMs / 1000); // Convert to seconds
  const diffInMinutes = Math.floor(diffInSeconds / 60); // Convert to minutes
  const diffInHours = Math.floor(diffInMinutes / 60); // Convert to hours
  const diffInDays = Math.floor(diffInHours / 24); // Convert to days
  const diffInWeeks = Math.floor(diffInDays / 7); // Convert to weeks
  const diffInMonths = Math.floor(diffInDays / 30); // Convert to months
  const diffInYears = Math.floor(diffInDays / 365); // Convert to years

  if (diffInSeconds < 60) {
    return 'Just now';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}m`;
  } else if (diffInHours < 24) {
    return `${diffInHours}hr`;
  } else if (diffInDays < 7) {
    return `${diffInDays}d`;
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks}w`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}mo`;
  } else {
    return `${diffInYears}yr`;
  }
}