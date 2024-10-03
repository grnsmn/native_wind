import { tv } from "tailwind-variants";
import Checkbox from "./Checkbox";

export type CheckboxProps = {
    label: string;
    value?: boolean;
    defaultValue?: boolean;
    onCheck: (value: boolean) => void;
    isError?: boolean;
    isDisabled?: boolean;
};

export const CheckboxStyle = tv({
    slots: {
        container: 'flex-row items-center space-x-2 p-3 peer',
        checkbox: 'active:bg-primary-400 w-6 h-6 border border-grayscale-500 rounded-md bg-white align-center justify-center',
        icon: 'self-center',
        text: 'text-grayscale-700',
    },
    variants:{
        value:{
            true: {
                checkbox: 'bg-primary-300 border-primary-300',
                icon: 'text-white',
            },
        },
        isError: {
            true: {
                checkbox: 'border-2 border-critical-300',
            },
        },
        isDisabled: {
            true: {
                checkbox: 'bg-grayscale-300 border-grayscale-300',   
                text: 'text-grayscale-300',
            },
        }
    }
})