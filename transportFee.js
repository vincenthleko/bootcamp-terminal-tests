export function transportFee (workingShift) {
    if (workingShift === 'morning') {
      return 'R20';
    } else if (workingShift === 'afternoon') {
      return 'R10';
    } else {
      return 'free';
    }
  }