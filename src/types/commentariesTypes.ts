
export interface IComment {
	avatar: string;
	comment: string;
	createdAt: string;
	date: string;
	email: string;
	id: string;
	item: string;
	name: string;
	params?: string;
}


export interface ICreateCommentary {
	comment: string;
	setComment: (e: string) => void;
<<<<<<< HEAD
=======
	setComments: (value: IComment[]) => void;
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
	id: string | undefined;
	name: string | undefined;
	params: string | undefined;
	item: string | undefined;
}

export interface ICommentariesList {
<<<<<<< HEAD
	params: string | undefined;
	identificator: string | undefined;
=======
	commentaries: IComment[] | undefined;
	setComments: (v: IComment[]) => void
	params: string | undefined;
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
}

export interface ICommentariesItem {
	comm: IComment
	params: string | undefined;
<<<<<<< HEAD
=======
	setComments: (v: IComment[]) => void
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
}

export interface ICommentariesBlock {
	product?: {
		URL: string;
		name: string;
		cooking: string;
		ingridients: string;
	}
}

export interface IComments {
	createdAt: string;
	name: string;
	avatar: string;
	id: string;
	comment: string;
	email: string;
	date: string;
	item: string;
<<<<<<< HEAD
}

export interface IcommentObject {
	id: string | undefined;
	name: string | undefined;
	comment: string;
	email: string | null;
	item: string | undefined;
	date: string;
	params: string | undefined;
=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
}