export interface Post {
	id: number;
	title: string;
	text: string;
    author: User;
}

export interface User {
	id: number;
	name: string;
	creationDate: Date;
}