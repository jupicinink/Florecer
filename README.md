# Florecer Landing Page

## Overview
This project is a responsive web landing page for Florecer, featuring a product carousel, testimonials, and various sections to showcase the brand's offerings.

## Project Structure
```
florecer-landing
├── src
│   ├── index.html          # Main HTML file for the landing page
│   ├── assets              # Folder for assets
│   │   ├── fonts           # Font files used in the project
│   │   └── images          # Image files used in the project
│   ├── components          # Reusable HTML components
│   │   ├── header.html     # Header section
│   │   ├── hero.html       # Hero section
│   │   ├── carousel.html    # Product carousel
│   │   ├── products.html    # Products section
│   │   ├── testimonials.html # Testimonials section
│   │   └── footer.html     # Footer section
│   ├── scripts             # JavaScript files
│   │   ├── main.js         # Main JavaScript logic
│   │   └── carousel.js     # JavaScript for the product carousel
│   └── styles              # CSS styles
│       ├── main.css        # Main CSS styles
│       └── animations.css   # CSS for animations
├── package.json            # npm configuration file
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd florecer-landing
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Project
To start the development server, run:
```
npm run dev
```
This will launch the landing page in your default web browser.

### Building for Production
To create a production build, run:
```
npm run build
```
This will generate optimized files for deployment in the `dist` folder.

## Usage
- The landing page includes a header, hero section, product carousel, testimonials, and footer.
- Customize the content in the respective HTML files located in the `src/components` directory.
- Modify styles in `src/styles/main.css` and `src/styles/animations.css`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.