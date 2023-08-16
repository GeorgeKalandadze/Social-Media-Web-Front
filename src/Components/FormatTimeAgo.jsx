const FormatTimeAgo = (created_at) => {
    
  const createdTimestamp = new Date(created_at).getTime();
  const currentTime = new Date().getTime();
  const timeDifferenceInSeconds = Math.floor(
    (currentTime - createdTimestamp) / 1000
  );

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} second${
      timeDifferenceInSeconds > 1 ? "s" : ""
    } ago`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    return new Date(created_at).toLocaleString();
  }
};

export default FormatTimeAgo
