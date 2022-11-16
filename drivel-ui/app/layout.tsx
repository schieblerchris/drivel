import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '#/styles/globals.css';
import Head from "#/ui/head";
import Footer from "#/ui/footer";
import Header from "#/ui/header";

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html className="h-100">
        <Head/>
        <body className="d-flex flex-column h-100">
        <Header />
        <main className="flex-shrink-0">
            <div className="container-fluid pt-2 px-5 mt-5">
                { children }
            </div>
        </main>
        <Footer/>
        </body>
        </html>
    )
}
