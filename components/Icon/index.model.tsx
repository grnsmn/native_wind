import { tv } from "tailwind-variants";

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
  style?: string;
}
  
  export const ButtonStyle = tv({
    slots: {
      container: 'flex-row space-x-1 justify-center px-3 py-2 items-center rounded-3xl bg-primary-300 border-0 active:opacity-50 active:bg-primary-400',
      text: 'text-white font-sans text-center text-sm',
      icon: 'text-white',
    },
    variants: {
      variant: {
        outline: {
          container: 'border border-primary-300 bg-transparent active:bg-transparent',
          text: 'text-primary-300',
          icon: 'text-primary-300',
        },
        ghost:{
          container: 'bg-transparent active:bg-primary-100',
          text: 'text-primary-300',
          icon: 'text-primary-300',
        }
      },
      disabled: {
        true: {
          container: 'opacity-60',
        },
      },
      isLarge: {
        true: {
          container: 'px-4 py-3',
          text: 'text-base',
        },
      },
      isLoading: {
        true: {
          container: 'pointer-events-none',
        },
      },
    },
  });