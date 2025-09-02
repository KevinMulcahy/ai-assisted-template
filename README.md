# AI-Assisted Template

## 🚀 Development Roadmap

This template is designed for **AI-assisted development** using a modular, **VIBE-aligned workflow** to help you build full-stack apps efficiently and maintainably.

---

## 🎯 VIBE Coding Workflow

The **7-step VIBE workflow** emphasizes planning, AI integration, vertical slicing, testing, refinement, and deployment:

### 🏗 Foundation Setup

* Start with this template’s modular structure.
* Python backend (`backend/`) and React frontend (`frontend/`) are preconfigured.
* Provides a clean starting point for vertical slicing.

### 🤖 AI Integration

* Place AI logic in `backend/ai/`.
* Store prompts, inference logic, or other AI-assisted features here.
* Reuse functions to support multiple features.

### 📝 Planning

* Use `docs/implementation-plan.md` to document feature ideas and steps.
* Plan features as **vertical slices** (end-to-end functionality) instead of building horizontally.

### 🔪 Vertical Slicing

* Build small, complete features iteratively:
  **Database → Backend → API → Frontend**.
* Each slice should be independently functional and testable.

### 🧪 Testing

* Add unit tests in `backend/tests/`.
* Test AI logic, API routes, and utility functions.
* Run frontend tests as applicable.

### ✏️ Refinement

* Improve AI-generated code for quality and maintainability.
* Refactor modules and utilities as features evolve.

### 🚀 Deployment

* Prepare backend and frontend for deployment.
* Ensure endpoints are stable, CORS is configured, and frontend assets are built correctly.

---

## ⚡ Getting Started

### Clone the repository:

```bash
git clone https://github.com/KevinMulcahy/ai-assisted-template.git
cd ai-assisted-template
```

### Install backend dependencies:

```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
# or venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

### Install frontend dependencies:

```bash
cd frontend
npm install
```

### Run backend and frontend:

```bash
# Backend
python ../backend/app.py

# Frontend (in separate terminal)
npm start
```

### Access the API

* Test API endpoint: `http://127.0.0.1:5000/api/message`
* Connect frontend components to backend APIs.

---

## 📂 Folder Structure

```
backend/
    app.py
    ai/
    utils/
    config/
    tests/
frontend/
    src/
    public/
docs/
    implementation-plan.md
README.md
```

* Supports **vertical slicing** and modular development.
