# 📊 DataViz Upload Portal

**Sanjeevikumar M**  
[GitHub Link](https://github.com/SanjeevikumarWD/React_Python_visualization)  
📅 25/07/2024

---

## 📝 Introduction

This project is a full-stack web application built using **React (Frontend)** and **Python with Pandas (Backend)**. It allows users to upload a CSV file containing sales data, view a summary, and generate various charts for analysis.

---

## 🔍 Brief Project Overview

- Upload a CSV file from the frontend
- Preview raw data in a table
- View a summary (columns, row count, null values, average values)
- Analyze sales data via interactive charts

---

## 🎯 Main Objective

To analyze and visualize CSV-based sales data using React and Python. The backend processes the data with Pandas and serves it through API endpoints. The frontend visualizes the results using Chart.js or Recharts.

---

## ✅ Features

### Frontend (React)
- CSV File Upload Interface
- Table Preview of Uploaded Data
- Summary Display (columns, averages, nulls)
- Interactive Charts (via Chart.js / Recharts):
  - 📈 Line Chart: Revenue Over Time
  - 📊 Bar Chart: Units Sold by Product
  - 🥧 Pie/Bar Chart: Revenue by Salesperson
  - 📊 Stacked Bar Chart: Revenue by Region & Product
  - 📊 Bar Chart: Avg Unit Price by Product

### Backend (Python + Flask + Pandas)
- Parse and process CSV files
- API Endpoints to:
  - Return raw data preview
  - Return summary (columns, rows, nulls, averages)
  - Return grouped data for charts

---
# 📊 Sales Dashboard Project

A full-stack sales analytics dashboard using **React**, **Flask**, **Pandas**, and **Chart.js**.

---

## ⏱ Development Time Taken

| Task                    | Time Spent     |
|-------------------------|----------------|
| Backend (API + Logic)   | 30 min         |
| Frontend (UI + Charts)  | 1 hr 45 min    |
| Testing & Debugging     | 30 min         |
| Documentation           | 1 hr           |
| **Total**               | **4 hr**       |

---

## 🧩 Difficulties Faced

- Flask was new to me, but learning it was rewarding.
- Integrating Chart.js with React took time to understand.
- Debugging the data flow from Flask to React components was tricky at first.

Despite the challenges, I gained strong full-stack experience through this project.

---

## 🔧 Project Workflow & Implementation

### Backend (Flask)

Built RESTful API endpoints to:
- Upload and parse CSV data using **Pandas**
- Summarize and serve cleaned/grouped data
- Configured **CORS** for frontend integration

### Frontend (React + Chart.js)

Developed reusable components:
- `UploadCSV.jsx` – Handles file input and backend communication
- `Summary.jsx` – Displays total sales, units, and more
- `Charts.jsx` – Manages all chart components

#### Individual chart components:
- `AvgPriceByProductChart.jsx`
- `UnitsByProductChart.jsx`
- `RevenueByRegionProductChart.jsx`
- `RevenueBySalespersonChart.jsx`
- `RevenueOverTimeChart.jsx`

`Dashboard.jsx` combines all components into a single view.

Used `react-chartjs-2` to render charts dynamically from API data.

## 🖼️ UI Component Structure

Here are the visual components of the application:

### 🔼 Upload CSV

![Upload CSV](screenshots/upload.png)

### 📈 Summary Section

![Summary](screenshots/summary.png)

### 📊 Revenue Over Time Chart

![Revenue Over Time](screenshots/revenue_over_time.png)

### 🧑‍💼 Revenue by Salesperson

![Revenue by Salesperson](screenshots/revenue_by_salesperson.png)

### 🌍 Revenue by Region and Product

![Revenue by Region and Product](screenshots/revenue_by_region_product.png)

### 🧾 Average Price by Product

![Average Price by Product](screenshots/avg_price_by_product.png)

### 📦 Units by Product

![Units by Product](screenshots/units_by_product.png)

---

## 🎓 Learning Outcome

- Learned backend API development using **Flask**
- Gained experience in data processing using **Pandas**
- Understood React integration with **Chart.js**
- Improved debugging skills with full-stack data flow
- Learned asynchronous data rendering in charts

---

## ✅ Conclusion

This project was a valuable learning experience in full-stack development using **React** and **Flask**.  
It helped me understand real-time data processing, API integration, and interactive visualizations.  
I'm now more confident working with data-driven applications and backend-to-frontend communication.


---

## 🙏 Acknowledgment

Thanks a lot for this opportunity. It was a great hands-on experience and I got to explore new frameworks.  
I thoroughly enjoyed working on it.

—
**Sanjeevi Kumar**
