//writing in db

const form=document.getElementById('contactInfo');

form.addEventListener('submit',(e)=>
{
	e.preventDefault();
	db.collection('contactInfo').add({
		
		name: form.name.value,
		email: form.email.value,
        phone: form.phone.value,
		message: form.message.value
		
	});
	    
	    form.name.value='';
        form.email.value='';
        form.phone.value='';
	    form.message.value='';

	
});
