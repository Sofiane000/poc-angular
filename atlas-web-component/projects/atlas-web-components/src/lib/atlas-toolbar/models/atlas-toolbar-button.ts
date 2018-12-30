import { ButtonAction } from './button-action';

export interface IAtlasToolbarButton {
    title: string;
    action?: ButtonAction;
    isDisabled?: boolean;
    icon?: string;
    class?: string;
    isTextButton?: boolean;
    text?: string;
}
