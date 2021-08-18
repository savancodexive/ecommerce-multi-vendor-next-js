import TopHeader from '@components/TopHeader'
import Head from 'next/head'

export default function Admin() {
  	return (
		<div className="">
			<Head>
				<title>Admin</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <TopHeader />
		</div>
  	)
}
