import { DateTime } from './luxon.js';

const localDate = DateTime.local().toLocaleString(DateTime.DATE_MED);
const { hour } = DateTime.local().c;
const min = DateTime.local().c.minute;

export { localDate, hour, min };
