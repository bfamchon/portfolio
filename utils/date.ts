export const transformTwoDatesToStringPeriod = (from: Date, to: Date | undefined) => {
  console.log(from, to);
  const transformedFrom = new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    year: 'numeric'
  }).format(from);

  let transformedTo = 'Today';
  if (to) {
    transformedTo = new Intl.DateTimeFormat('en-GB', {
      month: 'long',
      year: 'numeric'
    }).format(to);
  }

  return `${transformedFrom} - ${transformedTo}`;
};
