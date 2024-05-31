const $tableBody = document.querySelector(".list");
const $fragment = document.createDocumentFragment();

const renderData = (data1) => {
	data1.forEach((item, index) => {
		console.log(item.id);
		const $tableRow = document.createElement("tr");
		$tableRow.classList.add("item");
		$tableRow.innerHTML = `
            <td class="num">${index + 1}</td>
            <td><img src="${item.avatar}" alt="${item.first_name} ${
			item.last_name
		}"></td>
            <td class="user">${item.first_name} ${item.last_name}</td>
            <td><a href="mailto:${item.email}">${item.email}</a></td>
        `;
		$fragment.appendChild($tableRow);
	});
	$tableBody.appendChild($fragment);
};

fetch("https://reqres.in/api/users?page=2")
	.then((request) => request.json())
	.then((data1) => renderData(data1.data));
