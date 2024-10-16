import PageLayout from "@/layouts/Layout"
import ContactForm from "@/components/ContactForm"
const Contact = ({ pageProps }) => {
  return (
    <PageLayout {...pageProps}>
      <div className="min-h-screen min-w-screen flex bg-black justify-center items-center">
        <ContactForm {...pageProps}></ContactForm>
      </div>
    </PageLayout>

  )
}

export default Contact

export async function getStaticProps({ locale }) {

  return {
    props: {
      locale: { locale },
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  }
}