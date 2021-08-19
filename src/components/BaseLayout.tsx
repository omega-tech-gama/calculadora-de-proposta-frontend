import { Header } from "./Header"

export const BaseLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      {children}
    </main>
  </>
)