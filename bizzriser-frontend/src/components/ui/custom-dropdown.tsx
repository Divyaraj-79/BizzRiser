"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface Option {
    id: string;
    title: string;
}

interface CustomDropdownProps {
    label?: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export function CustomDropdown({
    label,
    options,
    value,
    onChange,
    placeholder = "Select an option",
    className = ""
}: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.id === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {label && (
                <label className="block text-sm font-medium text-foreground mb-2">
                    {label}
                </label>
            )}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-bizz-primary transition-colors focus:outline-none focus:ring-2 focus:ring-bizz-primary/20"
            >
                <span className={selectedOption ? "text-foreground" : "text-muted-foreground"}>
                    {selectedOption ? selectedOption.title : placeholder}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-background border border-border rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                    <div className="max-h-60 overflow-y-auto">
                        {options.length === 0 ? (
                            <div className="p-4 text-sm text-muted-foreground text-center">
                                No options available
                            </div>
                        ) : (
                            options.map((option) => (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => {
                                        onChange(option.id);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between p-3 text-sm text-left hover:bg-muted transition-colors ${value === option.id ? 'bg-bizz-primary/10 text-bizz-primary' : 'text-foreground'
                                        }`}
                                >
                                    <span>{option.title}</span>
                                    {value === option.id && <Check className="w-4 h-4" />}
                                </button>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
