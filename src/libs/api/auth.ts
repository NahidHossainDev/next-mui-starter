import { NextPageContext } from "next";
import { BaseAPI } from "./baseAPI";
import { BR, IAuth } from "./interfaces";

class AuthAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	/**
	 * User Sign in
	 * @param mobileNumber
	 * @param password
	 * @returns
	 */
	authSignin = (username: string, password: string) =>
		this.post<BR<IAuth>>("auth/metlife-admin-user-login", { username, password });

	/**
	 * Check if user is authenticate
	 * @param ctx
	 * @returns
	 */
	// validateAuth = (ctx?: NextPageContext) => this.get<BR<IAuth>>('auth', ctx);

	validateToken = (token: string, ctx?: NextPageContext) =>
		this.get<BR<IAuth>>("auth/patient-token-verification", ctx);

	/**
	 * User Registration - Second step
	 * @param mobileNumber
	 * @param otp
	 * @returns
	 */
	authVerifyOTP = (mobileNumber: string, otp: string) =>
		this.post<BR<string>>("auth/verify-otp", { mobileNumber, otp });

	/**
	 * User Registration - Final step
	 * @param mobileNumber
	 * @param password
	 * @param confirmPassword
	 * @returns
	 */
	authSetPassword = (mobileNumber: string, password: string, confirmPassword: string) =>
		this.post<BR<IAuth>>("auth/set-password", {
			mobileNumber,
			password,
			confirmPassword,
			type: "seller",
		});

	resetPassSendOTP = (mobileNumber: string) => this.post<BR<string>>("auth/reset", { mobileNumber });

	resetPassCheckOTP = (mobileNumber: string, otp: string) =>
		this.post<BR<string>>("auth/reset-otp-check", { mobileNumber, otp });

	resetPassword = (mobileNumber: string, password: string, confirmPassword: string) =>
		this.post<BR<string>>("auth/reset-password", { mobileNumber, password, confirmPassword });
}

export const authAPI = new AuthAPI(process.env.apiAuthURL);
