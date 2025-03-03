import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AllRoutes } from '@components/AllRoutes'

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <AllRoutes />
        </QueryClientProvider>
    )
}

export default App
