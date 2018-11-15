export interface IMenuItem {
    MenuSK: number;
    ParentMenuSK: number;
    MenuName: string;
    MenuType: string;
    MenuURI: string;
    MenuSortOrder: number;
    CreatedBy: string;
    CreatedTs: string;
    LastModfdBy: string;
    LastModfdTs: string;
    RecStat: string;
    cf_CmpntSK: number;
    daTableRowId: string;
    ttMenu?: IMenuItem[];
}
