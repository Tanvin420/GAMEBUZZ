//writing in db

const form=document.getElementById('postComment');

form.addEventListener('submit',(e)=>
{
	e.preventDefault();
	db2.collection('postComment').add({
		
		name: form.name.value,
		email: form.email.value,
		message: form.message.value
		
	});
	    
	    form.name.value='';
        form.email.value='';
	    form.message.value='';
	
});


//reading in db



const div=document.querySelector('.blog__details__comment');

renderList =(doc)=>
{
	var main_div=document.createElement('div');
	var text_div=document.createElement('div');
	var name=document.createElement('h5');
	var comment=document.createElement('p');
	var pic_div=document.createElement('div');
	var img=document.createElement('img');
	main_div.setAttribute('class','blog__details__comment__item');
	text_div.setAttribute('class','blog__details__comment__item__text');
	name.setAttribute('class','');
	comment.setAttribute('class','');
	pic_div.setAttribute('class','blog__details__comment__item__pic');
	img.setAttribute('src','https://picsum.photos/200/300.jpg');
	
	name.textContent=doc.data().name;
	comment.textContent=doc.data().message;
	
	text_div.appendChild(name);
	text_div.appendChild(comment);
	pic_div.appendChild(img);
	main_div.appendChild(pic_div);
	main_div.appendChild(text_div);
	div.appendChild(main_div);
}







db2.collection('postComment').onSnapshot(snap=>
{ let changes=snap.docChanges();
   changes.forEach(change =>
   {
	   if(change.type=='added')
		   {
			   renderList(change.doc);
		   }
	   
   });
	
	
});// JavaScript Document// JavaScript Document