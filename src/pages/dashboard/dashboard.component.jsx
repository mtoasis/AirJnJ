import React from 'react'

import {DashboardContainer} from './dashboard.styles'

import Header from '../../components/header/header.component'
import BookModal from '../../components/book-modal/book-modal.component'

const Dashboard = () =>{

    return(
        <DashboardContainer>
            <Header />
            <BookModal />
        </DashboardContainer>

    )
}

export default Dashboard