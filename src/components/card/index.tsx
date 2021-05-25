import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardBody } from './style';

interface IProps {
	imgPath: string;
	description: string;
	id: number;
}

const Index = ({ imgPath, description, id }: IProps) => {
	return (
		<Card>
			<CardHeader>
				<Link href={`/post/${id}`}>
					<a>
						<img src={imgPath} alt={description} className="product-img" />
					</a>
				</Link>
			</CardHeader>
			<CardBody>
				<Link href={`/post/${id}`}>
					<a>{description}</a>
				</Link>
			</CardBody>
		</Card>
	);
};

export default Index;
