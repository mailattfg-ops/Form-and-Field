import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "relative py-6 lg:py-8 xl:py-12 overflow-hidden",
                    className
                )}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
