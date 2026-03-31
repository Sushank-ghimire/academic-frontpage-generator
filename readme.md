# Academic Frontpage Generator

A modern, fast, and easy-to-use web application to generate professional academic front pages (cover sheets) for lab reports and assignments. Built with Next.js, React, and PDF rendering technology.

## 🎯 Features

- **Elegant Design**: Professional and attractive front pages tailored for academic submissions
- **Quick Generator**: Fill details once and generate polished output in seconds
- **Single-Subject Focus**: Create one clean, examiner-friendly A4 page per subject
- **Live Preview**: Real-time PDF preview as you edit
- **Custom Logo Support**: Upload your institution's logo
- **Responsive Design**: Works seamlessly on desktop and tablet devices
- **Dark Mode Support**: Built-in dark theme toggle

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Sushank-ghimire/academic-frontpage-generator.git
cd academic-frontpage-generator
```

2. Install dependencies:

```bash
bun install
```

3. Run the development server:

```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Usage

1. Navigate to the **Create** page
2. Fill in your academic details:
   - University and institute information
   - College name and location
   - Report type and subject name
   - Student information (name, program, semester, roll number)
   - Submission details
3. Optionally upload your institution's logo
4. Click **Generate Preview** to see the PDF
5. Download or print the generated cover page

## 🏗️ Project Structure

```
.
├── app/                           # Next.js app directory
│   ├── page.tsx                  # Home page
│   ├── create/page.tsx           # Cover page generator
│   ├── layout.tsx                # Root layout with providers
│   └── globals.css               # Global styles
├── components/
│   ├── pdfx/                     # PDF-specific components
│   │   ├── IndexPage.tsx         # Main PDF document
│   │   ├── text/pdfx-text.tsx    # Text component
│   │   └── heading/pdfx-heading.tsx # Heading component
│   ├── ui/                       # Reusable UI components
│   ├── providers/                # Context providers
│   └── header.tsx, footer.tsx    # Layout components
├── lib/
│   ├── pdfx-theme.ts            # Theme configuration
│   ├── pdfx-theme-context.tsx   # Theme context provider
│   └── utils.ts                  # Utility functions
└── public/                        # Static assets
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.1](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **PDF Generation**: [@react-pdf/renderer](https://react-pdf.org/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Linting & Formatting**: [Biomejs](https://biomejs.dev/)

## 🎨 Customization

### Theming

Edit `lib/pdfx-theme.ts` to customize:

- Colors and typography
- Spacing and layout
- Font families and sizes
- Page orientation and size

### Styling

Global styles are defined in `app/globals.css`. The project uses:

- CSS variables for theming (light & dark modes)
- Tailwind CSS for utility-first styling
- Custom component variants via CVA

## 📦 Available Scripts

```bash
bun run dev      # Start development server
bun run build    # Build for production
bun start        # Start production server
bun run lint     # Run linter (Biomejs)
bun run format   # Format code (Biomejs)
```

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code structure and naming conventions
- Use TypeScript for type safety
- Test your changes thoroughly
- Run `bun run format` before committing
- Keep components small and reusable

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)** License.

### You are free to:

- **Share** — Copy and redistribute the material in any medium or format

### Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made
- **NonCommercial** — You may not use the material for commercial purposes
- **NoDerivatives** — If you remix, transform, or build upon the material, you may not distribute the modified material

For more details, see [https://creativecommons.org/licenses/by-nc-nd/4.0/](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 👨‍💻 Author

**Sushank Ghimire**

- GitHub: [@Sushank-ghimire](https://github.com/Sushank-ghimire)
- LinkedIn: [Sushank Ghimire](https://www.linkedin.com/in/sushank-ghimire)
- Instagram: [@ghimiresushank](https://www.instagram.com/ghimiresushank)

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for beautiful component library
- [React PDF](https://react-pdf.org/) for PDF rendering
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- Next.js community for amazing framework

## 📞 Support

For issues, questions, or suggestions, please open an [GitHub Issue](https://github.com/Sushank-ghimire/academic-frontpage-generator/issues).

---

Made with ❤️ by Sushank Ghimire
