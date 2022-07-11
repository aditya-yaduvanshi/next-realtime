import type {NextPage} from 'next';
import Head from 'next/head';
import {Center, Box} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
	return (
		<Box h='100%' w='75vw'>
			<Head>
				<title>Next Realtime</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Center w='100%' h='100%'>
				Click on user to see chat messages here.
			</Center>
		</Box>
	);
};

export default Home;