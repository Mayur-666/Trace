# Trace

## 1. Overview

**Trace** is a web application that visualizes algorithms step by step.  
It’s designed for DSA learners and engineers who want to **see how algorithms actually work**.

**MVP Focus:**
- Sorting algorithms (Bubble Sort, Selection Sort, Insertion Sort)  
- Step-by-step execution with controls  
- Metrics display (comparisons, swaps, steps)  
- Random or custom input arrays (up to 200 elements)  

---

## 2. Key Concepts

- **State:** Snapshot of the data structures at a single step  
- **Step:** One atomic operation (compare, swap, idle)  
- **Execution Engine:** Generates the ordered sequence of states  
- **Renderer:** Visual layer that displays states without modifying them

---

## 4. Functional Requirements

### 4.1 Algorithm Support
- Bubble Sort, Selection Sort, Insertion Sort  
- Deterministic execution for same input  

### 4.2 Input & Controls
- Generate a random array  
- Custom array (max 200 elements)  
- Reset visualization  

### 4.3 Execution Engine
- Converts algorithms into **immutable states**  
- Each state contains:
  - Array values  
  - Active indices  
  - Operation type (compare, swap, idle)  
- Forward/backward step navigation  

### 4.4 Playback
- Play / Pause  
- Step Forward / Step Back  
- Adjustable speed (slow / normal / fast)  

### 4.5 Visualization
- Bars representing array elements  
- Highlight comparisons using color  
- Show swaps by moving bars (no animation interpolation required for MVP)  

### 4.6 Metrics
- Current step number  
- Total steps  
- Number of comparisons  
- Number of swaps  

---

## 5. Non-Functional Requirements

- **Performance:** Responsive for arrays up to 200 elements; frame updates <16ms  
- **Maintainability:** Execution logic separated from UI; easy to add new algorithms  
- **Usability:** Clear, intuitive controls; keyboard + mouse support  
- **Compatibility:** Latest Chrome, Firefox, Edge  

---

## 6. Architecture

**Components:**
- **Algorithm Module:** Pure algorithm implementations emitting states  
- **Execution Engine:** Manages state sequences and step navigation  
- **State Store:** Holds current state and full history  
- **Renderer:** Stateless UI layer that renders the current state  

---
## 7. Acceptance Criteria
- All supported algorithms visualize correctly.
- Step execution is deterministic.
- Metrics update accurately.
- UI remains responsive.

---

## 8. Future Enhancements
- Graph algorithms visualization
- Recursive call stack visualization
- Dynamic programming table visualization
- Export/share visualizations
- Event loop / async algorithm simulations