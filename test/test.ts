import TimeConverter from "../src";


const timeConverter = new TimeConverter();

console.log("Local to UTC:", timeConverter.toUTC("2024-12-14T10:30:00"));
console.log("UTC to IST:", timeConverter.toTimezone("2024-12-14T05:00:00Z", "IST"));