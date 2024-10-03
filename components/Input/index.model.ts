import { tv } from "tailwind-variants";
import Checkbox from "./Input";

export type InputProps = {
    label: string;
    placeholder?: string | undefined;
    value?: boolean;
    defaultValue?: boolean;
    onCheck: (value: boolean) => void;
    isError?: boolean;
    isDisabled?: boolean;
};

export const InputStyle = tv({
    slots: {
        container: 'space-y-2',
        input_box: 'flex-row space-x-1 items-center border-b border-grayscale-300',
        input: 'flex-grow font-sans text-base py-2 placeholder::text-grayscale-400 text-grayscale-700',
        header: 'flex-row space-x-1 items-center font-semibold text-sm',
        label: 'font-semibold text-sm',
        footer: 'text-xs text-grayscale-300'
    },
    variants:{
    }
})