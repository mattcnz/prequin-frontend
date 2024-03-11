import { ChakraProvider } from '@chakra-ui/react'
import {QueryClientProvider, QueryClient} from 'react-query'
import './App.css'
import routes from './routes'

const queryClient = new QueryClient()

function App() {

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        {routes}
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
