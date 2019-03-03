import { IToolbarCheckBox } from './atlas-toolbar-checkbox';
import { ButtonAction } from './button-action';

export interface IAtlasToolbarButton {
    title: string;
    action?: ButtonAction;
    isDisabled?: boolean;
    icon?: string;
    class?: string;
    isTextButton?: boolean;
    text?: string;
    isHidden?: boolean;
    isFilterMenu?: boolean;
    isColumnsMenu?: boolean;
    checkbox?: IToolbarCheckBox;
}
