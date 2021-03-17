

function repaintAddPhone(niz, delete_app) {

	delete_app.innerHTML = '';

	niz.forEach(el => {

		let div = document.createElement('div');
		div.classList.add('delete-inner-div');

		let span = document.createElement('span');
		span.innerText = el.mark + " " + el.model;
		span.classList.add('delete-span');
		let deleteButton = document.createElement('button');
		deleteButton.innerText = 'Delete'
		deleteButton.classList.add('delete-button');
		deleteButton.addEventListener('click', () => {
			let usernameLS = localStorage.getItem('username')
			let passwordLS = localStorage.getItem('password')
			axios.delete(`http://localhost:8080/apiapi/webapi/myresource/delete`, {
				params: {
					id: el.id,
					username: usernameLS,
					password: passwordLS,

				}
				//
			}).then(res => {
				
				const index = niz.indexOf(el);
				if (index > -1) {
					niz.splice(index, 1);
				}
                   repaintAddPhone(niz, delete_app)

			})

		})

		div.append(span, deleteButton)
		delete_app.append(div);


	})


	//console.log('repaint add phone', niz, delete_app)



}
export default repaintAddPhone