import { type SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, ChevronDown } from "lucide-react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    icon?: LucideIcon;
    options: readonly string[] | string[];
    placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, icon: Icon, options, placeholder, required, ...props }, ref) => {
        return (
            <label className="grid gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="flex items-center gap-1.5">
                    {Icon && <Icon className="h-3.5 w-3.5 text-brand-600" />}
                    {label}
                    {required && <span className="text-brand-500">*</span>}
                </span>
                <div className="relative group">
                    <select
                        className={cn(
                            "w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-4 text-sm font-semibold text-slate-800 outline-none ring-brand-500/10 transition-all hover:bg-white focus:border-brand-500 focus:bg-white focus:ring-4",
                            className
                        )}
                        ref={ref}
                        required={required}
                        {...props}
                    >
                        {placeholder && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-hover:text-brand-600">
                        <ChevronDown className="h-4 w-4 stroke-[2.5]" />
                    </div>
                </div>
            </label>
        );
    }
);
Select.displayName = "Select";

export { Select };
