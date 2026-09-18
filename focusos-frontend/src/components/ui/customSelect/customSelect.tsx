import { ChevronDown } from "lucide-react";
import { useId } from "react";
import classes from "./customSelect.module.css";

export interface CustomSelectOption {
    label: string;
    value: string;
}

interface CustomSelectProps {
    label: string;
    options: CustomSelectOption[];
    value: string;
    isOpen: boolean;
    onToggle: () => void;
    onChange: (value: string) => void;
    layout?: "inline" | "stacked";
    menuPlacement?: "bottom" | "top";
}

function CustomSelect({ label, options, value, isOpen, onToggle, onChange, layout = "inline", menuPlacement = "bottom" }: CustomSelectProps) {
    const labelId = useId();
    const selectedOption = options.find((option) => option.value === value) ?? options[0];

    return (
        <div className={`${classes.customSelect} ${layout === "stacked" ? classes.stacked : ""}`}>
            <span id={labelId} className={classes.label}>{label}</span>
            <div className={classes.wrapper}>
                <button
                    type="button"
                    className={`${classes.trigger} ${isOpen ? classes.isOpen : ""}`}
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    aria-labelledby={labelId}
                    onClick={onToggle}
                >
                    <span>{selectedOption.label}</span>
                    <ChevronDown size={16} aria-hidden="true" />
                </button>

                {isOpen && (
                    <div className={`${classes.menu} ${menuPlacement === "top" ? classes.menuTop : ""}`} role="listbox" aria-labelledby={labelId}>
                        {options.map((option) => (
                            <button
                                type="button"
                                key={option.value}
                                role="option"
                                aria-selected={option.value === value}
                                className={option.value === value ? classes.selectedOption : ""}
                                onClick={() => onChange(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomSelect;
