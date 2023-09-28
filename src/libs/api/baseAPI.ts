import store from '@store';
import { authSignOut } from '@store/actions';
import { NextPageContext } from 'next';
import Router from 'next/router';
import { destroyCookie, parseCookies } from 'nookies';

export class BaseAPI {
    protected baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    private token(ctx?: NextPageContext) {
        const cookies = parseCookies(ctx);
        const { token = null } = cookies;
        return token;
    }

    private logOut() {
        destroyCookie(null, 'token');
        store.dispatch(authSignOut());
    }

    protected async get<T>(url: string, ctx?: NextPageContext): Promise<T> {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
                Authorization: this.token(ctx),
            },
        });

        return await res.json();
    }

    protected async post<T>(url: string, payload: unknown, ctx?: NextPageContext): Promise<T> {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
                Authorization: this.token(ctx),
            },
            body: JSON.stringify(payload),
        });

        return await res.json();
    }

    protected async put<T>(url: string, payload: unknown, ctx?: NextPageContext): Promise<T> {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
                Authorization: this.token(ctx),
            },
            body: JSON.stringify(payload),
        });

        return await res.json();
    }

    protected async patch<T>(url: string, payload: unknown, ctx?: NextPageContext): Promise<T> {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
                Authorization: this.token(ctx),
            },
            body: JSON.stringify(payload),
        });

        return await res.json();
    }

    protected async delete<T>(url: string, payload: unknown, ctx?: NextPageContext): Promise<T> {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
                Authorization: this.token(ctx),
            },
            body: JSON.stringify(payload),
        });

        return await res.json();
    }

    protected async image<T>(url: string, data: FormData, ctx?: NextPageContext): Promise<T> {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: this.token(ctx),
            },
            body: data,
        });

        return await res.json();
    }

    protected async postForm<T>(url: string, data: FormData): Promise<T> {
        return await fetch(`${this.baseURL}/${url}`, {
            headers: {
                Accept: 'application/json',
                Authorization: this.token(),
            },
            method: 'POST',
            body: data,
        }).then((r) => r.json());
    }

    private redirectTo(path: string, ctx?: NextPageContext) {
        const url = `${process.env.publicURL}${path}`;

        if (ctx?.res) {
            if (!ctx.req.url.includes(path)) {
                ctx.res?.writeHead(302, { Location: url });
            }
            ctx.res?.end();
        } else {
            Router.replace(url);
        }
    }

    private get customError(): unknown {
        return {
            success: false,
            data: null,
            message: ['Request to Server Failed'],
        };
    }
}
