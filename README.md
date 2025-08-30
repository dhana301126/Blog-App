# 📝 BlogHub - Modern Blog Showcase Application

A beautiful, responsive blog showcase application built with React.js and Tailwind CSS, featuring a complete dark mode implementation and modern UI/UX design.

![BlogHub Preview]()

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional interface with beautiful typography
- Responsive design that works on all devices
- Smooth animations and transitions
- Card-based layout for better content organization

### 🌙 **Dark Mode Support**
- Complete dark/light theme toggle
- Automatic system preference detection
- Persistent theme selection across sessions
- Smooth theme transitions with proper contrast ratios

### 📱 **Responsive Layout**
- Mobile-first design approach
- Optimized for desktop, tablet, and mobile devices
- Touch-friendly navigation and interactions
- Adaptive grid layouts

### 🧭 **Navigation & Routing**
- React Router for seamless page navigation
- Sticky navigation bar with active state indicators
- Breadcrumb navigation on detail pages
- Mobile-responsive hamburger menu

### 📄 **Pages & Components**
- **Homepage**: Blog cards grid with search and filtering
- **Blog Details**: Full article view with related posts
- **About**: Company information and team showcase
- **Contact**: Contact form with validation and company details
- **404 Page**: Custom error page with navigation options

### 🔍 **Search & Filter**
- Real-time blog search functionality
- Category-based filtering system
- Dynamic results display
- Clear filter options

### ♿ **Accessibility**
- WCAG compliant design
- Proper ARIA labels and descriptions
- Keyboard navigation support
- Screen reader friendly

## 🛠️ **Technology Stack**

- **Frontend Framework**: React.js 19.1.1
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.8.2
- **Icons**: Heroicons (via SVG)
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📁 **Project Structure**

```
blog-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── BlogCard.js          # Individual blog card component
│   │   ├── DarkModeToggle.js    # Dark mode toggle button
│   │   ├── Footer.js            # Site footer with links
│   │   └── Navbar.js            # Navigation bar component
│   ├── contexts/
│   │   └── DarkModeContext.js   # Dark mode state management
│   ├── data/
│   │   └── blogs.json           # Mock blog data
│   ├── pages/
│   │   ├── About.js             # About page component
│   │   ├── BlogDetails.js       # Individual blog post page
│   │   ├── Contact.js           # Contact page with form
│   │   └── Homepage.js          # Main homepage component
│   ├── App.js                   # Main app component with routing
│   ├── App.css                  # Custom CSS styles
│   ├── index.js                 # React app entry point
│   └── index.css                # Tailwind CSS imports
├── tailwind.config.js           # Tailwind configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🚀 **Getting Started**

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm run build`** - Builds the app for production
- **`npm test`** - Launches the test runner
- **`npm run eject`** - Ejects from Create React App (one-way operation)

## 🎯 **Usage Guide**

### **Homepage**
- Browse all blog posts in a responsive grid layout
- Use the search bar to find specific articles
- Filter posts by categories using the tag buttons
- View featured articles in the dedicated section

### **Blog Details**
- Read full articles with proper typography
- Navigate using breadcrumbs
- View related articles at the bottom
- Use the back button to return to previous page

### **Dark Mode**
- Click the sun/moon icon in the navigation bar to toggle themes
- The app automatically detects your system preference on first visit
- Your theme choice is saved and remembered across sessions

### **Search & Filter**
- Type in the search bar to filter blogs by title, content, or author
- Click category tags to filter by specific topics
- Use "Clear Filters" to reset all filters

## 🎨 **Customization**

### **Adding New Blog Posts**
Edit the `src/data/blogs.json` file to add new blog posts:

```json
{
  "id": 7,
  "title": "Your Blog Title",
  "excerpt": "Brief description of your blog post...",
  "content": "Full blog content with paragraphs separated by \\n\\n...",
  "author": "Author Name",
  "date": "2024-01-20",
  "readTime": "5 min read",
  "image": "https://your-image-url.com/image.jpg",
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

### **Styling Customization**
- Modify `tailwind.config.js` for theme customization
- Edit `src/App.css` for additional custom styles
- Update color schemes in the Tailwind configuration

### **Component Customization**
- All components are modular and easily customizable
- Update component props and styling as needed
- Add new pages by creating components in the `src/pages/` directory

## 🌐 **Deployment**

### **Build for Production**
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### **Deployment Options**
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 **Acknowledgments**

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Unsplash** for the beautiful stock images
- **Heroicons** for the clean, modern icons

## 🐛 **Issues & Support**

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed description
3. Contact us through the contact form in the application
---
