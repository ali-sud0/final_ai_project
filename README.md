# Final AI Project

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)  
[![JavaScript](https://img.shields.io/badge/lang-JavaScript-yellow.svg)](https://developer.mozilla.org/docs/Web/JavaScript)

**Final AI Project** is an Artificial Intelligence project that demonstrates the power of combining **Genetic Algorithms (GA)** with **Backtracking/Search** techniques for solving optimization and NP-hard problems.

---

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Architecture & Design](#architecture--design)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Results & Comparisons](#results--comparisons)
- [Challenges & Limitations](#challenges--limitations)
- [Future Improvements](#future-improvements)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction
This project implements a **Genetic Algorithm (GA)** alongside a **Backtracking (search-based) approach** to solve optimization problems.  
The main goal is to compare and analyze both **approximate heuristic methods** (GA) and **exact search-based methods** (Backtracking) in terms of **efficiency, scalability, and accuracy**.

---

## Features
- Fully functional **Genetic Algorithm**:
  - Selection, Crossover, Mutation
  - Adjustable parameters
- **Backtracking Algorithm** for exact solution comparison
- Simple **web-based UI** (HTML / CSS / JavaScript)
- **Parameter tuning** (population size, mutation rate, depth limit, etc.)
- Visualization of results & comparisons

---

## Architecture & Design
The project is divided into separate modules:
- `GeneticAlgorithm.js` → Core GA implementation  
- `BacktrackingAlgorithm.js` → Recursive backtracking solver  
- `app.js` → Controller that connects algorithms with UI  
- `index.html` & `style.css` → User interface layer  
- `images/`, `fonts/` → Assets  
- `README.md`, `LICENSE` → Documentation & license  

This modular design allows easy extension of new algorithms or replacing the front-end layer.

---

## Installation
Run locally with no dependencies:

```bash
# Clone repository
git clone https://github.com/ali-sud0/final_ai_project.git
cd final_ai_project

# Open index.html in your browser
# OR run with a local server (recommended for development):
npm install -g http-server
http-server . -p 8080

# Open http://localhost:8080 in your browser
