# BookVibe

This is a web application for book lovers to discover new books, read them, and see what others are reading.

## Live Demo

Check out the live application here: [https://bookvibe001.netlify.app/](https://bookvibe001.netlify.app/)

## Features

- View a list of books
- View details for a single book
- Books are sorted by rating and page-numbers
- Listed Books page to see the books that have been read or are on the wishlist
- A chart to visualize the read books based on the number of pages
- Responsive design for mobile and desktop

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **React Router**: For routing and navigation.
- **Tailwind CSS**: A utility-first CSS framework.
- **DaisyUI**: A component library for Tailwind CSS.
- **React Tabs**: For creating tabbed interfaces to switch between read and wish lists.
- **React Hot Toast**: For displaying notifications and toast messages to users.
- **React Icons**: A library providing a collection of popular icons.


## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `dist` folder.

## Knowledge Check

### React Hooks and Core Concepts

#### `useState`
`useState` is a React hook used to store and update local component data.

Example from this project: `const [sortBy, setSortBy] = useState('rating');` in [ReadList.jsx](src/pages/ReadList/ReadList.jsx).

#### `useEffect`
`useEffect` runs side effects after render, such as fetching data or reading from local storage.

Example from this project: `fetch('/booksData.json')` inside `useEffect` in [ReadList.jsx](src/pages/ReadList/ReadList.jsx).

#### `useMemo`
`useMemo` caches a computed value so React does not recalculate it on every render unless dependencies change.

Example from this project: `const sortedReadList = useMemo(() => { ... }, [readList, sortBy]);` in [ReadList.jsx](src/pages/ReadList/ReadList.jsx).

#### Context API
Context API is a way to share data across multiple components without passing props through every level.

Example from this project: book data is currently passed with props like `singleBook` in [Book.jsx](src/pages/Book/Book.jsx), but Context API would be useful if read list and wish list data needed to be shared globally.

#### Props
Props are read-only values passed from a parent component to a child component.

Example from this project: `Book` receives `singleBook` as a prop in [Book.jsx](src/pages/Book/Book.jsx).

#### State
State is component-owned data that can change over time and trigger re-rendering.

Example from this project: `books`, `sortBy`, `readList`, and `wishList` are state-driven values in [ReadList.jsx](src/pages/ReadList/ReadList.jsx).

#### Props vs State
Props are used to send data into a component, while state is used to manage data inside a component.

Example from this project: `singleBook` is a prop in [Book.jsx](src/pages/Book/Book.jsx), while `sortBy` in [ReadList.jsx](src/pages/ReadList/ReadList.jsx) is local state.

#### `useRef`
`useRef` stores a mutable value or DOM reference without causing a re-render.

Example from this project: not used yet, but it would fit a search input or scroll-to-top button.

#### Custom Hooks
Custom hooks let you reuse hook logic across multiple components.

Example from this project: the read-list and wish-list filtering logic in [ReadList.jsx](src/pages/ReadList/ReadList.jsx) could later be moved into a custom hook.

#### Conditional Rendering
Conditional rendering means showing different UI based on a condition.

Example from this project: the active tab content in [ReadList.jsx](src/pages/ReadList/ReadList.jsx) changes between the read list and wish list panels.

#### Component Reusability
Reusable components keep the app consistent and reduce duplicated UI code.

Example from this project: [Book.jsx](src/pages/Book/Book.jsx) is reused for both the read list and wish list displays.

#### Lifting State Up
Lifting state up means moving shared state to the nearest common parent so multiple components can use it.

Example from this project: if read and wish data needed to control the navbar badge count, that shared state could be lifted to a higher component like [Root.jsx](src/pages/Root/Root.jsx).

### Quick Summary

- Use props to pass data down.
- Use state to store changing data.
- Use `useEffect` for side effects.
- Use `useMemo` for expensive derived values.
- Use Context API when many components need the same shared data.

