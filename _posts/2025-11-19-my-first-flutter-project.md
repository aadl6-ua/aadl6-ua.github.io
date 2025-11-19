---
layout: post
title: "My first Flutter Project"
date: 2025-11-19
---

# MyFitness: Building a Complete Fitness Tracking App in Flutter

During my mobile application development course, I decided to create **MyFitness**, a personal fitness tracking app designed to help users monitor workouts, running sessions, and body metrics over time. The main goal was to combine **user-friendly design**, **data visualization**, and **custom Flutter development**, while avoiding over-reliance on external packages. This project allowed me to apply my knowledge of **Flutter, state management, and UI design** in a practical, end-to-end application.

## App Features

MyFitness has several core features:

- **User Profile Management:** Users can set their name, avatar, height, and weight. BMI is calculated automatically and displayed with color coding for quick health reference.
- **Workout and Run Tracking:** The app stores detailed sessions, including stages, distance, and time for running sessions.
- **Custom Data Visualization:** Line graphs show the evolution of running distances and weight over time, providing an intuitive overview of progress.

## Technical Implementation

The app is built entirely in **Flutter**, using:

- **StatefulWidgets** for dynamic screens such as `HomeScreen` and `RunDayDetailScreen`.
- **CustomPainter** to draw **line graphs** for running distance and weight trends. This approach avoids external chart libraries, which often introduce compatibility issues.
- **Local in-memory data storage**, using custom models (`RunDay`, `Stage`) and services (`RunService`) to manage workout and running sessions.
- **Navigation and routing** between screens using `Navigator`, enabling seamless movement from the home dashboard to profile, workouts, and runs.

### Example: Custom Line Graph

```dart
final points = List.generate(values.length, (i) => 
  Offset(i * stepX, size.height - ((values[i]-minValue)/(maxValue-minValue)*size.height))
);

final path = Path()..moveTo(points[0].dx, points[0].dy);
for (int i = 0; i < points.length - 1; i++) {
  final midX = (points[i].dx + points[i+1].dx)/2;
  path.cubicTo(midX, points[i].dy, midX, points[i+1].dy, points[i+1].dx, points[i+1].dy);
}

canvas.drawPath(path, paintLine);
for (final p in points) {
  canvas.drawCircle(p, 4, paintPoint);
}
```
This code generates smooth curves, gradient fills, and points for each measurement. It ensures that graphs are **visually appealing and responsive**, even without external chart libraries.

## User Interface Design

The app emphasizes a clean, professional look:

- **Color Palette:** Soft greys and dark green highlights for key elements.
- **Cards and Buttons:** Rounded cards for user profile, workouts, and runs; large buttons for primary actions.
- **Graphs:** Line charts with gradient fills and interactive points to enhance readability.

Screenshots (to be added) show the home dashboard with profile card, progress graphs, and navigation buttons to workouts and running sessions.

## Lessons Learned

Developing MyFitness was a great exercise in:

- **Flutter UI and state management:** Handling dynamic updates for graphs and user inputs.
- **Custom graphics with CustomPainter:** Drawing line charts from scratch gave me full control over the design.
- **Software design principles:** Separating services (like `RunService`) from models and UI screens for maintainability.

This project demonstrates my ability to deliver a **polished, fully functional mobile app** while solving technical challenges creatively.

---

**Why I chose this topic:**  

I selected MyFitness because it combines **practical application development** with **technical problem-solving**. It highlights my understanding of Flutter, UI/UX, and state management, and provides a tangible demonstration of my programming skills, which aligns perfectly with my career direction in mobile software engineering.


