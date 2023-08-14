const FormatTimeAgo = (created_at) => {
    
  const createdTimestamp = new Date(created_at).getTime();
  const currentTime = new Date().getTime();
  const timeDifferenceInSeconds = Math.floor(
    (currentTime - createdTimestamp) / 1000
  );

  if (timeDifferenceInSeconds < 60) {
    // Less than a minute
    return `${timeDifferenceInSeconds} second${
      timeDifferenceInSeconds > 1 ? "s" : ""
    } ago`;
  } else if (timeDifferenceInSeconds < 3600) {
    // Less than an hour
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInSeconds < 86400) {
    // Less than a day
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    // Display the full date and time
    return new Date(created_at).toLocaleString();
  }
};

export default FormatTimeAgo
