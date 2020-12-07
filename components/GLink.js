import Link from 'next/link';

function Users({ href, children }) {
  return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
  );
}

export default Users;