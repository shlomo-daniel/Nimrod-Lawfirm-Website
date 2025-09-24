# Nimrod Law Firm Website - AI Agent Instructions

## Project Overview

This is a professional Hebrew law firm website for Nimrod Gary, specializing in criminal defense. The site is built with pure HTML/CSS/JS (no frameworks) and follows RTL (right-to-left) layout conventions.

## Architecture & File Structure

- **Main entry**: `index.html` (homepage), `pages/` (subpages)
- **Styles**: SASS modular architecture with `main.scss` as entry point
- **Scripts**: Vanilla JS modules in `JS/` for interactive components
- **Assets**: `public/images/` for site images, `src/` for fonts and icons

## Critical Conventions

### RTL & Hebrew Language

- All text elements use `direction: rtl` in CSS (defined in `_setup.scss`)
- Hebrew content requires proper text direction and font handling
- Navigation and layouts flow right-to-left

### SASS Architecture

```scss
// Import pattern in main.scss
@use "setup"; // Variables, reset, RTL setup
@use "./main/nav"; // Component-specific styles
@use "./main/hero"; // Section-specific styles
```

- Use `@use` not `@import`
- Prefix partial files with underscore
- Mixins in `_mixin.scss` for reusable components (`@mixin button-style`, `@mixin h1-settings`)

### CSS Versioning

Update version numbers when modifying CSS:

- `index.html`: `main.css?v=0.9.2`
- `about.html`: `main.css?v=0.9.3`

### JavaScript Patterns

- Pure vanilla JS, no frameworks
- Module pattern: one file per feature (`slideShow.js`, `accordion.js`, `modal.js`)
- Event listeners use `DOMContentLoaded` wrapper
- Class toggling for state management (`active-pain-card`, `open-menu`)

### Interactive Components

- **Slideshow**: Auto-rotating crime type cards with manual navigation
- **Accordion**: FAQ sections with expand/collapse
- **Modal**: Image gallery popup for proof documents
- **Responsive Nav**: Mobile hamburger menu with class toggles

### Form Integration

- Forms reference `submit_form.php` but currently not implemented (static site)
- Standard contact form fields: full-name, phone, email
- WhatsApp integration: `https://wa.me/054-650-1600` with preset message

## Development Workflow

1. Use VS Code with SASS watcher extension for automatic compilation
2. Run Live Server extension for local development
3. Edit SASS files, not compiled CSS (auto-compiles with watcher)
4. Update version numbers in HTML after CSS changes
5. Test responsive behavior (mobile-first approach)
6. Verify RTL layout correctness across all major browsers
7. Test all interactive components (slides, accordion, modal)

## Browser Support

- Must support RTL (right-to-left) layout in all major browsers
- Hebrew font rendering compatibility required
- Target: Chrome, Firefox, Safari, Edge (latest versions)

## Key Files for Understanding Context

- `SASS/_setup.scss` - Global variables, RTL setup, font loading
- `SASS/_mixin.scss` - Reusable component styles
- `JS/slideShow.js` - Auto-rotating content showcase pattern
- `index.html` - Main page structure and component integration

## External Dependencies

- Enable.co.il accessibility plugin
- Google Maps embed for location
- WhatsApp Web API for contact button
