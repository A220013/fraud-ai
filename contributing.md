# 🤝 Team Contribution Guide - Intelligent Academic Advisor

Welcome to our collaborative workspace! This guide outlines the conventions and practices all team members should follow when working in this repository to ensure smooth, consistent development.

---

## 🎞 Project Structure

```
intelligent-academic-advisor/
├── frontend/         # Frontend app (TypeScript + Vite)
├── backend/          # Backend API (Node.js + Express)
├── docs/             # Project documents (optional)
├── .github/          # GitHub templates (PR, issues, workflows)
├── README.md         # Project overview
└── CONTRIBUTING.md   # Collaboration guidelines (this file)
```

---

## 🌳 Branching Strategy

We follow a **feature-branch workflow**:

| Branch      | Purpose                                |
| ----------- | -------------------------------------- |
| `main`      | Production-ready, always deployable    |
| `dev`       | Active development integration branch  |
| `feature/*` | Feature-specific or task-specific work |

### 🔖 Branch Naming Convention

Use clear and consistent naming:

```
feature/frontend-login-form
feature/backend-user-auth
bugfix/chat-reset-button
hotfix/fix-navbar-routing
```

---

## 💬 Commit Message Convention

Use clear, conventional commit messages:

```
feat: implement login page with validation
fix: correct navbar routing issue on refresh
docs: update README with environment setup
style: apply formatting rules to Chat UI
```

Common prefixes:

| Prefix   | Use case                   |
| -------- | -------------------------- |
| feat     | New feature                |
| fix      | Bug fix                    |
| docs     | Documentation changes      |
| style    | Code formatting (no logic) |
| refactor | Code structure changes     |
| test     | Adding/adjusting tests     |
| chore    | Tooling or meta tasks      |

---

## 🧖 Git Workflow & Naming Conventions

### 🔧 Prefix (用于分支和 commit)

| Prefix       | Description                             |
| ------------ | --------------------------------------- |
| **feat**     | New feature implementation              |
| **update**   | Updates to existing components/features |
| **fix**      | Bug fixes or error corrections          |
| **test**     | Adding or modifying tests               |
| **refactor** | Refactoring code (no functional change) |
| **devops**   | CI/CD, infrastructure, deployment       |

### 🌿 Branching Convention

- Pattern:

  ```
  [prefix]/[ticket-number]-[brief-task-name]
  ```

- Examples:

  ```
  feat/PROJ-01-(FE)setup-backend
  feat/CP-32-add-user-login-page
  fix/CP-35-fix-new-user-registration-error
  ```

- Default base branch:

  ```
  dev
  ```

- Create branch command example:

  ```bash
  git checkout -b feat/PROJ-00-setup-backend
  ```

### 💬 Commit Message Format

Each PR should contain **only one final commit** after squash.\
Follow this format for the message:

```
[prefix]: [task name]

[optional description, explaining change]

Resolve [ticket-number]
```

- Example:
  ```
  feat: Add user login page

  Implement login form with validation and API integration

  Resolve PROJ-32
  ```

### 📌 Tips

- Use squash merge on GitHub to enforce single-commit history.
- Always sync with `dev` before starting a new branch:
  ```bash
  git checkout dev
  git pull origin dev
  git checkout -b feat/PROJ-xx-some-task
  ```

---

## 🔀 Pull Request (PR) Workflow

1. **Create a feature branch from **``
2. **Commit your changes** (with proper messages)
3. **Push to GitHub and open a PR to **``
4. **Use the PR template and explain your changes**
5. **Tag at least one team member for review**
6. **Review, request changes, and approve**
7. **Once approved, merge with a **``** commit**

> 🔒 No direct commits or merges to `main` allowed!

---

## 🧪 Code Review Expectations

- Reviewers must test functionality if applicable
- Ensure code quality and naming conventions are followed
- Confirm that the PR does **not break existing features**
- Suggest improvements kindly and constructively

---

## 🛠️ Development Tools

| Tool    | Purpose                         |
| ------- | ------------------------------- |
| GitHub  | Code hosting, collaboration     |
| Jira    | Sprint planning, issue tracking |
| MongoDB | Database for user/data storage  |
| Postman | API testing (optional)          |
| Vite    | Frontend bundler                |
| Express | Backend framework               |

---

## ⚠️ Environment Variables

All secrets should be stored in `.env` files and **never committed to Git**.\
Make sure `.env` is listed in `.gitignore`.

---

## 📚 Documentation

- Add comments where necessary
- Update `README.md` or relevant docs if your change affects usage
- For larger features, consider adding a short design doc in `docs/`

---

## 🙋‍♀️ Questions or Issues?

Use GitHub Issues for:

- Bug reports 🐛
- Feature suggestions 💡
- Technical discussions 🛠️

Or ask in the team chat!

---

Let’s build something awesome together! 💪

