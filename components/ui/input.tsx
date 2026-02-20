import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: LucideIcon;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, icon: Icon, required, ...props }, ref) => {
        return (
            <label className="grid gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="flex items-center gap-1.5">
                    {Icon && <Icon className="h-3.5 w-3.5 text-brand-600" />}
                    {label}
                    {required && <span className="text-brand-500">*</span>}
                </span>
                <input
                    className={cn(
                        "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-4 text-sm font-semibold text-slate-800 outline-none ring-brand-500/10 transition-all hover:bg-white focus:border-brand-500 focus:bg-white focus:ring-4 placeholder:font-normal placeholder:text-slate-300",
                        className
                    )}
                    ref={ref}
                    required={required}
                    {...props}
                />
            </label>
        );
    }
);
Input.displayName = "Input";

export { Input };
