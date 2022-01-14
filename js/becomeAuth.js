//writing in db

const form=document.getElementById('becomeAuth');

form.addEventListener('submit',(e)=>
{
	e.preventDefault();
	db.collection('becomeAuth').add({
		
		name: form.name.value,
		email: form.email.value,
        phone: form.phone.value,
		message: form.message.value,
        file: form.file.value
		
	});
	    
	    form.name.value='';
        form.email.value='';
        form.phone.value='';
	    form.message.value='';
        form.file.value="";

	
});
