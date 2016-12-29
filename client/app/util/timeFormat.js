export const toDate = (date) => {
  if (!date) {
    return '';
  }

  const months = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const getOrdinal = (n) => {
    const s = ["th","st","nd","rd"];
    const v = n % 100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
  };

  date = date.split('T')[0] || '2016-01-01';
  date = date.split('-');

  const year = Number(date[0]);
  const month = Number(date[1]);
  const day = Number(date[2]);

  return months[month - 1] + ' ' + getOrdinal(day) + ' ' + year;
};

export const toMonth = (date) => {
  
  const months = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"];

  date = date.split('T')[0] || '2016-01-01';
  date = date.split('-');

  const year = Number(date[0]);
  const month = Number(date[1]);
  const day = Number(date[2]);

  return months[month - 1] + ' ' + year;

};