import { ButtonAction } from './button-action';

export interface AtlasToolbarButton {
    title: string;
    action?: ButtonAction;
    isDisabled?: boolean;
    icon?: string;
    class?: string;
    isTextButton?: boolean;
    text?: string;
}
