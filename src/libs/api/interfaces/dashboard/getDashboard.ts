interface Status {
	Contact_Details: boolean;
	Id_Info: boolean;
	Store_Profile: boolean;
	Financial_Details: boolean;
}

interface IDashboardProfileStatus {
	status: Status;
	stepsLeft: number;
}

interface IDashboardSellerProductsCount {
	isProductOverFifty: boolean;
	productsCount: number;
}

interface IDashboardOrders {
	awaitingConfirmation: number;
	moreThanTwentyFour: number;
	fromTwelveToTwentyFour: number;
	lastTwelveHoursOrders: number;
	awaitingPickUpRequest: number;
	moreThanTwentyFourHours: number;
	fromTwelveToTwentyFourHours: number;
	lastTwelveHoursPickupRequest: number;
}

interface IDashboardRevenue {
	thisMonth: number;
	thisWeek: number;
	today: number;
	allTime: number;
}

interface IDashboardRating {
	totalOrders: number;
	rejected: number;
	cancelled: number;
	confirmedWithinTwentyFour: number;
	readyToShipWithinTwentyFour: number;
	avgOrderConfirmTime: string;
	avgOrderReadyToShipTime: string;
}

export interface IDashboard {
	profileStatus: IDashboardProfileStatus;
	sellerProductsCount: IDashboardSellerProductsCount;
	orders: IDashboardOrders;
	revenue: IDashboardRevenue;
	rating: IDashboardRating;
	statusReason: string;
}
