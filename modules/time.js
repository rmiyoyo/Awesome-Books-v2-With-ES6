/* eslint-disable no-undef */

const localDate = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_MED);
const { hour } = luxon.DateTime.local().c;
const min = luxon.DateTime.local().c.minute;
export {
  localDate, hour, min,
};