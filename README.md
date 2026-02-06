# AngularGddit

A Reddit-like forum application built with Angular.

## 🚀 Features

- Browse subreddits and posts
- View post details and comments
- Upvote/downvote functionality
- Responsive sidebar navigation
- Modern Angular architecture

## 🛠️ Tech Stack

- **Framework:** Angular 12+
- **Language:** TypeScript
- **Styling:** CSS with responsive design
- **HTTP Client:** Angular HttpClient with JWT token interceptor

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/gmuller-dev/angular-gddit.git
cd angular-gddit

# Install dependencies
npm install

# Run development server
ng serve
```

Navigate to `http://localhost:4200/` to view the app.

## 🏗️ Development

### Code scaffolding

Run `ng generate component component-name` to generate a new component.

### Build

Run `ng build` to build the project. Build artifacts will be stored in `dist/`.

### Running tests

- Unit tests: `ng test`
- E2E tests: `ng e2e`

## 📁 Project Structure

```
src/app/
├── shared/           # Shared components
│   ├── post-tile/
│   ├── side-bar/
│   └── subreddit-side-bar/
├── token-interceptor.ts  # JWT auth interceptor
└── app.module.ts     # Main app module
```

## 🤝 Contributing

This is a portfolio project. Feel free to explore the code!

---
*Built with Angular CLI*
