# WildTrack AI - Local Development Setup

## Prerequisites
- Node.js 20+ installed ([Download](https://nodejs.org/))
- Git installed
- VS Code installed ([Download](https://code.visualstudio.com/))

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Harshitpawar09/wildtrackfor.git
cd ModelTrainWildlifenetlify/ModelTrainWildlife
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev:client
```

The app will start at `http://localhost:5000`

## Project Structure
```
.
├── client/                      # Frontend React app
│   ├── src/
│   │   ├── pages/              # Page components (home, identify, about, contact)
│   │   ├── components/         # Reusable UI components
│   │   ├── lib/                # Utilities and helpers
│   │   └── App.tsx             # Main app router
│   ├── index.html              # HTML entry point
│   └── package.json            # Client dependencies
├── public/
│   └── models/                 # Keras model files
│       ├── keras_Model.h5      # ML model
│       └── labels.txt          # Class labels (Elephant, Tiger)
├── attached_assets/            # Generated images and assets
├── vite.config.ts              # Vite build config
└── netlify.toml                # Netlify deployment config
```

## Available Scripts

- `npm run dev:client` - Start development server on port 5000
- `npm run build` - Build for production
- `npm run check` - TypeScript type checking

## Key Features

✅ Footprint image upload with drag-and-drop
✅ ML model simulation with dynamic confidence scores
✅ Species identification (Elephant & Tiger)
✅ Conservation status information
✅ Responsive design with Nature Tech aesthetic
✅ Mobile-friendly interface

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast bundler
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Wouter** - Routing
- **Shadcn UI** - Component library

## Pages

- `/` - Home page with features and gallery
- `/identify` - Footprint analysis tool
- `/about` - About the project and mission
- `/contact` - Contact form and information

## Deployment

### Netlify
The project is configured to deploy on Netlify:
1. Connect your GitHub repo to Netlify
2. Netlify automatically builds and deploys on push
3. See `netlify.toml` for build configuration

### Local Build
```bash
npm run build
# Output: dist/ directory ready for deployment
```

## Development Tips

### Adding New Pages
1. Create a new file in `client/src/pages/`
2. Import and register in `client/src/App.tsx`
3. Add to navbar in `client/src/components/layout/navbar.tsx`

### Styling
- Uses Tailwind CSS utility classes
- Custom CSS in `client/src/index.css`
- Dark mode support with `next-themes`

### API Integration (Future)
When adding backend functionality:
- Server code goes in `server/` folder
- Database schema in `shared/schema.ts`
- Routes in `server/routes.ts`

## Troubleshooting

**Port 5000 already in use?**
```bash
npm run dev:client -- --port 3000
```

**Module not found errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors?**
```bash
npm run check
```

## Support

For issues or questions, check:
- GitHub Issues: https://github.com/Harshitpawar09/wildtrackfor/issues
- Documentation: See comments in component files

---

**Built for Wildlife Conservation** 🦁🐘
