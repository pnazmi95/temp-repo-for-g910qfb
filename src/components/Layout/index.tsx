import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps extends React.PropsWithChildren {
    title: string,
}

const Layout: React.FunctionComponent<ILayoutProps> = ({children, title}): JSX.Element => {
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <div className="flex min-h-screen flex-col justify-between overflow-hidden font-display">
                <Header/>
                <main className="container m-auto mt-4 px-4">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Layout;
