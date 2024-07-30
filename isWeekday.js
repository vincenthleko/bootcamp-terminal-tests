export function isWeekday (day) {
    const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const lowerCaseDay = day.toLowerCase();
    return weekDays.includes(lowerCaseDay);
  }