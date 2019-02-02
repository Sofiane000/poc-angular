import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class FileUploadService {
    constructor(private http: HttpClient) {}

    uploadFile(url: string, files: any[]): Observable<boolean> {
        const formData = new FormData();

        for (const file of files) {
            formData.append(file[0].name, file[0]);
        }
        return this.http.post(url, formData).pipe(
            map(() => {
                return true;
            })
        );
    }
}
