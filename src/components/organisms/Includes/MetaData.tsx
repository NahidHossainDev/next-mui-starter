import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

export const MetaData: FC<IMetaData> = (props) => {
	const { title, name, description, overwriteTitle, type, image, imageURL, pageURL } = props;
	const router = useRouter();
	const siteTitle = title + " - HomeLeads";
	const url = pageURL || process.env.publicURL + router.pathname;

	return (
		<Head>
			<meta name='viewport' content='width=device-width, minimum-scale=1, user-scalable=no, initial-scale=1' />

			{title && <title>{overwriteTitle ? title : siteTitle}</title>}
			{description && <meta name='description' content={description} />}

			{/* Open Graph Data */}
			{title && <meta property='og:title' content={overwriteTitle ? title : siteTitle} />}
			{name && <meta property='og:site_name' content={name} />}
			<meta property='og:url' content={url} />
			{description && <meta property='og:description' content={description} />}
			<meta property='og:type' content={type} />
			{(image || imageURL) && <meta property='og:image' content={image || imageURL} />}
		</Head>
	);
};

MetaData.defaultProps = {
	name: "",
	type: "website",
	imageURL: "",
};

export interface IMetaData {
	type?: string;
	name?: string;
	image?: string;
	imageURL?: string;
	pageURL?: string;
	title?: string;
	description?: string;
	overwriteTitle?: boolean;
}
