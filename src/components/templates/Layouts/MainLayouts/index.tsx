// import { MainHeader } from "@components/organisms";
import { FC } from "react";

export const MainLayout: FC<PropsType> = ({ children }) => {
	return (
		<>
			{/* <MainHeader /> */}
			<main>{children}</main>
		</>
	);
};

interface PropsType {
	children?: React.ReactNode;
}
