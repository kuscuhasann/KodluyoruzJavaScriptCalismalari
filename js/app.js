let ulDom=document.querySelector("#categoryList");
fetch("https://api.funadres.com/api/categories")
	.then((response) => response.json()) //parse json data
	.then(function (todos) {
		todos.forEach((todo) => {
		 let liDom=document.createElement('li');
     liDom.innerHTML=todo.categoryName;
     ulDom.append(liDom);
		});
	});
