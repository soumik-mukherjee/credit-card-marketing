import React from 'react'
import { DemoAppShell, DemoMuiTheme } from '@project/ui-components'
import { ThemeProvider } from '@material-ui/core/styles'
import {navigate} from 'gatsby';

const AppShell = ({ children }) => {
  const handleUserButtonClick = () => {
    console.log('User button clicked!')
  }

  const handleHomeClick = () => {
    console.log('Home Menu Item clicked!')
    navigate('/app/home');

  }

  const handleMyAccountClick = () => {
    console.log('My Account Menu Item clicked!')
    navigate('/app/myAccount');
  }

  const handleMyProfileClick = () => {
    console.log('My profile Menu Item clicked!')
    navigate('/app/myProfile');
  }
  return (
    <ThemeProvider theme={DemoMuiTheme}>
      <DemoAppShell
        appBarTitle="My GoodyBag"
        appBarUserBtnLabel="john.doe@foo.com"
        onAppBarUserBtnClick={handleUserButtonClick}
        onHomeItemClicked={handleHomeClick}
        onMyAccountItemClicked={handleMyAccountClick}
        onMyProfileItemClicked={handleMyProfileClick}
      >
        {children}
      </DemoAppShell>
    </ThemeProvider>
  )
}


export default AppShell;