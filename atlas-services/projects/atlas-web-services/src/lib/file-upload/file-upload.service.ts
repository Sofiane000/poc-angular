import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class FileUploadService {
    constructor(private http: HttpClient) {}

    // need to add object here
    uploadFile(url: string, files: any[], formValues: any): Observable<boolean> {
        const formData = new FormData();
        console.log(formValues);
        for (const file of files) {
            formData.append(file.fileName, file);
        }
        for (const formValue of formValues) {
            formData.append(formValue.key, formValue.value);
        }

        return this.http.post(url, formData).pipe(
            map(() => {
                return true;
            })
        );
    }
}
