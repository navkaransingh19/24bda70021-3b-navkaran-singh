# 📚 Book Library Application

A simple and interactive book library web application built with modern web technologies. This project helps manage a personal book collection with features to add, search, edit, and remove books.

## 🎯 Project Overview

This is a Next.js-based application that allows users to:
- Add new books with title and author information
- Search through their book collection
- Edit existing book details
- Remove books from the library
- View all books in an organized card layout

## 🛠️ Technologies Used

- **Next.js 16+** - React framework for building fast web applications
- **React 19+** - JavaScript library for building user interfaces
- **TypeScript** - Adds type safety to JavaScript
- **Tailwind CSS** - Utility-first CSS framework for styling
- **shadcn/ui** - High-quality React component library
- **pnpm** - Fast and efficient package manager

## 📦 Project Structure

```
📁 app/
  📄 page.tsx       - Main page component with all application logic
  📄 layout.tsx     - Root layout wrapper
  📄 globals.css    - Global styles

📁 components/
  📁 ui/
    📄 button.tsx   - shadcn Button component
    📄 card.tsx     - shadcn Card component
    📄 input.tsx    - shadcn Input component
  📄 library-button.tsx - Custom styled button wrapper

📁 lib/
  📄 utils.ts       - Utility functions (cn for className merging)

📁 public/         - Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

1. **Clone/navigate to the project directory**
   ```bash
   cd project
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Add shadcn/ui components** (if needed)
   ```bash
   pnpm dlx shadcn@latest add button input card
   ```

4. **Run development server**
   ```bash
   pnpm dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:3000`

## 📚 How to Use

### Adding a Book
1. Fill in the **"Book title"** field in the form
2. Fill in the **"Author name"** field
3. Click the **"Add Book"** button (blue)
4. Your book appears at the top of the library list

### Searching Books
1. Type in the **search bar** at the top
2. Search works on both title and author names
3. Results update instantly as you type
4. Clear the search to see all books again

### Editing a Book
1. Find the book you want to edit
2. Click the **"Edit"** button (amber color)
3. The book card will show input fields with current data
4. Modify the title and/or author
5. Click **"Save"** to confirm or **"Cancel"** to discard changes

### Removing a Book
1. Find the book you want to remove
2. Click the **"Remove"** button (red color)
3. The book is immediately deleted from the library

## 💻 Component Details

### LibraryButton Component
A reusable button component with three color variants:
- **Add** (Blue) - Used for adding and saving
- **Edit** (Amber) - Used for editing books
- **Remove** (Red) - Used for removing and canceling

### Main Page Component (Home)
Contains all the logic for managing the book library:
- State management using React hooks
- Search filtering functionality
- Book CRUD operations (Create, Read, Update, Delete)

## 🔧 Technical Highlights

### State Management
The app uses React's `useState` hook to manage:
- `query` - Current search input
- `title` & `author` - New book form inputs
- `books` - Array of all books
- `editingId`, `editTitle`, `editAuthor` - Edit mode state

### Data Structure
Each book is an object with:
```typescript
type Book = {
  id: number;        // Unique ID (millisecond timestamp)
  title: string;     // Book title
  author: string;    // Author name
};
```

### Key Functions
- **filteredBooks** - Filters books based on search query (case-insensitive)
- **handleAdd()** - Creates and adds new book to library
- **handleRemove(id)** - Removes book by ID
- **handleEdit(book)** - Enters edit mode for a book
- **handleSaveEdit(id)** - Updates book with new values
- **handleCancelEdit()** - Exits edit mode without saving

## 🎨 Styling

The application uses:
- **Tailwind CSS** for responsive and modern design
- **shadcn/ui components** for consistent UI elements
- **Custom ClassNames** merged with the `cn()` utility function

## ✅ Features

- ✨ Clean and intuitive user interface
- 🔍 Real-time search functionality
- 📱 Responsive design (works on mobile, tablet, desktop)
- ✏️ Easy to edit existing books
- 🗑️ Quick removal of books
- 🎨 Beautiful card-based layout
- ⚡ Fast and smooth interactions

## 🐛 Error Handling

The app validates user input:
- Empty title or author fields are not allowed when adding
- Empty fields are not allowed when saving edits
- Invalid input is silently ignored (button does nothing)

## 📝 Notes for Future Work

Potential improvements could include:
- Save books to localStorage for persistence
- Add genre/category tags
- Rating system for books
- Export/import functionality
- Dark mode theme
- Book cover images
- Reading progress tracking

## 👨‍💻 Author

Written by a student learning Next.js and modern web development!

## 📄 License

This project is open for educational purposes.
