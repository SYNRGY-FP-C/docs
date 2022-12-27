import clsx from "clsx";

export default function Badge({
  variant = "primary",
  outline = false,
  children,
}) {
  const variants = {
    success: clsx({
      "text-green-500 border border-green-400": outline,
      "text-green-600 bg-green-200": !outline,
    }),
    danger: clsx({
      "text-red-500 border border-red-400": outline,
      "text-red-600 bg-red-200": !outline,
    }),
    warning: clsx({
      "text-yellow-500 border border-yellow-400": outline,
      "text-yellow-600 bg-yellow-200": !outline,
    }),
    info: clsx({
      "text-blue-500 border border-blue-400": outline,
      "text-blue-600 bg-blue-200": !outline,
    }),
    primary: clsx({
      "text-gray-800 border border-gray-400": outline,
      "text-gray-800 bg-gray-200": !outline,
    }),
  };
  return (
    <span className={clsx("px-2 py-1 rounded", variants[variant])}>
      {" "}
      {children}{" "}
    </span>
  );
}
