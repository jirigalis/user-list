import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private apiUrl = 'https://reqres.in/api/users';

    constructor(private http: HttpClient) {}

    getAll(page: number, perPage: number) {
        return this.http
            .get<any>(`${this.apiUrl}?page=${page}&per_page=${perPage}`)
            .pipe(catchError(this.handleError('getAll')));
    }

    getById(id: number) {
        return this.http
            .get<any>(`${this.apiUrl}/${id}`)
            .pipe(catchError(this.handleError(`getById id=${id}`)));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(`UserService: ${operation}`, error);
            return of(result as T);
        };
    }
}
