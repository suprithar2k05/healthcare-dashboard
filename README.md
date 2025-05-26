# 🏥 Healthcare Dashboard UI (React)

A pixel-perfect, responsive Healthcare Dashboard built with React. This project is a static mock implementation featuring a sidebar, header, anatomy section, calendar, health indicators, activity chart, and schedule cards — all designed to match a given UI image **exactly**.

## 🚀 Tech Stack

- **React** (via Vite or Create React App)
- **CSS Modules** / Plain CSS for styling
- **Responsive Layouts** with Flexbox, CSS Grid, and Media Queries
- **Static Assets** and **Mock Data** only (no API integration or state management)


---

## 📦 Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/healthcare-dashboard.git
cd healthcare-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the app**
```bash
npm run dev
```

## 🧩 Components Breakdown 
✅ App.jsx
Root layout using Flexbox/Grid — renders <Header /> <Sidebar /> and <DashboardMainContent />.

✅ Header/
Logo (Healthcare.)

Search Bar (display only)

Notification bell icon (bell.svg)

User Avatar (avatar.png)

Add button (display only)

✅ Sidebar/
"General" section

Navigation links (static)

✅ DashboardMainContent/
Holds all main content components:

DashboardOverview/

AnatomySection/ (uses body.png with overlaid indicators)

HealthStatusCards/ (lungs.svg, teeth.svg, bone.svg)

CalendarView/ (static grid and appointments)

UpcomingSchedule/ (uses SimpleAppointmentCard)

ActivityFeed/ (static chart using CSS bars)

✅ SimpleAppointmentCard/
Reusable mini-card with:

Title

Time

Icon/Indicator
