/**
 * Standard Request Filter
 */
export class AtlasFilter {
    operator: string;
    value: string | number | Date;
    property: string;
    dataType?: string;
}
