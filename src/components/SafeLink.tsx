import { Link, LinkProps, useInRouterContext } from "react-router-dom";

/**
 * Prevents crashes if something renders outside a Router (e.g. on hard reload during transient mount errors).
 * - If Router context exists => uses <Link> (SPA navigation)
 * - Otherwise => falls back to a plain <a>
 */
export function SafeLink({ to, ...props }: LinkProps) {
  const inRouter = useInRouterContext();

  if (!inRouter) {
    const href = typeof to === "string" ? to : to.pathname || "/";
    return <a href={href} {...(props as any)} />;
  }

  return <Link to={to} {...props} />;
}
