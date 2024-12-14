
# timeflip

**timeflip** is a lightweight and versatile package that allows you to convert time between UTC and any country's local time without relying on third-party libraries. It's built for developers who need precise and easy-to-use time conversion functionality.

---

## Features

- Convert local time to UTC.
- Convert UTC time to any country's local time.
- Includes predefined offsets for common time zones.
- Lightweight, with no third-party dependencies.
- Works with both JavaScript and TypeScript.

---

## Installation

Install the package using npm:

```bash
npm install timeflip
```

Or with Yarn:

```bash
yarn add timeflip
```

---

## Usage

### Importing the Package

- For **JavaScript**:
  ```javascript
  const TimeConverter = require('timeflip').default;
  ```

- For **TypeScript**:
  ```typescript
  import TimeConverter from 'timeflip';
  ```

### Example Usage

#### 1. Convert Local Time to UTC
```javascript
const timeConverter = new TimeConverter();

const localTime = "2024-12-14T10:30:00"; // Replace with your local time
const utcTime = timeConverter.toUTC(localTime);

console.log("Local to UTC:", utcTime);
// Output: "2024-12-14T05:00:00.000Z"
```

#### 2. Convert UTC to Specific Time Zone
```javascript
const timeConverter = new TimeConverter();

const utcTime = "2024-12-14T05:00:00Z"; // Replace with your UTC time
const istTime = timeConverter.toTimezone(utcTime, "IST");

console.log("UTC to IST:", istTime);
// Output: "12/14/2024, 10:30:00 AM"
```

---

## Supported Time Zones

The following time zones are currently supported:
- **GMT** (Greenwich Mean Time)
- **IST** (Indian Standard Time, GMT+5:30)
- **EST** (Eastern Standard Time, GMT-5)
- **PST** (Pacific Standard Time, GMT-8)

> Note: More time zones can be added as needed. Open an issue or submit a PR if you'd like to see additional zones supported!

---

## TypeScript Support

This package is fully TypeScript-compatible and includes type definitions. Here's an example in TypeScript:

```typescript
import TimeConverter from 'timeflip';

const timeConverter = new TimeConverter();

const localTime: string = "2024-12-14T10:30:00";
const utcTime: string = timeConverter.toUTC(localTime);
console.log("Local to UTC:", utcTime);
```

---

## API Reference

### `toUTC(localTime: string): string`
- Converts a local time (in ISO 8601 format) to UTC.
- **Parameters:**
  - `localTime` (string): The local time to convert.
- **Returns:** A UTC time string in ISO 8601 format.

### `toTimezone(utcTime: string, timezone: string): string`
- Converts a UTC time (in ISO 8601 format) to a specific timezone.
- **Parameters:**
  - `utcTime` (string): The UTC time to convert.
  - `timezone` (string): The target timezone (e.g., `IST`, `PST`).
- **Returns:** A localized time string in the target timezone.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Questions or Feedback?

If you have any questions, issues, or feedback, feel free to [open an issue](https://github.com/your-username/timeflip/issues) or contact me directly.

---

### Author

Developed with ❤️ by Rahul Sharma
