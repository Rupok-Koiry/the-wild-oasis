# [🏨 Hotel Management App](https://the-wild-oasis-beta-wine.vercel.app/)

This is a **Hotel Management App** designed for hotel employees to streamline daily operations. The app includes user management, cabin and booking functionalities, and comprehensive dashboards to monitor performance and statistics.

---

## 🎯 Features

### User Features
- **🔒 Secure Login**: Hotel employees must log in to access the application.
- **🆕 Employee Signup**: New accounts can only be created within the app to ensure authenticity.
- **👤 Profile Management**: Employees can upload an avatar, and update their name and password.

### Cabin Management
- **🛏️ Cabin Overview**: A table view displaying cabin details including:
  - Photo
  - Name
  - Capacity
  - Price
  - Current Discount
- **✏️ Update/Delete Cabins**: Employees can edit or remove existing cabins.
- **➕ Add New Cabins**: Create new cabins, including uploading photos.

### Booking Management
- **📅 Booking Overview**: A table view displaying booking details such as:
  - Arrival and departure dates
  - Status ("unconfirmed", "checked in", "checked out")
  - Paid amount
  - Cabin and guest data
- **🔍 Filter Bookings**: Filter bookings by status for easier navigation.
- **✅ Booking Actions**: Employees can:
  - Delete bookings
  - Check guests in and out
  - Confirm payment upon check-in
- **🍳 Add Breakfast**: Guests can add breakfast for their stay at check-in.

### Guest Management
- **📝 Guest Data**: Store detailed guest information including:
  - Full name
  - Email
  - National ID
  - Nationality (with a country flag for easy identification)
- **📋 Daily Task List**: Dashboard displays a list of guests checking in and out on the current day.

### Dashboard & Analytics
- **📊 Performance Metrics**: Display key statistics for the last 7, 30, or 90 days:
  - Bookings
  - Sales
  - Check-ins
  - Occupancy rate
- **📈 Sales Chart**: Visualize daily hotel sales, distinguishing between total and extras (e.g., breakfast).
- **📉 Stay Duration Chart**: Analyze stay duration statistics to optimize operations.

### App Settings
- **⚙️ Configurable Settings**: Employees can set application-wide settings such as:
  - Breakfast price
  - Minimum and maximum nights per booking
  - Maximum guests per booking

### UI Features
- **🌗 Dark Mode**: Toggle between light and dark modes for better usability.
- **💡 Intuitive Design**: Modern and user-friendly interface for efficient navigation.

---

## 🚀 Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/hotel-management-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hotel-management-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the app:

   ```bash
   npm start
   ```

---

## 🛠️ Technologies Used

- **React**: For building the user interface.
- **Node.js**: Backend server and API handling.
- **Express.js**: For routing and middleware.
- **MongoDB**: Database for storing cabin, booking, and guest data.
- **Chart.js**: For creating interactive charts.
- **React Query**: For application state management.
- **TypeScript**: Ensures type safety and robust code.
