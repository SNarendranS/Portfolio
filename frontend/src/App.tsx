import Header from './Layouts/Header'
import Body from './Layouts/Body'
import Footer from './Layouts/Footer'
import { Box } from '@mui/material'
import { useGetHeroQuery, useGetNavItemsQuery } from './Store/api/strapiApi'
import { useRef } from 'react'

function App() {
  const { data: heroData, isLoading: heroIsLoading, error: heroError } = useGetHeroQuery();
  const { data: navItems, isLoading: navItemsIsLoading, error: navItemsError } = useGetNavItemsQuery();
  const introRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      sx={{
      }}>
      <>
        <Header ref={{ introRef, projectsRef }} navItems={{ data: navItems, isLoading: navItemsIsLoading, error: navItemsError }} />
        <Body ref={{ introRef, projectsRef }} />
        <Footer
          NavItems={{ data: navItems, isLoading: navItemsIsLoading, error: navItemsError }}
          Hero={{ data: heroData, isLoading: heroIsLoading, error: heroError }}
        />
      </>
    </Box>
  )
}

export default App