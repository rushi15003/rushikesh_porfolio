# Personal Portfolio Website

A modern, premium portfolio website showcasing AI and Machine Learning projects, research, and expertise. Built with React, Tailwind CSS, and Framer Motion.

## � About

- **Rushikesh Sutar** - AI & ML Engineering Student


## 🚀 Features

- **Modern Design**: Editorial color palette with light-to-dark visual progression
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Fully Responsive**: Optimized for all devices
- **Premium UI Components**: Using Aceternity UI, shadcn/ui, and Material Tailwind
- **Sections**:
  - Hero with animated background
  - About Me with profile card
  - Experience timeline
  - Skills showcase
  - Projects gallery
  - Research publications
  - Certifications
  - Contact information

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (motion)
- **UI Components**: 
  - Aceternity UI
  - shadcn/ui
  - Material Tailwind
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify, Vercel, or GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📁 Project Structure

```
Portfolio Website/
├── public/
│   ├── resumes/          # Resume PDF files
│   └── favicon.svg
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Research.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ui/           # UI components
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Color Palette

The website uses an editorial color scheme:
- `#EAE7DC` - Main background (lightest)
- `#D8C3A5` - Section alternation
- `#B8B8A8` - Cards and surfaces
- `#E98074` - Secondary accents
- `#E85A4F` - Primary buttons and emphasis

## 📝 Customization

### Adding Your Resume
Place your PDF resume files in the `public/resumes/` directory:
- `Rushikesh_Resume.pdf`


### Adding Profile Images
Place your profile images in the root directory or update the paths in `src/components/About.jsx`:
- `Rushikesh_Sutar_Photo.jpg`


### Updating Content
Edit the respective component files in `src/components/` to update:
- Projects, research, certifications, experience
- Contact information
- Skills and specializations

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite configuration

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **Rushikesh Sutar**: rushisutar15@gmail.com


---

Built with ❤️ by Rushikesh Sutar
