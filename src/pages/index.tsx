import Layout from "@/components/Layout";

interface IHomePageProps extends React.PropsWithChildren{}
const HomePage: React.FunctionComponent<IHomePageProps> = ():JSX.Element => {
    return (
        <Layout title="Home Page">
            HomePage
        </Layout>
    )
}
export default HomePage;