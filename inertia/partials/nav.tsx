import type { SharedProps } from "@adonisjs/inertia/types";
import { Link, usePage } from "@inertiajs/react";

function Nav() {
  // @ts-expect-error currentUser is not defined in SharedProps
  const page = usePage<SharedProps>().props;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        {page.currentUser ? (
          <>
            <Link href="/dashboard">
              {/* @ts-ignore */}
              <span>{page.currentUser.email}</span>
            </Link>
            <Link
              href="/logout"
              method="delete"
              as="button"
              className="text-bandicoot-800 hover:underline"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link href="/login" className="text-bandicoot-800 hover:underline">
              Login
            </Link>
            <span className="mx-4">or</span>
            <Link
              href="/register"
              className="ml-4 text-blue-500 hover:underline"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
