import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <>
            <h1>This page not found</h1>
            <Link to="/">Back to home page</Link>
        </>
    );
  }
  