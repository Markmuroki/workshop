function drive(event){
    event.preventDefault();
    let age = document.getElementById
    {'age'}value;

    if (age == 18) {
    Document.getElementById('log').innerHtml='You can drive a small car.';    
    }else if (age > 18 && age < 24) {
    Document.getElementById('log').innerHtml='You can drive a big car.';
    }else if (age >= 24){
    Document.getElementById('log').innerHtml='You can drive a truck';
    }else{
    Document.getElementById('log').innerHtml='You are too young to drive';
    }
}

drive(event)
