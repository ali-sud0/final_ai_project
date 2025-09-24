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
```
---

## Usage
1. Open the project in your browser or run it locally.  
2. Set parameters for the Genetic Algorithm:
   - Population size
   - Mutation rate
   - Number of generations  
3. Run either **GA** or **Backtracking**.  
4. Compare the results visually.

---

## Examples
Example configuration:
- Population size: 50  
- Mutation rate: 0.1  
- Generations: 100  
- Backtracking depth limit: X  

Expected outcome:
- **GA** → Faster approximate solutions  
- **Backtracking** → Exact results if the search space is small  

---

## Results & Comparisons

| Metric               | Genetic Algorithm          | Backtracking                  |
|----------------------|---------------------------|--------------------------------|
| Execution Speed      | Faster on large problems  | Slow on large search spaces    |
| Accuracy             | Near-optimal, not exact   | Exact (if feasible)            |
| Parameter Sensitivity| Sensitive to tuning       | Less sensitive, poor scalability |

---

## Challenges & Limitations
- **Backtracking** suffers from combinatorial explosion in large spaces  
- **GA** depends heavily on parameter tuning (mutation rate, population size, crossover strategy)  
- Complex problems may require hybrid or advanced metaheuristics  

---

## Future Improvements
- Add more algorithms (Simulated Annealing, Ant Colony, Local Search, etc.)  
- Statistical analysis of results  
- Interactive UI with advanced visualization  
- User-defined problem input  
- Data import/export (JSON/CSV)  

---

## Project Structure
```bash
final_ai_project/
├── BacktrackingAlgorithm.js
├── GeneticAlgorithm.js
├── app.js
├── index.html
├── style.css
├── images/
├── fonts/
├── LICENSE
└── README.md
```
---

## Contributing

Contributions are welcome!  

1. Fork this repo  
2. Create a new branch  
3. Commit & push changes  
4. Submit a Pull Request  

Please make sure your code is **documented** and includes examples.

---

## License
This project is licensed under the **Apache License 2.0**.  

