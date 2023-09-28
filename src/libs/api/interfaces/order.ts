export interface IDashboardStatus {
	videoCallCount: number;
	audioCallCount: number;
	missedCallCount: number;
	missedChatCount: number;
	chatCount: number;
	totalUser: number;
}

export interface IVideoCallDetails {
	id: string;
	patientInfo: PatientInfo;
	status: string;
	appointmentId: string;
	createdAt: Date;
	callStartTime: number;
	callEndTime: number;
	duration: string;
	doctorInfo: IDoctorInfo;
}

interface IDoctorInfo {
	firstName: IName;
	lastName: IName;
}

interface IName {
	en: string;
	bn: null | string;
}

interface PatientInfo {
	name: string;
	mobileNumber: string;
}

export interface IAudioCallDetails {
	// packageType: string;
	// corporateClientId: string;
	// callStatus: string;
	// packageID: string;
	// packageName: string;
	// z_id: string;
	// patientID: string;
	// patientName: string;
	// mobileNumber: string;
	// callStartTime: string;
	// callEndTime: string;
	// createdAt: Date;
	// updatedAt: Date;
	// id: string;
	// duration: string;
	id: string;
	mobileNumber: string;
	callTime: string;
}

export interface IChatDetail {
	id: string;
	isChatClosed: boolean;
	bookingDate: Date;
	createdAt: Date;
	patientName: string;
	patientMobileNumber: string;
	doctorInfo: IDoctorInfo;
}

export interface IMissedChatData {
	id: string;
	isChatClosed: boolean;
	bookingDate: Date;
	createdAt: Date;
	patientName: string;
	patientMobileNumber: string;
}
export interface IMissedCallData {
	id: string;
	slot: string;
	patientInfo: PatientInfo;
	status: string;
	appointmentId: string;
	createdAt: string;
}

export interface IUserDetail {
	lastName: string;
	firstName: string;
	mobileNumber: string;
	createdAt: Date;
}
export interface ITableData {
	data:
		| IVideoCallDetails[]
		| IChatDetail[]
		| IMissedChatData[]
		| IMissedCallData[]
		| IAudioCallDetails[]
		| IUserDetail[];
	total: number;
	totalPages: number;
	nextPage: null;
	pageNumber: number;
}
