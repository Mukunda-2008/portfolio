# Student Portfolio Website

A classic, simple, and professional personal portfolio website designed specifically for B.Tech students applying for software development internships.

---

## 🌟 Key Features

- **Recruiter-Focused Design**: Minimalist, clean, and trustworthy layout without distracting flashy animations.
- **Tailored Color Palette**: Clean white background with dark navy blue typography (`#0f172a`) and subtle light blue accents (`#1d4ed8`, `#eff6ff`).
- **Standard Recruiter Sections**:
  1. **Home / Hero**: Name, academic standing (B.Tech 2nd Year), college, department, elevator pitch, and primary CTAs (View Projects, Download Resume).
  2. **About Me**: Academic foundation, enthusiasm for programming, willingness to learn new technologies, and software engineering career objectives.
  3. **Technical Skills**: Structured categories (Programming Languages: Java, Python, C, JavaScript; Web Development: HTML, CSS, React; Tools: Git, GitHub, VS Code) featuring only genuine skills.
  4. **Projects**: Realistic college and personal project cards with descriptions, tech stacks, and direct GitHub repository links.
  5. **Education**: Degree details, expected graduation year, department, and relevant computer science coursework.
  6. **Contact**: Email with one-click copy, GitHub profile link, LinkedIn profile link, and recruiter-focused message.
  7. **Footer**: Clean copyright and social links.
- **Full Responsiveness**: Adapts smoothly to mobile, tablet, and desktop screens with an accessible mobile navigation menu.
- **Zero External Runtime Dependencies**: Pure HTML5, Vanilla CSS, and lightweight JavaScript. Inline SVGs are used for fast, reliable loading anywhere.

---

## 📁 Project Structure

```
portfolio/
├── index.html       # Main webpage structure and content
├── styles.css       # Clean, modern design system and responsive layout
├── script.js        # Mobile menu toggle, active scroll tracking, email copy, & resume modal
├── resume.pdf       # Placeholder resume (replace with your real resume PDF)
└── README.md        # Documentation and customization guide
```

---

## 🚀 How to View the Portfolio

1. Open this folder in File Explorer.
2. Double-click **`index.html`** to open it directly in any web browser (Chrome, Edge, Firefox, Safari).
3. Alternatively, if you use VS Code, right-click `index.html` and select **"Open with Live Server"**.

---

## ✏️ How to Customize Your Information

Open `index.html` in your text editor (such as VS Code or Notepad) and search for the bracketed placeholders:

| Placeholder | Where to find it | What to replace it with |
| :--- | :--- | :--- |
| `[Your Name]` | Header, Hero, Footer, Title | Your full name |
| `[Your Department]` | Hero, About, Education | e.g. *Computer Science and Engineering* |
| `[Your College Name]` | Hero, About, Education | e.g. *National Institute of Technology* |
| `[Your Graduation Year]` | Education Section | e.g. *2027* |
| `[your.email@example.com]` | Contact Section | Your active email address |
| `[your-username]` | Projects & Contact | Your actual GitHub username |
| `[your-profile]` | Contact & Footer | Your LinkedIn profile handle |

### Updating Your Resume
1. Export your real resume as a PDF file.
2. Name the file **`resume.pdf`**.
3. Place it directly in this portfolio folder (replacing the placeholder `resume.pdf`).
4. Both the **"Download Resume"** hero button and header button will automatically download your file!

---

## 🌐 Free Hosting for Recruiters

To share your portfolio link with recruiters on your resume or LinkedIn profile:

### Option 1: GitHub Pages (Recommended)
1. Create a GitHub repository named `portfolio` or `<your-username>.github.io`.
2. Push these files to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial student portfolio commit"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings** > **Pages** > Set Source to **`main`** branch and click **Save**.
4. Your website will be live in 1-2 minutes at `https://<your-username>.github.io/<your-repo-name>`.

### Option 2: Vercel or Netlify
- Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub into [Vercel](https://vercel.com) for instant SSL-secured hosting.
