import { CalendarIcon, ChatIcon, ViewIcon } from '@chakra-ui/icons'
import { Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import DashboardCompOne from './DashboardCompOne/DashboardCompOne'
import DashboardCompTwo from './DashboardCompTwo/DashboardCompTwo'
import DashboardHeader from './DashboardHeader/DashboardHeader'


const data_set_one = [
    {
        id: '00',
        header: 'View',
        footer: 'Per Day',
        icon: <ViewIcon color='gray.50' w='22px' h='25px' />,
        count: '580'
    },
    {
        id: '01',
        header: 'Quotes',
        footer: 'Per Minute',
        icon: <CalendarIcon color='gray.50' w='20px' h='25px' />,
        count: '580'
    },
    {
        id: '02',
        header: 'Messages',
        footer: 'Per Day',
        icon: <ChatIcon color='gray.50' w='20px' h='25px' />,
        count: '30',
        onClick: '/messages'
    },
]

const data_set_two = [
    {
        id: '00',
        header: 'Sales',
        subHeader: 'Per Week',
        color: 'teal.400',
        price: '5,530',
        bg: 'teal.100'
    },
    {
        id: '01',
        header: 'Profit',
        subHeader: 'Per Week',
        price: '5,530',
        color: 'orange.400',
        bg: 'orange.100'
    },
    {
        id: '02',
        header: 'Quotes',
        subHeader: 'Per Week',
        color: 'purple.400',
        price: '5,530',
        bg: 'purple.100'
    },
    {
        id: '03',
        header: 'Visits',
        subHeader: 'Per Week',
        color: 'blue.400',
        price: '2,330',
        bg: 'blue.100'
    },
]

export default function Dashboard() {
    return (
        <div>
            <Stack flexDirection="column" spacing="6" p='4' px='8'>
                {/* <SearchBar /> */}
                <DashboardHeader />
                <DashboardHeader />
                <Flex flexDirection="row" rounded='2xl' p='4' bg='#F9F8F3' justify="space-around">
                    {
                        data_set_one.map((item) => {
                            return <DashboardCompOne onPress={item.onClick} icon={item.icon} key={item.id} header={item.header} count={item.count} footer={item.footer} />
                        })
                    }
                </Flex>

                <Flex w='full' flexDirection='row' justify={{ base: "flex-start", md: 'space-around' }} flexWrap='wrap' align='center'>
                    {
                        data_set_two.map((item) => {
                            return <DashboardCompTwo key={item.id} price={item.price} bg={item.bg} color={item.color} header={item.header} subHeader={item.subHeader} />
                        })
                    }
                </Flex>

            </Stack>
        </div>
    )
}

