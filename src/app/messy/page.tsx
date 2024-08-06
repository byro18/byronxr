'use client';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import { Sidebar } from '../../components/Sidebar';
// this will get the id of the one that is selected from the list
//id: 0, 1, 2, 3, in dynamodb
export default function page() {
	return (
		<>
			<Sidebar />
			<h1>Hello there. </h1>
		</>
	);
}
