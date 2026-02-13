'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { LibraryButton } from '@/components/library-button';

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function Home() {
  const [query, setQuery] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');

  const filteredBooks = books.filter((book) => {
    const lowerQuery = query.toLowerCase();
    return (
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery)
    );
  });

  const handleAdd = () => {
    if (!title.trim() || !author.trim()) {
      return;
    }

    const newBook: Book = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
    };

    setBooks([newBook, ...books]);
    setTitle('');
    setAuthor('');
  };

  const handleRemove = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEdit = (book: Book) => {
    setEditingId(book.id);
    setEditTitle(book.title);
    setEditAuthor(book.author);
  };

  const handleSaveEdit = (id: number) => {
    if (!editTitle.trim() || !editAuthor.trim()) {
      return;
    }

    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, title: editTitle.trim(), author: editAuthor.trim() }
          : book
      )
    );
    setEditingId(null);
    setEditTitle('');
    setEditAuthor('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditAuthor('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Library
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search books by title or author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Add Book Form */}
        <Card className="p-6 mb-8">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <LibraryButton
              onClick={handleAdd}
              variant="add"
            >
              Add Book
            </LibraryButton>
          </div>
        </Card>

        {/* Books Display */}
        <div className="space-y-4">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {query
                  ? 'No books match your search'
                  : 'No books in library yet'}
              </p>
            </div>
          ) : (
            filteredBooks.map((book) => (
              <Card key={book.id} className="p-6">
                {editingId === book.id ? (
                  <div className="space-y-4">
                    <Input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      placeholder="Book title"
                    />
                    <Input
                      type="text"
                      value={editAuthor}
                      onChange={(e) => setEditAuthor(e.target.value)}
                      placeholder="Author name"
                    />
                    <div className="flex gap-2">
                      <LibraryButton
                        onClick={() => handleSaveEdit(book.id)}
                        variant="add"
                      >
                        Save
                      </LibraryButton>
                      <LibraryButton
                        onClick={handleCancelEdit}
                        variant="remove"
                      >
                        Cancel
                      </LibraryButton>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {book.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{book.author}</p>
                    <div className="flex gap-2">
                      <LibraryButton
                        onClick={() => handleEdit(book)}
                        variant="edit"
                      >
                        Edit
                      </LibraryButton>
                      <LibraryButton
                        onClick={() => handleRemove(book.id)}
                        variant="remove"
                      >
                        Remove
                      </LibraryButton>
                    </div>
                  </div>
                )}
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
