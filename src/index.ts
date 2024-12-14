type TimezoneOffsets = {
  [key: string]: number;
};

class TimeConverter {
  private timezoneOffsets: TimezoneOffsets;

  constructor() {
    this.timezoneOffsets = this.getTimezoneOffsets();
  }

  // Method to get timezone offsets in minutes
  private getTimezoneOffsets(): TimezoneOffsets {
    return {
      "GMT": 0,
      "IST": 330, // Indian Standard Time (GMT+5:30)
      "EST": -300, // Eastern Standard Time (GMT-5)
      "PST": -480, // Pacific Standard Time (GMT-8)
      // Add more time zones as needed
    };
  }

  // Convert local time to UTC
  toUTC(localTime: string): string {
    const date = new Date(localTime);
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
  }

  // Convert UTC time to a specific timezone
  toTimezone(utcTime: string, timezone: string): string {
    if (!this.timezoneOffsets[timezone]) {
      throw new Error(`Unknown timezone: ${timezone}`);
    }

    const utcDate = new Date(utcTime);
    const offset = this.timezoneOffsets[timezone] * 60000; // Convert minutes to milliseconds
    return new Date(utcDate.getTime() + offset).toLocaleString();
  }
}

export default TimeConverter;