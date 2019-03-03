import { IAtlasToolbarButton } from '../../atlas-toolbar/models/atlas-toolbar-button';

export interface IColumnSetting {
    /** The field to which the column is bound.*/
    field: string;
    /** The title of the column. */
    title: string;
    /** The width of the column (in pixels). */
    width?: number;
    /** Defines if a filter UI will be displayed for this column.*/
    isFilterable?: boolean;
    /** The format that is applied to the value before it is displayed. */
    format?: any;
    /** Defines the editor type. Used when the column enters the edit mode.
     *  The default value is text.
     */
    type?: 'text' | 'numeric' | 'boolean' | 'date' | 'button';
    /** Sets the custom CSS classes to the column header cell
     */
    headerClass?: any;
    /** Sets the custom styles for the header cell of the column.
     */
    headerStyle?: any;
    /** Sets the visibility of the column */
    hidden?: boolean;
    /** Sets the condition that needs to be satisfied for a column to remain visible.
     * If you set the hidden property, the behavior of media is overridden
     */
    media?: string;
    /**
     * Sets the custom styles for the table cells (excluding the footer and header ones) of the column.
     */
    style?: { [key: string]: string };
    showTemplate?: boolean;
    button?: IAtlasToolbarButton;
}
