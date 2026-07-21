# Angel Starch — Static React Website

MVVM + clean architecture React app for Angel Starch & Food Pvt. Ltd.

## Architecture

```
src/
  domain/models/          # Company, navigation models
  data/repositories/      # Page content (data layer)
  presentation/
    viewmodels/           # Hooks binding data → views
    views/                # Pages & UI (Home, About, …)
  App.jsx                 # Routes
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/categories` | Categories |
| `/ats` | ATS |
| `/blogs` | Blogs |
| `/news` | News & Events |
| `/certifications` | Certifications |
| `/careers` | Careers |
| `/contact` | Contact Us |

## Setup

```bash
npm install
npm run dev
```
