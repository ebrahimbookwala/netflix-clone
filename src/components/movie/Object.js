import React from "react";

function Object() {
	const menu = [
		{
			name: "Hello",
			id: 1,
			items: [
				{
					name: "Hi",
					id: 2,
					items: [
						{
							name: "How",
							id: 3,
						},
					],
				},
			],
		},
		{
			name: "Hello easy",
			id: 5,
		},
	];

	function printName(obj) {
		if (!("items" in obj)) {
			return <li>{obj.name}</li>;
		}
	}

	function checkForItem(arr) {
		for (var item of arr) {
			if ("items" in item) {
			} else {
				printName(item);
			}
		}
	}

	menu.forEach((inner) => {
		if ("items" in inner) {
			checkForItem(inner.items);
		}
	});

	return <div></div>;
}

export default Object;
