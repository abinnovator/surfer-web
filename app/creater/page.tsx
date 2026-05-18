"use client";

import { useState, useCallback, FormEvent } from "react";

const MAX_LENGTHS = {
  title: 100,
  description: 500,
} as const;

/**
 * Reusable and accessible text input component.
 * Exported for use in other parts of the application.
 */
export function TextInput({
  id,
  label,
  value,
  onChange,
  maxLength,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        required
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        aria-invalid={false}
        className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitting(true);
      setError(null);
      try {
        // Simulate async operation (e.g., API call)
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log("Form submitted", { title, description });
        // Reset fields after successful submission
        setTitle("");
        setDescription("");
      } catch (err) {
        setError("Failed to submit the form. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
    [title, description]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <main className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Create New Item</h1>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <TextInput
            id="title"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={MAX_LENGTHS.title}
          />
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              maxLength={MAX_LENGTHS.description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && (
            <div role="alert" className="text-red-600 text-sm mb-2">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? "Creating..." : "Create"}
          </button>
        </form>
      </main>
    </div>
  );
}
