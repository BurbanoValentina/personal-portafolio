import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonSize = "sm" | "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSize;
  children: ReactNode;
}

export const Button = ({ className = "", size = "default", children, ...props }: ButtonProps): React.JSX.Element => {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-xs sm:text-sm",
    default: "px-4 py-2 text-sm sm:text-base",
    lg: "px-6 py-3 text-base sm:text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
