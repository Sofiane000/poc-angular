import { FileRestrictions } from '@progress/kendo-angular-upload';

export interface IUploadConfig {
    uploadRestrictions: FileRestrictions;
    multiple?: boolean;
    batch?: boolean;
    disabled?: boolean;
    autoUpload: boolean;
}
