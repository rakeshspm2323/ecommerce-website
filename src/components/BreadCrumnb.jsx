import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Breadcrumb() {

  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    if (router) {
      const pathWithoutQuery = router.asPath.split("?")[0];
      const asPathNestedRoutes = pathWithoutQuery
        .split("/")
        .filter((v) => v.length > 0);

      const pathArray = asPathNestedRoutes.map((subpath, idx) => {
        const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
        return {
          href,
          label: decodeURIComponent(subpath).replace(/-/g, " "),
        };
      });

      setBreadcrumbs([{ href: "/", label: "Home" }, ...pathArray]);
    }
  }, [router]);

  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  return (
    <>
    <div className="container mx-auto pt-5">
    <nav className="text-sm text-gray-700 mb-5 md:ml-0 ml-5">
      <ol className="list-reset flex flex-wrap space-x-1 items-center">
        {breadcrumbs.map((crumb, i) => (
          <li key={i} className="flex items-center">
            {i !== 0 && <span className="ml-1 mr-2 text-gray-500">{">"}</span>}
            {i === breadcrumbs.length - 1 ? (
              <span className="capitalize font-semibold">{crumb.label}</span>
            ) : (
              <Link href={crumb.href}>
                <span className="capitalize text-gray-500 hover:underline">{crumb.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
    </div>
    </>
  );
}
